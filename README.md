# 🧵 Ecole de Couture de Fribourg — Monorepo

Bienvenue dans le dépôt du site web de l'**École de Couture de Fribourg** ([ecolecouture.ch](https://ecolecouture.ch)).

Ce projet est structuré sous forme de monorepo séparant le **Backend (Headless WordPress)** et le **Frontend (Nuxt 3)**.

---

## 📐 Architecture & Stack Technique

```
ecolecouture.ch/
├── frontend/       # Nuxt 3 (Vue 3, Apollo GraphQL, TailwindCSS, Pinia, i18n)
├── wordpress/      # Backend WordPress Headless (Bedrock, WP GraphQL, ACF Pro, Polylang)
└── .github/        # Workflows CI/CD GitHub Actions (Déploiements automatisés)
```

| Composant | Technologie | Hébergement / Environnement |
| :--- | :--- | :--- |
| **Frontend** | Nuxt 3 (SSR: False / SPA + Nitro Proxy), Vue 3, TailwindCSS | [Alwaysdata](https://www.alwaysdata.com/) (Node.js runtime v22 + PM2) |
| **Backend** | Roots Bedrock, WordPress 6.3+, WP GraphQL, ACF Pro, PHP 8.2 | [Infomaniak](https://www.infomaniak.com/) (Serveur PHP 8.2) |
| **CI/CD** | GitHub Actions | Déploiement automatique sur `push` branche `main` |

---

## 🚀 Développement Local

### Prérequis
- **Node.js** v22+
- **Yarn** v1.22+
- **PHP** v8.2+
- **Composer** v2+
- Serveur MySQL local (ou accès à la BDD de dev)

---

### 1. Frontend (`/frontend`)

```bash
# Accéder au dossier frontend
cd frontend

# Copier le fichier d'environnement
cp .env.example .env

# Installer les dépendances
yarn install

# Lancer le serveur de développement (http://localhost:3000)
yarn dev
```

#### Scripts utiles
- `yarn dev` : Démarre Nuxt en mode développement.
- `yarn build` : Compile le projet pour la production dans `.output/`.
- `yarn lint` : Exécute ESLint et Prettier pour vérifier la qualité du code.
- `yarn lintfix` : Corrige automatiquement les erreurs de formatage Prettier et ESLint.

---

### 2. Backend WordPress (`/wordpress`)

Le backend utilise [Roots Bedrock](https://roots.io/bedrock/) pour une gestion moderne de WordPress via Composer.

```bash
# Accéder au dossier wordpress
cd wordpress

# Copier le fichier d'environnement
cp .env.example .env

# Configurer les accès BDD et clés dans .env
# (Créer les clés de sel via https://roots.io/salts.html)

# Installer les dépendances PHP & Plugins WP
composer install
```

#### Structure du thème et configurations
- **Thème sur mesure** : [`wordpress/web/app/themes/blank`](file:///Users/jminguely/Sites/ecolecouture.ch/wordpress/web/app/themes/blank)
- **Functions & CPT** : Déclaration des Custom Post Types (ex: `gallery`) et filtres GraphQL dans `functions.php`.
- **Fichiers médias** : Stockés dans `web/app/uploads`.

---

## 🔑 Fichiers d'environnement (`.env`)

### Frontend (`frontend/.env`)
```env
API_URL=https://api.ecolecouture.ch/wp/graphql
WP_URL=https://api.ecolecouture.ch/
```

### Backend (`wordpress/.env`)
```env
DB_NAME=database_name
DB_USER=database_user
DB_PASSWORD=database_password
DB_HOST=localhost

WP_ENV=development
WP_HOME=https://api.ecolecouture.ch
WP_SITEURL=${WP_HOME}/wp

AUTH_KEY='votre_cle_securisee'
SECURE_AUTH_KEY='votre_cle_securisee'
LOGGED_IN_KEY='votre_cle_securisee'
NONCE_KEY='votre_cle_securisee'
AUTH_SALT='votre_cle_securisee'
SECURE_AUTH_SALT='votre_cle_securisee'
LOGGED_IN_SALT='votre_cle_securisee'
NONCE_SALT='votre_cle_securisee'
```

---

## 📦 Déploiement & CI/CD

Le déploiement est entièrement automatisé via **GitHub Actions** lors d'un push sur la branche `main` :

1. **Backend (`.github/workflows/deploy-backend.yml`)** :
   - Déclenché lors de modifications dans `wordpress/**`.
   - Installe les dépendances PHP via Composer (avec authentification ACF Pro).
   - Simule les liens symboliques requis (`uploads`, `.htaccess`, `.env`).
   - Synchronise le code vers le serveur Infomaniak via `rsync`.

2. **Frontend (`.github/workflows/deploy-frontend.yml`)** :
   - Déclenché lors de modifications dans `frontend/**`.
   - Compile Nuxt 3 avec Node 22 (`yarn build`).
   - Synchronise `.output/*` vers le serveur Alwaysdata via `rsync`.
   - Redémarre l'application via l'API Alwaysdata.

---

## 🛠️ Normes & Conventions

- **Composants Vue** : Nommage PascalCase (ex: `AppImg.vue`, `ClipPathTemplates.vue`). Attention : le préfixe `Lazy` est réservé par Nuxt 3 pour le chargement différé dynamique.
- **Multilingue (i18n)** : Support des langues Français (FR) et Allemand (DE). Les clés de traduction sont gérées dans `frontend/i18n/fr.json` et `frontend/i18n/de.json`.
- **GraphQL** : Les requêtes GraphQL sont centralisées dans `frontend/graphql/`.
