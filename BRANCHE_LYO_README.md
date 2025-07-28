# Branche LYO - Documentation de Synchronisation

## Description
Cette branche LYO a été créée pour synchroniser l'application lovable.dev avec une nouvelle branche de développement dédiée.

## Configuration
- **Repository GitHub**: Meli658/DZ
- **Branche source**: main
- **Branche de travail**: LYO
- **Port d'application**: 8080
- **Framework**: React + Vite + TypeScript

## Structure des Dossiers Synchronisés

### Dossiers principaux
- `src/` - Code source de l'application
  - `components/` - Composants React
  - `pages/` - Pages de l'application
  - `services/` - Services et utilitaires
  - `stores/` - Gestion d'état (Zustand)
  - `hooks/` - Hooks React personnalisés
  - `types/` - Définitions TypeScript
  - `utils/` - Fonctions utilitaires
  - `styles/` - Styles CSS
  - `lib/` - Bibliothèques
  - `data/` - Données statiques
  - `i18n/` - Internationalisation
  - `integrations/` - Intégrations externes

- `public/` - Assets statiques
  - `api/` - API endpoints
  - `forms/` - Formulaires
  - `guides/` - Guides utilisateur
  - `lovable-uploads/` - Uploads

- `supabase/` - Configuration base de données
  - `migrations/` - Migrations de schéma

### Fichiers de configuration
- `package.json` - Dépendances et scripts
- `vite.config.ts` - Configuration Vite (port 8080)
- `tsconfig.json` - Configuration TypeScript
- `tailwind.config.ts` - Configuration Tailwind CSS
- `components.json` - Configuration des composants

## Commandes Principales

### Développement
```bash
npm install          # Installation des dépendances
npm run dev         # Démarrage en mode développement (port 8080)
npm run build       # Construction pour production
npm run preview     # Prévisualisation de la build
npm run lint        # Vérification du code
```

### Git
```bash
git checkout LYO           # Basculer vers la branche LYO
git pull origin LYO        # Mettre à jour depuis GitHub
git push origin LYO        # Pousser vers GitHub
```

## État de la Synchronisation
- ✅ Branche LYO créée avec succès
- ✅ Tous les dossiers synchronisés depuis main
- ✅ Configuration port 8080 maintenue
- ✅ Build de production fonctionnelle
- ✅ Dépendances installées
- ✅ Branche poussée vers GitHub

## Application
L'application Dalil.dz est une plateforme algérienne de veille juridique et réglementaire, 100% locale et indépendante.

**URL locale**: http://localhost:8080

## Contact
Pour toute question concernant cette branche, référez-vous aux rapports LYO existants dans le repository.