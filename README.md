# Portfolio technique — démonstrations interactives

Site vitrine d'ingénieur logiciel full-stack, construit avec **Next.js (App Router)**, **TypeScript** et **Tailwind CSS v4**, déployé sur **Vercel**.

## Démarrage

Prérequis : Node.js 20.9+ (LTS recommandée).

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # build de production
npm run lint       # ESLint
npm run typecheck  # vérification TypeScript
```

## Structure

```
src/
├── app/
│   ├── layout.tsx               # Layout racine (Navbar, Footer, polices, métadonnées)
│   ├── page.tsx                 # Accueil : Hero, Démos, Compétences
│   ├── not-found.tsx
│   └── demos/
│       ├── cartographie/page.tsx  # Mini-app 1 — React-Leaflet + API publique
│       ├── kanban/page.tsx        # Mini-app 2 — dnd-kit + Zustand persisté
│       └── dashboard/page.tsx     # Mini-app 3 — Recharts + export PDF (jsPDF)
├── components/
│   ├── layout/   # Navbar, Footer
│   ├── home/     # Sections de l'accueil
│   ├── demos/    # Gabarit commun des pages de démo
│   └── ui/       # Composants génériques (Container, Badge, ButtonLink…)
├── config/site.ts  # Profil, navigation, compétences, catalogue des démos
└── lib/utils.ts
```

Le contenu (nom, liens, compétences, descriptions des démos) est centralisé dans `src/config/site.ts`.

## Déploiement

Importer le dépôt dans Vercel : le framework Next.js est détecté automatiquement, aucune configuration supplémentaire n'est nécessaire.
