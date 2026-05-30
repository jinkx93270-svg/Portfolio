# Portfolio BTS SIO SISR — Ennadhir Benarous

Portfolio web pour le BTS SIO option SISR (CNED 2025-2026).
Stack : React 19 (frontend) + FastAPI + MongoDB (backend optionnel pour le formulaire).

## Structure

```
/
├── frontend/                  → application React (CRA)
├── backend/                   → API FastAPI (optionnel)
├── .github/workflows/         → CI/CD GitHub Pages
├── package.json               → proxy racine
├── render.yaml                → blueprint Render
├── vercel.json                → config Vercel
├── netlify.toml               → config Netlify
└── README.md
```

## 🚀 Publication sur GitHub Pages (recommandé, le plus simple)

Le repo contient déjà un workflow `.github/workflows/deploy.yml` qui build et publie automatiquement.

**Étapes :**

1. Pousser le repo sur GitHub.
2. Sur GitHub : **Settings → Pages → Source : `GitHub Actions`**.
3. Pousser un commit (ou cliquer **Run workflow** dans l'onglet Actions).
4. Le site sera dispo à `https://<votre-username>.github.io/<nom-du-repo>/`.

> ℹ️ Sans backend, le formulaire de contact **ouvre votre client mail (mailto:)** au lieu d'envoyer une requête HTTP. Il reste donc fonctionnel pour le visiteur.

## 🎯 Autres options de déploiement

### Vercel / Netlify
Importer le repo sur la plateforme — la config (`vercel.json` / `netlify.toml`) est détectée automatiquement.

### Render (fullstack avec formulaire + base de données)
1. Pousser le repo sur GitHub.
2. Sur [render.com](https://render.com) → **New → Blueprint** → sélectionner le repo.
3. Render détecte `render.yaml` et crée 2 services (frontend + backend).
4. Renseigner les variables d'env marquées `sync: false` (MongoDB Atlas, CORS, etc.).

## 🛠️ Développement local

### Frontend
```bash
cd frontend
yarn install
yarn start          # http://localhost:3000
```

### Backend (optionnel)
```bash
cd backend
pip install -r requirements.txt
# .env requis : MONGO_URL, DB_NAME, CORS_ORIGINS
uvicorn server:app --host 0.0.0.0 --port 8001 --reload
```

## ✏️ Édition du contenu

Toutes les données du portfolio sont centralisées dans :

```
frontend/src/data/portfolioData.js
```
