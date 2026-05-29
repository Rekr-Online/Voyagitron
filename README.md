# 🌍 Voyagitron

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?logo=supabase&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-Deployed-000?logo=vercel)
![PWA](https://img.shields.io/badge/PWA-Ready-5A0FC8)

> **Le compagnon de voyage qui organise tout, du circuit au quiz culturel.**

Un SaaS de voyage en bêta publique, conçu et déployé en autonomie complète — du prototype à la production.

🔗 **[Tester l'application en ligne →](https://voyagitron-eznk.vercel.app)**

---

## ✨ Pourquoi Voyagitron

Voyager, c'est jongler entre dix outils : une carte par-ci, un guide par-là, un quiz culturel sur un autre site. Voyagitron rassemble ces usages dans une seule application installable, qui fonctionne aussi hors ligne quand le réseau lâche.

**Ce que ça résout concrètement :**
- 📍 Organiser ses circuits sur une carte interactive, par dossiers
- 🧠 Tester ses connaissances culturelles avant le départ
- 📱 Installer l'app sur mobile comme une app native (PWA)
- 🔌 Continuer d'utiliser l'app sans connexion

---

## 🛠️ Stack technique

**Front-end**
- ⚛️ React 18 + Vite
- 🎨 CSS moderne (Flexbox, Grid, Media Queries)
- 🧩 Lucide React (icônes)

**Back-end & données**
- 🗄️ Supabase (PostgreSQL + Authentification)
- 🗺️ Google Maps API
- 🎲 Open Trivia DB

**Infrastructure**
- 📦 Workbox (Service Worker / PWA)
- ☁️ Déployé sur Vercel
- 🔄 Workflow Git/GitHub

---

## 🎯 Fonctionnalités principales

- ✅ Authentification complète (inscription, connexion, déconnexion)
- ✅ Gestionnaire de circuits interactif sur Google Maps
- ✅ Organisation des circuits par dossiers
- ✅ Quiz culturel avec barre de progression
- ✅ Installation sur mobile (PWA)
- ✅ Fonctionnement hors ligne (Service Worker)
- ✅ Sécurisation des clés API via variables d'environnement
- ✅ Interface responsive (mobile, tablette, desktop)

---

## 🚀 Lancer le projet en local

### Prérequis
- Node.js 18+
- npm ou pnpm
- Un compte Supabase et une clé Google Maps API

### Installation

```bash
# Cloner le repo
git clone https://github.com/Rekr-Online/Voyagitron.git
cd Voyagitron

# Installer les dépendances
npm install

# Créer le fichier d'environnement
cp .env.example .env
# Puis renseigner tes propres clés API dans le .env

# Lancer en mode développement
npm run dev
```

L'app sera disponible sur `http://localhost:5173`.

### Variables d'environnement requises

```env
VITE_SUPABASE_URL=ton_url_supabase
VITE_SUPABASE_ANON_KEY=ta_cle_supabase
VITE_GOOGLE_MAPS_API_KEY=ta_cle_google_maps
```

---

## 📈 Statut du projet

🟢 **Bêta publique** — l'application est en ligne et testée par un réseau restreint de voyageurs fréquents avant un lancement plus large.

**Roadmap V2 :**
- Intégration des API Skyscanner et Booking.com pour les réservations
- Modèle économique par commissions partenaires
- Améliorations UX basées sur les retours utilisateurs

---

## 📓 Journal de développement

Le projet a été documenté publiquement, du premier prototype à la mise en production. **12 posts détaillent la progression**, les choix techniques et les obstacles rencontrés (notamment l'épisode mémorable de la sensibilité à la casse sous Linux qui m'a fait perdre la tête sur Vercel).

[Voir le journal sur LinkedIn →](https://www.linkedin.com/in/leonardo-raimundo-dev/)

---

## 👤 À propos

Projet conçu et développé par **Leonardo Raimundo** — développeur web full-stack autodidacte, basé à Dax (France).

Je conçois et déploie de vrais produits en autonomie, en partant du besoin réel avant la technologie.

🌐 [Profil LinkedIn](https://www.linkedin.com/in/leonardo-raimundo-dev/)
💻 [Autres projets sur GitHub](https://github.com/Rekr-Online)

---

## 📄 Licence

Ce projet est en développement actif. Le code est public à des fins de démonstration et de portfolio. Pour toute utilisation commerciale ou réutilisation, merci de me contacter.
