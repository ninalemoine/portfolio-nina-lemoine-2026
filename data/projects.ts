export const projects = [
    {
      slug: "michi-app",
      title: "Michi",
      category: "PRODUCT DESIGN & HACKATHON",
      shortDescription: "Startup créée en 5 jours lors d'un Hackathon (2ème place). Une app de matching intelligent pour trouver le bon psychologue.",
      fullDescription: `
        Projet récompensé (2ème place) lors d'un Hackathon de création de startup en 5 jours.
        "Michi" (Le Chemin) réinvente l'accès à la santé mentale. Contrairement aux annuaires classiques (Doctolib), nous avons créé un "Tinder du soin" basé sur le feeling et la personnalité.
        
        J'ai piloté la conception du produit (Product Design), de l'identité de marque "Michi" jusqu'au développement des 3 plateformes : le site vitrine (Framer), l'app client (Lovable) et l'espace pro. L'objectif : réduire l'errance thérapeutique grâce à un algorithme de matching qualitatif.
      `,
      challenges: "Concevoir et déployer 3 interfaces fonctionnelles en moins de 100 heures, en assurant une cohérence visuelle parfaite et un parcours utilisateur (UX) rassurant pour un sujet sensible.",
      stack: ["Framer", "Lovable", "UX/UI Design", "Product Management"],
      year: "2025",
      color: "#F4EBD0", // Beige Michi (selon le site)
      image: "/project-michi.jpg",
      links: {
        demo: "https://michimichi.framer.website",
        github: "https://michimichi.lovable.app" // J'utilise ce champ pour le lien App
      }
    },
    {
      slug: "aura-agency",
      title: "AURA Agency",
      category: "IA & MUSIC BUSINESS 🎧",
      shortDescription: "Création d'un label de musique nouvelle génération géré par une équipe d'agents IA autonomes via la plateforme Dust.",
      fullDescription: `
        AURA est une startup fictive de label musical où chaque rôle clé (Directeur Artistique, Data Analyst, Community Manager) est tenu par un agent IA spécialisé.
        
        J'ai architecturé tout le système sur la plateforme Dust, en créant des assistants interconnectés capables de collaborer. Par exemple, l'agent "DA" analyse les tendances et briefe l'agent "Data" qui vérifie la viabilité marché. L'objectif : automatiser la gestion administrative et stratégique pour laisser aux artistes 100% de temps créatif.
      `,
      challenges: "Orchestrer la communication entre plusieurs agents IA (Multi-Agent System) et définir des prompts systèmes robustes pour que chaque 'employé virtuel' garde sa personnalité et son expertise spécifique.",
      stack: ["Dust.tt", "LLM Engineering", "Automation", "Music Business"],
      year: "2025",
      color: "#7000FF", // Violet AURA
      image: "/project-aura.jpg", // Image à créer
      links: {
        demo: "https://www.loom.com/share/6ddc6ae5dc204aa585975148c1657361", // Lien vers ta vidéo Loom de présentation
        github: "#" // Pas de code, c'est du No-Code/IA
      }
    },
    {
      slug: "lol-prediction",
      title: "LoL Win Prediction",
      category: "MACHINE LEARNING & GAMING 🎮",
      shortDescription: "Modèle prédictif de victoire sur League of Legends basé sur les données d'Early Game, couplé à une analyse de sentiment Twitter.",
      fullDescription: `
        Peut-on prédire l'issue d'une partie de League of Legends dès les 10 premières minutes ? C'était notre défi.
        
        Nous avons entraîné plusieurs modèles de Machine Learning (Random Forest, XGBoost) sur un dataset de milliers de matchs classés diamant/master. L'objectif : identifier les facteurs clés de l'Early Game (Gold, Dragons, Kills) qui mènent au "Snowball".
        En parallèle, nous avons mené une analyse de sentiment sur Twitter pour corréler la toxicité de la communauté avec les performances en jeu.
      `,
      challenges: "Gérer un dataset déséquilibré et sélectionner les features les plus pertinentes (Feature Engineering) pour éviter l'overfitting, tout en traitant des données textuelles non structurées (Twitter API).",
      stack: ["Python", "Scikit-Learn", "Pandas", "NLP"],
      year: "2024",
      color: "#0AC8B9", // Cyan Hextech (LoL)
      image: "/project-lol.jpg", // Image à créer
      links: {
        demo: "#", // Si tu as le notebook en ligne, mets le lien, sinon #
        github: "https://github.com/ninalemoine" 
      }
    },
    {
      slug: "spotify-dashboard",
      title: "Spotify & Gemini AI",
      category: "DATA ENGINEERING & IA 🎵",
      shortDescription: "Pipeline de données automatisé connectant l'API Spotify à Google Sheets, enrichi par l'IA Gemini pour des recommandations musicales.",
      fullDescription: `
        Un écosystème complet pour redécouvrir sa musique. J'ai construit un pipeline ETL (Extract, Transform, Load) automatisé avec Google Apps Script.
        
        Le système récupère mes données d'écoute via l'API Spotify, les stocke et les nettoie dans Google Sheets. Ensuite, l'IA Gemini analyse ces patterns pour générer des recommandations ultra-personnalisées et des "Vibe Checks" (analyse d'humeur) directement dans le dashboard.
      `,
      challenges: "Gérer l'authentification OAuth 2.0 de Spotify dans un environnement serverless (Apps Script) et orchestrer les appels API pour éviter les quotas, tout en intégrant les réponses de l'IA en temps réel.",
      stack: ["Apps Script", "API Spotify", "Gemini AI", "Google Sheets"],
      year: "2025",
      color: "#1DB954", // Vert Spotify
      image: "/project-spotify.jpg", // Image à créer
      links: {
        // Si tu as un lien vers le Sheet public ou un GitHub, mets-le ici, sinon laisse vide ou mets #
        demo: "#", 
        github: "https://github.com/ninalemoine" 
      }
    },
    {
      slug: "go-fusion",
      title: "BDD Go Fusion",
      category: "GAGNANTE HACKATHON 🏆",
      shortDescription: "La transparence au service de l'engagement environnemental. Simulateur CO2 temps réel.",
      fullDescription: `
        Projet lauréat du Hackathon. L'objectif était de créer une solution pour encourager la transition écologique des entreprises via la donnée.
        
        J'ai conçu une architecture de base de données permettant de centraliser les indicateurs RSE (Responsabilité Sociétale des Entreprises) et développé un simulateur interactif. Ce dernier permet aux utilisateurs de visualiser l'impact carbone d'une entreprise en temps réel sur la landing page.
      `,
      challenges: "Rendre des données RSE complexes (tonnes de CO2, équivalents énergétiques) compréhensibles pour le grand public en un coup d'œil, tout en assurant une performance optimale du simulateur.",
      stack: ["Data Viz", "SQL", "Green IT", "Simulateur"],
      year: "2024",
      color: "#059669",
      image: "/project-go-fusion.jpg",
      links: {
        demo: "https://ninalemoine.github.io/go-fusion-v2.html",
        github: "https://github.com/ninalemoine"
      }
    },
    {
      slug: "mistral-make",
      title: "Campagnes IA & Make",
      category: "MAKE X MISTRAL FINALIST 🥈",
      shortDescription: "Campagnes marketing hyper-personnalisées générées par IA en 48h.",
      fullDescription: `
        Développé lors du challenge Make x Mistral AI. Nous avons créé un système capable d'automatiser entièrement la création de campagnes marketing.
        
        En connectant l'API de Mistral (IA générative française) à des scénarios Make, l'outil analyse le profil d'une cible et génère un email, une image et une tagline uniques. C'est la puissance du No-Code alliée à l'IA.
      `,
      challenges: "Gérer la latence de l'API IA et assurer la cohérence du ton de marque (Tone of Voice) dans les textes générés automatiquement.",
      stack: ["Mistral AI", "Make", "Prompt Engineering", "API REST"],
      year: "2024",
      color: "#7c3aed",
      image: "/project-mistral.jpg",
      links: {
        demo: "https://ninalemoine.github.io/malt-mistral-make-v2.html",
        github: "https://github.com/ninalemoine"
      }
    },
    {
      slug: "detection-fraude",
      title: "Détection de Fraude",
      category: "SECURITY ANALYTICS 🤖",
      shortDescription: "Algorithme de détection d'anomalies d'accès par badges.",
      fullDescription: `
        Conception d'un algorithme de sécurité pour identifier les comportements suspects dans un système de contrôle d'accès.
        
        Le script analyse les logs d'entrées/sorties et repère les séquences illogiques (ex: deux entrées consécutives sans sortie, signe potentiel d'un badge passé à une autre personne). Le tout est automatisé via Google Apps Script pour alerter les responsables sécurité en temps réel.
      `,
      challenges: "Traiter un grand volume de logs quotidiens sans faux positifs, en distinguant les oublis de badge des véritables tentatives de fraude.",
      stack: ["Google Apps Script", "JavaScript", "Algorithmique", "Security"],
      year: "2023",
      color: "#e11d48",
      image: "/project-fraude.jpg",
      links: {
        demo: "https://ninalemoine.github.io/analyse-fraude-v2.html",
        github: "https://github.com/ninalemoine"
      }
    },
    {
      slug: "etre-soi",
      title: "Projet Être Soi",
      category: "COMMUNAUTÉ & IMPACT 🌈",
      shortDescription: "Espace bienveillant pour les profils HPI et hypersensibles.",
      fullDescription: `
        Une plateforme dédiée aux profils neuroatypiques. L'objectif est de faciliter l'identification (via un test interactif) et l'entraide.
        
        Ce projet personnel me tient à cœur car il allie tech (développement web) et humain (psychologie cognitive). J'ai travaillé sur l'UX pour garantir un environnement apaisant et inclusif.
      `,
      challenges: "Créer une expérience utilisateur (UX) qui ne soit pas anxiogène pour des personnes hypersensibles.",
      stack: ["Web Design", "Community Building", "UX/UI"],
      year: "2023",
      color: "#f59e0b",
      image: "/project-etre-soi.jpg",
      links: {
        demo: "https://ninalemoine.github.io/etre-soi-v2.html",
        github: "https://github.com/ninalemoine"
      }
    }
  ];