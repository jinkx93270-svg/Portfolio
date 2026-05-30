"""Backend API tests for the Portfolio app (Ennadhir Benarous).

Covers:
- GET /api/ root greeting
- POST /api/contact (valid + invalid payloads)
- GET /api/contact (list + persistence verification)
"""
import os
import uuid
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL")
if not BASE_URL:
    # Fallback: read from frontend/.env
    try:
        with open("/app/frontend/.env") as f:
            for line in f:
                if line.startswith("REACT_APP_BACKEND_URL="):
                    BASE_URL = line.strip().split("=", 1)[1]
                    break
    except Exception:
        pass

assert BASE_URL, "REACT_APP_BACKEND_URL must be set"
BASE_URL = BASE_URL.rstrip("/")
API = f"{BASE_URL}/api"


@pytest.fixture(scope="module")
def session():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ---------- Root ----------
class TestRoot:
    def test_root_greeting(self, session):
        r = session.get(f"{API}/", timeout=15)
        assert r.status_code == 200, r.text
        data = r.json()
        assert "message" in data
        assert "Portfolio" in data["message"]
        assert "Ennadhir" in data["message"] or "Benarous" in data["message"]


# ---------- POST /api/contact ----------
class TestContactCreate:
    def test_create_contact_valid(self, session):
        unique = uuid.uuid4().hex[:8]
        payload = {
            "name": f"TEST_User_{unique}",
            "email": f"test_{unique}@example.com",
            "subject": "TEST_subject",
            "message": "Bonjour, ceci est un message de test automatisé.",
        }
        r = session.post(f"{API}/contact", json=payload, timeout=15)
        assert r.status_code == 200, r.text
        data = r.json()
        assert data["name"] == payload["name"]
        assert data["email"] == payload["email"]
        assert data["subject"] == payload["subject"]
        assert data["message"] == payload["message"]
        assert "id" in data and isinstance(data["id"], str) and len(data["id"]) > 0
        assert "created_at" in data
        # Stash id for persistence test
        pytest.created_contact_id = data["id"]
        pytest.created_contact_email = data["email"]

    def test_create_contact_without_subject(self, session):
        """subject is Optional"""
        unique = uuid.uuid4().hex[:8]
        payload = {
            "name": f"TEST_NoSubj_{unique}",
            "email": f"test_nosubj_{unique}@example.com",
            "message": "Message sans sujet.",
        }
        r = session.post(f"{API}/contact", json=payload, timeout=15)
        assert r.status_code == 200, r.text
        body = r.json()
        assert body["subject"] is None
        assert body["name"] == payload["name"]

    def test_create_contact_invalid_email(self, session):
        payload = {
            "name": "TEST_BadEmail",
            "email": "not-an-email",
            "subject": "x",
            "message": "msg",
        }
        r = session.post(f"{API}/contact", json=payload, timeout=15)
        assert r.status_code == 422, r.text

    def test_create_contact_missing_name(self, session):
        payload = {
            "email": "ok@example.com",
            "message": "msg",
        }
        r = session.post(f"{API}/contact", json=payload, timeout=15)
        assert r.status_code == 422, r.text

    def test_create_contact_missing_message(self, session):
        payload = {
            "name": "X",
            "email": "ok@example.com",
        }
        r = session.post(f"{API}/contact", json=payload, timeout=15)
        assert r.status_code == 422, r.text

    def test_create_contact_empty_name(self, session):
        payload = {
            "name": "",
            "email": "ok@example.com",
            "message": "msg",
        }
        r = session.post(f"{API}/contact", json=payload, timeout=15)
        assert r.status_code == 422, r.text

    def test_create_contact_empty_message(self, session):
        payload = {
            "name": "X",
            "email": "ok@example.com",
            "message": "",
        }
        r = session.post(f"{API}/contact", json=payload, timeout=15)
        assert r.status_code == 422, r.text


# ---------- GET /api/contact ----------
class TestContactList:
    def test_list_contacts_returns_array(self, session):
        r = session.get(f"{API}/contact", timeout=15)
        assert r.status_code == 200, r.text
        data = r.json()
        assert isinstance(data, list)

    def test_created_message_is_persisted(self, session):
        """Verify message created in TestContactCreate is retrievable"""
        created_id = getattr(pytest, "created_contact_id", None)
        if not created_id:
            pytest.skip("No created contact id available")
        r = session.get(f"{API}/contact", timeout=15)
        assert r.status_code == 200
        items = r.json()
        ids = [it.get("id") for it in items]
        assert created_id in ids, f"Created id {created_id} not found in list"
        match = next(it for it in items if it["id"] == created_id)
        assert match["email"] == pytest.created_contact_email
        # _id (Mongo) must NOT leak
        assert "_id" not in match
