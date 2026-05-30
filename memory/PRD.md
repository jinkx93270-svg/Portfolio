# PRD — Portfolio BTS SIO SISR (Ennadhir Benarous)

## Problème
Construire un portfolio web pour un étudiant en BTS SIO option SISR (CNED, 2025-2026), respectant le référentiel pédagogique : en-tête identité, présentation, parcours en timeline, formation actuelle, métiers visés (+ carte heuristique), compétences SISR, vignettes de réalisations (stage + atelier 2), CV téléchargeable PDF, page de veille (dispositifs + 2 thèmes), formulaire de contact.

## Persona
- **Évaluateur BTS SIO** : vérifie que tous les critères du référentiel B1.6-SQ1/SQ2/SQ3 sont présents.
- **Recruteur / Tuteur de stage** : doit pouvoir contacter rapidement, télécharger le CV, comprendre le profil.

## Stack
- Frontend : React 19, Tailwind, shadcn/ui, lucide-react, sonner (Manrope + Inter + JetBrains Mono)
- Backend : FastAPI + MongoDB (motor)
- Hébergement : Emergent (REACT_APP_BACKEND_URL / MONGO_URL)

## Architecture
- `/` : single-page portfolio
- Backend : `GET /api/`, `POST /api/contact`, `GET /api/contact`
- Données statiques centralisées dans `/app/frontend/src/data/portfolioData.js`

## Implémenté — 2025-12 (v1)
- ✅ Hero (titre, sous-titre SISR, photo, identité)
- ✅ Présentation (parcours / motivation / objectifs en 3 cartes)
- ✅ Timeline parcours (BAC → Prépa PCSI → Licence → BUT → BTS SIO)
- ✅ Formation actuelle (référentiel BTS SIO + 3 blocs avec accent SISR)
- ✅ Métiers visés × 4 + carte heuristique (Dialog) sur Admin Sys & Réseaux
- ✅ Compétences SISR (6 catégories conformes au cahier des charges)
- ✅ Vignettes Réalisations (Stage 1A + Atelier 2) cliquables → Dialog
- ✅ CV téléchargeable PDF (lien direct utilisateur)
- ✅ Veille (4 dispositifs + 2 thèmes : Cybersécurité, Virtualisation)
- ✅ Formulaire de contact → POST /api/contact (persistant MongoDB)
- ✅ Thème moderne cyber, dégradé violet, fonts Manrope/Inter/JetBrains Mono
- ✅ Tests : 10/10 backend, 23/23 frontend (iteration_1)

## Backlog / Next
- **P1** : Remplacer le lien placeholder de la carte heuristique (`#mindmap-admin-sys-reseau`) par l'URL réelle (MindMeister/Coggle/XMind) quand elle sera finalisée
- **P1** : Compléter les détails du Stage de 1ère année (entreprise, période, missions) une fois le stage trouvé
- **P1** : Compléter le contenu de l'Atelier 2 quand le sujet sera communiqué
- **P2** : Page admin protégée pour consulter les messages reçus (actuellement GET /api/contact est public)
- **P2** : Bloc "Réseaux pro" (LinkedIn / GitHub) si l'utilisateur en crée
- **P2** : Notification email lors de la réception d'un message (intégration Resend ou SMTP)
- **P3** : Articles de veille datés (lien direct vers les sources et résumé personnel)
