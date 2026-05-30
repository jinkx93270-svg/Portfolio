// Données du portfolio — modifiables ici
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
    phone: "07 49 43 07 36",
    location: "Sevran, Île-de-France",
    tagline: "BTS SIO · option SISR — CNED",
  },

  about: {
    intro:
      "Après un Baccalauréat général à dominante scientifique, j'ai exploré plusieurs filières de l'enseignement supérieur en informatique afin de trouver la voie qui me correspondait réellement : classes préparatoires, licence Mathématiques-Informatique, puis BUT Informatique. Ce parcours m'a permis de toucher au développement, à l'algorithmique, à l'administration système et au matériel — et de confirmer mon attrait pour les infrastructures et les réseaux.",
    motivation:
      "Le BTS SIO option SISR via le CNED est pour moi la formation qui allie le mieux pratique professionnelle et compétences techniques solides. C'est dans l'administration système, le réseau et le support utilisateur que je me projette le plus naturellement : comprendre une infrastructure de bout en bout, sécuriser un service, dépanner un poste, automatiser une tâche.",
    objectifs:
      "Mon objectif prioritaire est d'obtenir mon BTS SIO SISR. À l'issue de la formation, je souhaite soit poursuivre par des projets personnels d'infrastructure et de cybersécurité (lab, certifications type Cisco / LPIC), soit intégrer directement le monde professionnel comme technicien systèmes et réseaux ou administrateur d'infrastructure junior.",
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
      year: "2023 — S1",
      title: "CPGE — Prépa PCSI",
      subtitle: "Classe préparatoire scientifique (1er semestre)",
      place: "Lycée Albert Schweitzer",
      type: "etudes",
    },
    {
      year: "2023 – 2024",
      title: "Licence Mathématiques-Informatique",
      subtitle: "Réorientation universitaire — bases en algorithmique et programmation",
      place: "Université Gustave Eiffel",
      type: "etudes",
    },
    {
      year: "2024 – 2025",
      title: "BUT Informatique — 2e année",
      subtitle: "Développement, bases de données, systèmes",
      place: "IUT de Montreuil",
      type: "etudes",
    },
    {
      year: "2025 – 2026",
      title: "BTS SIO — option SISR",
      subtitle: "Solutions d'Infrastructure, Systèmes et Réseaux",
      place: "CNED — formation en cours",
      type: "current",
    },
  ],

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

  metiers: [
    {
      slug: "admin-sys-reseau",
      name: "Administrateur Systèmes & Réseaux",
      summary:
        "Concevoir, déployer et maintenir l'infrastructure réseau et système d'une organisation : serveurs, switches, routeurs, services d'annuaire, sauvegardes, supervision et sécurité.",
      hasMindmap: true,
      mindmapUrl: "#mindmap-admin-sys-reseau",
      mindmapNote:
        "Carte heuristique réalisée dans le cadre de la séance B1.6-SQ1-S2 — en cours de finalisation, lien à mettre à jour.",
      icon: "Network",
      featured: true,
    },
    {
      slug: "technicien-support",
      name: "Technicien Support / Helpdesk",
      summary:
        "Premier interlocuteur des utilisateurs : diagnostic, prise en main à distance, gestion des tickets (GLPI), rédaction de procédures et résolution des incidents matériels et logiciels.",
      icon: "Headphones",
    },
    {
      slug: "technicien-infra",
      name: "Technicien d'Infrastructure",
      summary:
        "Mise en place et maintenance des équipements actifs (serveurs, baies, équipements réseau), exécution des opérations courantes d'exploitation et de supervision.",
      icon: "Server",
    },
    {
      slug: "admin-cyber",
      name: "Administrateur Sécurité (orientation cyber)",
      summary:
        "Durcissement des systèmes, gestion des accès, supervision des journaux et incidents de sécurité, mise en œuvre de politiques de sauvegarde et de PRA.",
      icon: "ShieldCheck",
    },
  ],

  competences: [
    {
      category: "Gestion de parc",
      icon: "Database",
      items: ["OCS Inventory", "GLPI"],
    },
    {
      category: "Support utilisateurs & ITSM",
      icon: "Headphones",
      items: ["GLPI — tickets d'incident", "Procédures de résolution", "Communication utilisateur"],
    },
    {
      category: "Réseau",
      icon: "Network",
      items: [
        "Switch Cisco — configuration CLI",
        "Routeur Cisco — configuration CLI",
        "VLAN · routage statique",
      ],
    },
    {
      category: "Systèmes d'exploitation",
      icon: "MonitorCog",
      items: [
        "Windows · Debian · Ubuntu — installation & configuration",
        "Comptes & groupes locaux (Windows 11, Debian, Ubuntu Desktop)",
      ],
    },
    {
      category: "Active Directory",
      icon: "Building2",
      items: ["Comptes & groupes de domaine", "Stratégies de groupe (GPO)", "Services AD DS"],
    },
    {
      category: "Services serveur",
      icon: "Server",
      items: [
        "Impression & sauvegarde — Windows Server",
        "Serveur Web Apache 2 (Debian)",
        "Base de données MariaDB (Debian)",
      ],
    },
  ],

  realisations: [
    {
      slug: "stage-1a",
      title: "Stage de 1ère année",
      subtitle: "Stage d'immersion en entreprise",
      status: "À venir",
      tag: "Stage",
      description:
        "Stage prévu dans le cadre de la 1ère année de BTS SIO SISR. Détails (entreprise, missions, période) à compléter prochainement.",
    },
    {
      slug: "atelier-2",
      title: "Atelier 2",
      subtitle: "Travaux pratiques — atelier de professionnalisation",
      status: "À venir",
      tag: "Atelier",
      description:
        "Réalisation prévue dans le cadre de l'atelier 2 du BTS SIO SISR. Le contenu et les livrables seront détaillés une fois la production en cours.",
    },
  ],

  veille: {
    presentation:
      "Pour rester à jour sur les évolutions techniques et la sécurité, j'ai mis en place une veille informationnelle structurée autour d'un agrégateur de flux RSS (Feedly), de quelques newsletters spécialisées et d'un suivi ciblé sur les réseaux sociaux professionnels. Chaque source est rangée par thème pour pouvoir consulter rapidement l'actualité d'un sujet précis.",
    dispositifs: [
      {
        nom: "Feedly — agrégateur de flux RSS",
        description:
          "Regroupe les flux RSS des sites de référence par catégorie (cybersécurité, réseau, virtualisation). Lecture quotidienne pour un balayage rapide.",
        icon: "Rss",
      },
      {
        nom: "Newsletters spécialisées",
        description:
          "Abonnement à des lettres d'information (Korben, ZDNet, IT-Connect) pour recevoir une sélection hebdomadaire d'articles techniques.",
        icon: "Mail",
      },
      {
        nom: "Alertes Google",
        description:
          "Alertes par mots-clés (« ransomware », « vulnérabilité critique », « Active Directory ») pour ne pas manquer une actualité forte.",
        icon: "Bell",
      },
      {
        nom: "Twitter/X & LinkedIn — listes thématiques",
        description:
          "Suivi de comptes d'experts et de CERT pour les annonces en temps réel et les retours d'expérience.",
        icon: "MessageSquare",
      },
    ],
    themes: [
      {
        nom: "Cybersécurité — vulnérabilités & ransomwares",
        description:
          "Surveillance des vulnérabilités majeures (CVE), des campagnes de ransomwares actives et des bonnes pratiques de durcissement (Windows, Linux, Active Directory).",
        choix:
          "C'est un sujet central de la spécialité SISR : sécuriser un service, c'est d'abord en connaître les menaces. Comprendre les attaques récentes m'aide à anticiper les mesures à mettre en place sur les infrastructures que j'administrerai.",
        icon: "ShieldAlert",
      },
      {
        nom: "Virtualisation & solutions d'infrastructure",
        description:
          "Évolutions de Proxmox, VMware, des hyperviseurs et des conteneurs (Docker, Podman). Outils de supervision (Zabbix, Centreon) et de sauvegarde.",
        choix:
          "La virtualisation est partout dans les infrastructures modernes. Suivre ce thème me permet de comprendre les choix technologiques actuels et de préparer un lab personnel pertinent pour expérimenter ce que je vois en cours.",
        icon: "Layers",
      },
    ],
  },

  contact: {
    email: "benarous.ennadhir@gmail.com",
    phone: "07 49 43 07 36",
    location: "Sevran (93)",
  },
};
