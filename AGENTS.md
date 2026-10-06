# 🤖 Agent AI Guide — ecolecouture.ch

Ce document contient toutes les directives, conventions et règles d'architecture nécessaires pour tout agent IA (Antigravity, Gemini, Copilot, Claude) travaillant sur la codebase `ecolecouture.ch`.

---

## 🎯 Vue d'ensemble du Projet & Roles des dossiers

- Dépôt : **Monorepo**
- **`frontend/`** : Application Client Nuxt 3 (Mode SPA `ssr: false`), consommant l'API GraphQL de WordPress.
- **`wordpress/`** : Headless CMS WordPress basé sur Roots Bedrock. Fournit l'API GraphQL via `WP GraphQL` et `ACF Pro`.
- **`.github/workflows/`** : Pipelines de build et déploiement rsync automatisés.

---

## ⚠️ Règles Critiques & Anti-Patterns à Éviter

1. **Dossier d'exécution des commandes** :
   - ❌ Ne jamais lancer `yarn dev` ou `yarn build` à la racine du monorepo sans spécifier le dossier target.
   - ✅ Exécuter les commandes frontend depuis `/Users/jminguely/Sites/ecolecouture.ch/frontend` (ou `cd frontend && ...`).
   - ✅ Exécuter les commandes composer backend depuis `/Users/jminguely/Sites/ecolecouture.ch/wordpress`.

2. **Modifications du Cœur WordPress** :
   - ❌ Ne jamais modifier les fichiers situés dans `wordpress/web/wp/`. Ce dossier est géré dynamiquement par Composer (`roots/wordpress`).
   - ✅ Placer la logique personnalisée dans le thème sur mesure : `wordpress/web/app/themes/blank/functions.php`.

3. **Gestion des Secrets et Fichiers `.env`** :
   - ❌ Ne jamais commiter de fichier `.env`, `.env.local` ou `auth.json` contenant des jetons ACF/Composer.
   - ✅ S'assurer que tout nouveau fichier sensible est ignoré dans le `.gitignore` racine et les sub-gitignores.

---

## 🏗️ Conventions Frontend (Nuxt 3)

### Structure des dossiers

- **`components/`** : Composants Vue 3 (Options API / Composition API). Les sous-dossiers comme `FlexibleContent/` groupent les blocs dynamiques ACF.
- **`pages/`** : Routhier automatique Nuxt. Utilise `[uri].vue` et `galerie/[slug].vue` pour la gestion dynamique des pages WordPress.
- **`graphql/`** : Fichiers `.gql` pour les requêtes Apollo GraphQL (`fetchHomepage.gql`, `fetchPage.gql`, etc.).
- **`server/api/graphql.post.js`** : Route Handler Nitro servant de proxy pour relayer les requêtes GraphQL vers WordPress et éviter les problèmes CORS/expositions d'endpoint direct.
- **`i18n.config.js`** : Configuration Vue I18n. Doit être référencé avec `vueI18n: './i18n.config.js'` dans `nuxt.config.js`.

### Composables Utiles

- `useTimedAsyncQuery(query, variables, options)` : Wrap d'Apollo GraphQL incluant un mécanisme d'AbortController (timeout par défaut 8s).

---

## 🐘 Conventions Backend (Roots Bedrock WordPress)

### Dépendances PHP / Composer

- Les extensions (plugins) sont gérées via Packagist et WPackagist (`composer.json`).
- **ACF Pro** est installé via le repository privé Composer avec authentification HTTP basique (`auth.json`).

### Custom Post Types & GraphQL

- Le Custom Post Type `gallery` (`galerie`) est enregistré programmatiquement dans `functions.php` avec la propriété `"show_in_graphql" => true`.
- Un filtre personnalisé `wpgraphql_acf_register_graphql_field` dans `functions.php` formate les champs `oembed` ACF pour les transformer directement en code HTML embarqué dans le schéma GraphQL.

---

## 🛠️ Verification & Test Workflow

Avant de finaliser une tâche ou de valider des modifications :

1. Pour le **Frontend** :
   ```bash
   cd frontend
   yarn lint
   yarn build
   ```
2. Vérifier qu'aucun warning bloquant ou erreur de build n'apparaît dans la console.
3. Toujours s'assurer que les liens relatifs et imports de composants Vue existent et sont valides.
