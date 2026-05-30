// Données du portfolio
// IMPORTANT : seules les valeurs explicitement fournies par Ennadhir sont remplies.
// Les sections marquées { needsContent: true } affichent un placeholder neutre tant que les données ne sont pas fournies.

export const portfolioData = {
  identity: {
    firstName: "Ennadhir",
    lastName: "Benarous",
    title: "Étudiant en informatique",
    subtitle: "systèmes et réseaux",
    photo:
      "https://customer-assets.emergentagent.com/job_network-admin-pro-1/artifacts/t5q1lzje_1740313736492.jpg",
    cv: "https://customer-assets.emergentagent.com/job_network-admin-pro-1/artifacts/x17cpvol_CV.pdf",
    email: "benarous.ennadhir@gmail.com",
    // Phone & adresse : extraits du CV envoyé par Ennadhir
    phone: "07 49 43 07 36",
    location: "Sevran",
    tagline: "BTS SIO · option SISR — CNED",
  },

  // Présentation : basée sur les mots exacts d'Ennadhir
  about: {
    intro:
      "Après un Baccalauréat général (spécialités Mathématiques, Physique-Chimie) obtenu en 2023, j'ai testé plusieurs filières informatiques dans l'enseignement supérieur : un premier semestre en classe préparatoire PCSI, une licence Mathématiques-Informatique, puis une deuxième année de BUT Informatique. Cette exploration m'a permis de mieux cerner ce qui m'intéresse réellement et m'a conduit à intégrer le BTS SIO option SISR via le CNED.",
    motivation:
      "Je veux réussir à obtenir un diplôme dans le domaine de l'informatique.",
    objectifs:
      "Une fois mon BTS obtenu, je continuerai certainement sur des projets personnels ou je chercherai un emploi directement.",
  },

  timeline: [
    {
      year: "2023",
      title: "Baccalauréat Général",
      subtitle: "Spécialités Mathématiques · Physique-Chimie",
      place: "Lycée Blaise Cendrars",
      type: "diplome",
    },
    {
      year: "2023 – 2024 (S1)",
      title: "CPGE — Prépa PCSI",
      subtitle: "Classe préparatoire scientifique — 1er semestre",
      place: "Lycée Albert Schweitzer",
      type: "etudes",
    },
    {
      year: "2023 – 2024",
      title: "Licence Mathématiques-Informatique",
      subtitle: "",
      place: "Université Gustave Eiffel",
      type: "etudes",
    },
    {
      year: "2024 – 2025",
      title: "BUT Informatique — 2e année",
      subtitle: "",
      place: "IUT de Montreuil",
      type: "etudes",
    },
    {
      year: "2025 – 2026",
      title: "BTS SIO — option SISR",
      subtitle: "Formation en cours",
      place: "CNED",
      type: "current",
    },
  ],

  // Formation : référentiel officiel public du BTS SIO SISR (information non personnelle)
  formation: {
    nom: "BTS SIO — option SISR",
    long: "Brevet de Technicien Supérieur · Services Informatiques aux Organisations",
    description:
      "Le BTS SIO forme à la conception, à la mise en service et à la maintenance des solutions informatiques au service des organisations. L'option SISR (Solutions d'Infrastructure, Systèmes et Réseaux) est centrée sur l'administration des infrastructures : installation et configuration de serveurs et d'équipements réseau, supervision, sécurité, support aux utilisateurs et gestion d'un parc informatique.",
    blocs: [
      {
        code: "Bloc 1",
        nom: "Support et mise à disposition de services informatiques",
        items: [
          "Gestion du patrimoine informatique",
          "Réponse aux incidents et aux demandes d'assistance",
          "Développement de la présence en ligne de l'organisation",
          "Travail en mode projet",
          "Mise à disposition d'un service régulier et continu",
        ],
      },
      {
        code: "Bloc 2 (SISR)",
        nom: "Administration des systèmes et des réseaux",
        items: [
          "Conception d'une solution d'infrastructure",
          "Installation, configuration et déploiement",
          "Administration et supervision",
          "Sécurisation des infrastructures",
        ],
      },
      {
        code: "Bloc 3",
        nom: "Cybersécurité des services informatiques",
        items: [
          "Protection des données à caractère personnel",
          "Préservation de l'identité numérique",
          "Sécurisation des équipements et des usages",
          "Garantie de la disponibilité, de l'intégrité et de la confidentialité",
        ],
      },
    ],
  },

  // Métiers visés : non communiqués par Ennadhir — à compléter
  metiers: {
    needsContent: true,
    items: [],
  },

  // Compétences SISR : LISTE OFFICIELLE fournie par Ennadhir (intitulés conservés tels quels)
  competences: [
    {
      category: "Gestion de parc",
      icon: "Database",
      items: ["OCS Inventory", "GLPI"],
    },
    {
      category: "Support aux utilisateurs et gestion des tickets d'incident",
      icon: "Headphones",
      items: ["GLPI"],
    },
    {
      category: "Réseau",
      icon: "Network",
      items: [
        "Configuration de switch/commutateur Cisco en CLI",
        "Configuration de routeur Cisco en CLI",
      ],
    },
    {
      category: "Système et réseau — OS",
      icon: "MonitorCog",
      items: [
        "Installation et configuration de base d'OS : Windows, Debian, Ubuntu",
        "Comptes & groupes utilisateurs locaux : Windows 11, Debian, Ubuntu Desktop",
      ],
    },
    {
      category: "Active Directory",
      icon: "Building2",
      items: [
        "Gestion des comptes, des groupes et des GPO dans un domaine Active Directory",
      ],
    },
    {
      category: "Services serveur",
      icon: "Server",
      items: [
        "Services d'impression et de sauvegarde — Microsoft Windows Server",
        "Service Web — Apache 2 (Debian)",
        "Base de données — MariaDB (Debian)",
      ],
    },
  ],

  // Réalisations : titres uniquement, comme demandé par le cahier des charges
  realisations: [
    {
      slug: "stage-1a",
      title: "Stage de 1ère année",
      tag: "Stage",
      status: "À venir",
    },
    {
      slug: "atelier-2",
      title: "Atelier 2",
      tag: "Atelier",
      status: "À venir",
    },
  ],

  // Veille : non encore réalisée par Ennadhir — à compléter
  veille: {
    needsContent: true,
    presentation: "",
    dispositifs: [],
    themes: [],
  },

  contact: {
    email: "benarous.ennadhir@gmail.com",
    phone: "07 49 43 07 36",
    location: "Sevran",
  },
};
