# Portfolio BTS SIO SISR — Ennadhir Benarous

Portfolio web pour le BTS SIO option SISR (CNED 2025-2026).
Stack : React 19 (frontend) + FastAPI + MongoDB (backend).

## Structure

```
/
├── frontend/       → application React (CRA)
├── backend/        → API FastAPI + MongoDB
├── package.json    → proxy racine vers ./frontend (pour les hébergeurs)
├── render.yaml     → blueprint Render (frontend + backend)
├── vercel.json     → config Vercel
└── netlify.toml    → config Netlify
```

## Développement local

### Frontend
```bash
cd frontend
yarn install
yarn start          # http://localhost:3000
```

### Backend
```bash
cd backend
pip install -r requirements.txt
# Fichier .env requis : MONGO_URL, DB_NAME, CORS_ORIGINS
uvicorn server:app --host 0.0.0.0 --port 8001 --reload
```

## Déploiement

### Option 1 — Render (recommandé)
1. Pousser le repo sur GitHub.
2. Sur [render.com](https://render.com) → New → Blueprint → sélectionner le repo.
3. Render détecte `render.yaml` et crée 2 services (frontend statique + backend).
4. Renseigner les variables d'env marquées `sync: false` :
   - `portfolio-backend` : `MONGO_URL` (ex. MongoDB Atlas), `CORS_ORIGINS` (URL du frontend Render)
   - `portfolio-frontend` : `REACT_APP_BACKEND_URL` (URL du backend Render)
5. Redéployer si besoin après avoir saisi les variables.

> **Sans `render.yaml`** : dans Render → New → Static Site → repo → **Root Directory = `frontend`**, build = `yarn install && yarn build`, publish = `build`.

### Option 2 — Vercel (frontend uniquement)
Importer le repo → Vercel lit `vercel.json` automatiquement. Renseigner `REACT_APP_BACKEND_URL` dans Environment Variables.

### Option 3 — Netlify (frontend uniquement)
Importer le repo → Netlify lit `netlify.toml` automatiquement. Renseigner `REACT_APP_BACKEND_URL` dans Environment Variables.

> Le backend nécessite un hébergement Python (Render, Railway, Fly.io…) + une base MongoDB (MongoDB Atlas gratuit).

## Édition du contenu

Toutes les données du portfolio (identité, parcours, compétences, etc.) sont centralisées dans :

```
frontend/src/data/portfolioData.js
```
