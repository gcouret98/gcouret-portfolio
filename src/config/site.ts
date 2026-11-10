import {
  KanbanSquare,
  LayoutDashboard,
  Map as MapIcon,
  type LucideIcon,
} from "lucide-react";

/**
 * Configuration centrale du portfolio (contenu issu du CV).
 * Les liens laissés vides ("") ne sont pas affichés.
 */
export const siteConfig = {
  name: "Guillaume Couret",
  role: "Développeur web full-stack",
  certification: "Titre RNCP 7 — Expert en ingénierie des systèmes (Bac +5)",
  location: "Landes (40), Nouvelle-Aquitaine",
  tagline:
    "Je transforme des besoins métiers en applications web concrètes, fiables et élégantes, de la base de données jusqu'à l'interface.",
  about: [
    "Développeur web et mobile, j'ai conçu des applications pour les services publics et des outils métiers, principalement avec PHP (Symfony, Laravel), Vue.js et PostgreSQL.",
    "Ce portfolio est aussi un terrain de remise à niveau : chaque démonstration met en pratique l'écosystème front-end moderne (TypeScript, React, Next.js) sur des problématiques réelles.",
  ],
  description:
    "Portfolio de Guillaume Couret, développeur web full-stack : démonstrations interactives en Next.js, TypeScript et Tailwind CSS.",
  url: "https://gcouret.vercel.app",
  links: {
    email: "mailto:gcouretpro@gmail.com",
    github: "",
    linkedin: "",
    /** Fichier à déposer dans /public. Le bouton est masqué tant qu'il est absent. */
    cv: "/Guillaume-Couret-CV.pdf",
  },
} as const;

export type NavItem = { href: string; label: string };

export const mainNav: NavItem[] = [
  { href: "/", label: "Accueil" },
  { href: "/demos/cartographie", label: "Cartographie" },
  { href: "/demos/kanban", label: "Kanban" },
  { href: "/demos/dashboard", label: "Dashboard" },
];

export type SkillGroup = { title: string; skills: string[] };

export const skillGroups: SkillGroup[] = [
  {
    title: "Back-end",
    skills: ["PHP", "Symfony", "Laravel", "Java (junior)"],
  },
  {
    title: "Front-end & mobile",
    skills: ["JavaScript", "Vue.js", "HTML / CSS", "Cordova"],
  },
  {
    title: "Données & outils",
    skills: ["SQL", "PostgreSQL", "PgAdmin", "DBeaver", "Git"],
  },
  {
    title: "En pratique dans ce portfolio",
    skills: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Vercel"],
  },
];

export type TimelineItem = {
  period: string;
  title: string;
  organization: string;
  description?: string;
  highlights: string[];
};

export const experiences: TimelineItem[] = [
  {
    period: "2021 — mars 2023",
    title: "Développeur web et mobile full-stack",
    organization: "Clicmap",
    highlights: [
      "Développement d'applications pour les services publics",
      "Participation aux projets Clicmap et MACS GDPR",
      "Optimisation des performances et amélioration continue",
      "Stack : PHP (Symfony, Laravel), Vue.js, PostgreSQL, Cordova",
    ],
  },
  {
    period: "2020 — 2021 · 6 mois",
    title: "Développeur analyste (stage)",
    organization: "Groupe coopératif Maïsadour",
    description: "Développement d'un logiciel métier destiné aux adhérents du groupe.",
    highlights: [
      "Conception d'outils métiers pour les adhérents",
      "Interfaces web en JavaScript, CSS et SQL",
    ],
  },
];

export const education: TimelineItem[] = [
  {
    period: "2018 — 2023",
    title: "Titre RNCP 7 (n° 35275) — Expert en ingénierie des systèmes, Bac +5",
    organization: "Groupe AEN — Intech",
    highlights: [],
  },
];

export const softSkills = ["Autonomie", "Travail en équipe", "Gestion de projet", "Veille technologique"];

export const languages = ["Français (langue maternelle)", "Anglais B2 — TOEIC 800"];

export type Demo = {
  slug: string;
  href: string;
  title: string;
  category: string;
  summary: string;
  features: string[];
  stack: string[];
  icon: LucideIcon;
};

export const demos: Demo[] = [
  {
    slug: "cartographie",
    href: "/demos/cartographie",
    title: "Cartographie & Data",
    category: "Données spatiales",
    summary:
      "Carte interactive alimentée par une API publique, avec filtres dynamiques et fiches détaillées.",
    features: [
      "Récupération et normalisation de données depuis une API publique",
      "Filtres combinés (catégorie, recherche texte, zone)",
      "Marqueurs regroupés et fiche détaillée au clic",
      "Synchronisation des filtres avec l'URL",
    ],
    stack: ["React-Leaflet", "Leaflet", "TypeScript", "Fetch API"],
    icon: MapIcon,
  },
  {
    slug: "kanban",
    href: "/demos/kanban",
    title: "UI & State Management",
    category: "Gestion de tâches",
    summary:
      "Tableau Kanban avec glisser-déposer, tags, filtres et persistance locale des données.",
    features: [
      "Glisser-déposer accessible (souris, tactile, clavier)",
      "Création, édition et suppression de tâches",
      "Gestion de tags et filtres croisés",
      "Persistance des données dans le navigateur",
    ],
    stack: ["dnd-kit", "Zustand", "TypeScript", "localStorage"],
    icon: KanbanSquare,
  },
  {
    slug: "dashboard",
    href: "/demos/dashboard",
    title: "Dashboard & Export PDF",
    category: "Logique métier",
    summary:
      "Panneau de métriques avec graphiques dynamiques et génération de rapports PDF.",
    features: [
      "Indicateurs clés calculés à partir d'un jeu de données métier",
      "Graphiques dynamiques filtrables par période",
      "Tableaux de synthèse triables",
      "Export d'un rapport PDF mis en page",
    ],
    stack: ["Recharts", "jsPDF", "jsPDF-AutoTable", "TypeScript"],
    icon: LayoutDashboard,
  },
];

export function getDemo(slug: string): Demo {
  const demo = demos.find((d) => d.slug === slug);
  if (!demo) throw new Error(`Démo inconnue : ${slug}`);
  return demo;
}
