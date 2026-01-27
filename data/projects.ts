export const projects = [
    {
      slug: "michi-app",
      title: "Michi 🥈",
      category: {
        fr: "PRODUCT DESIGN & HACKATHON",
        en: "PRODUCT DESIGN & HACKATHON"
      },
      shortDescription: {
        fr: "Startup créée en 5 jours lors d'un Hackathon (2ème place). Une app de matching intelligent pour trouver le bon psychologue.",
        en: "Startup created in 5 days during a Hackathon (2nd place). An intelligent matching app to find the right therapist."
      },
      fullDescription: {
        fr: `Projet récompensé (2ème place) lors d'un Hackathon de création de startup en 5 jours.
        "Michi" (Le Chemin) réinvente l'accès à la santé mentale. Contrairement aux annuaires classiques (Doctolib), nous avons créé un "Tinder du soin" basé sur le feeling et la personnalité.
        
        J'ai piloté la conception du produit (Product Design), de l'identité de marque "Michi" jusqu'au développement des 3 plateformes : le site vitrine (Framer), l'app client (Lovable) et l'espace pro. L'objectif : réduire l'errance thérapeutique grâce à un algorithme de matching qualitatif.`,
        en: `Award-winning project (2nd place) during a 5-day Startup Hackathon. "Michi" (The Way) reinvents access to mental health. Unlike classic directories, we created a "Tinder for care" based on feeling and personality.
        
        I led the product design, from the "Michi" brand identity to the development of 3 platforms: the showcase site (Framer), the client app (Lovable), and the pro space. The goal: reduce therapeutic wandering through a qualitative matching algorithm.`
      },
      challenges: {
        fr: "Concevoir et déployer 3 interfaces fonctionnelles en moins de 100 heures, en assurant une cohérence visuelle parfaite et un parcours utilisateur (UX) rassurant pour un sujet sensible.",
        en: "Designing and deploying 3 functional interfaces in less than 100 hours, ensuring perfect visual consistency and a reassuring UX for a sensitive topic."
      },
      stack: ["Framer", "Lovable", "UX/UI Design", "Product Management"],
      year: "2025",
      color: "#F4EBD0",
      image: "/project-michi.jpg",
      links: {
        demo: "https://michimichi.framer.website",
        github: "https://michimichi.lovable.app"
      }
    },
    {
      slug: "aura-agency",
      title: "AURA Agency",
      category: {
        fr: "IA & MUSIC BUSINESS 🎧",
        en: "AI & MUSIC BUSINESS 🎧"
      },
      shortDescription: {
        fr: "Création d'un label de musique nouvelle génération géré par une équipe d'agents IA autonomes via la plateforme Dust.",
        en: "Creation of a next-gen music label managed by a team of autonomous AI agents via the Dust platform."
      },
      fullDescription: {
        fr: `AURA est une startup fictive de label musical où chaque rôle clé (Directeur Artistique, Data Analyst, Community Manager) est tenu par un agent IA spécialisé.
        
        J'ai architecturé tout le système sur la plateforme Dust, en créant des assistants interconnectés capables de collaborer. Par exemple, l'agent "DA" analyse les tendances et briefe l'agent "Data" qui vérifie la viabilité marché. L'objectif : automatiser la gestion administrative et stratégique pour laisser aux artistes 100% de temps créatif.`,
        en: `AURA is a fictional music label startup where every key role (Artistic Director, Data Analyst, Community Manager) is held by a specialized AI agent.
        
        I architected the entire system on the Dust platform, creating interconnected assistants capable of collaborating. For example, the "AD" agent analyzes trends and briefs the "Data" agent who checks market viability. The goal: automate administrative and strategic management to leave artists 100% creative time.`
      },
      challenges: {
        fr: "Orchestrer la communication entre plusieurs agents IA (Multi-Agent System) et définir des prompts systèmes robustes pour que chaque 'employé virtuel' garde sa personnalité et son expertise spécifique.",
        en: "Orchestrating communication between multiple AI agents (Multi-Agent System) and defining robust system prompts so that each 'virtual employee' maintains their personality and specific expertise."
      },
      stack: ["Dust.tt", "LLM Engineering", "Automation", "Music Business"],
      year: "2025",
      color: "#7000FF",
      image: "/project-aura.jpg",
      links: {
        demo: "https://www.loom.com/share/6ddc6ae5dc204aa585975148c1657361",
        github: "#"
      }
    },
    {
      slug: "lol-prediction",
      title: "LoL Win Prediction",
      category: {
        fr: "MACHINE LEARNING & GAMING 🎮",
        en: "MACHINE LEARNING & GAMING 🎮"
      },
      shortDescription: {
        fr: "Modèle prédictif de victoire sur League of Legends basé sur les données d'Early Game, couplé à une analyse de sentiment Twitter.",
        en: "Win prediction model for League of Legends based on Early Game data, coupled with Twitter sentiment analysis."
      },
      fullDescription: {
        fr: `Peut-on prédire l'issue d'une partie de League of Legends dès les 10 premières minutes ? C'était notre défi.
        
        Nous avons entraîné plusieurs modèles de Machine Learning (Random Forest, XGBoost) sur un dataset de milliers de matchs classés diamant/master. L'objectif : identifier les facteurs clés de l'Early Game (Gold, Dragons, Kills) qui mènent au "Snowball".
        En parallèle, nous avons mené une analyse de sentiment sur Twitter pour corréler la toxicité de la communauté avec les performances en jeu.`,
        en: `Can we predict the outcome of a League of Legends game within the first 10 minutes? That was our challenge.
        
        We trained several Machine Learning models (Random Forest, XGBoost) on a dataset of thousands of ranked diamond/master matches. The goal: identify key Early Game factors (Gold, Dragons, Kills) leading to "Snowball".
        In parallel, we conducted sentiment analysis on Twitter to correlate community toxicity with in-game performance.`
      },
      challenges: {
        fr: "Gérer un dataset déséquilibré et sélectionner les features les plus pertinentes (Feature Engineering) pour éviter l'overfitting, tout en traitant des données textuelles non structurées (Twitter API).",
        en: "Handling an imbalanced dataset and selecting the most relevant features (Feature Engineering) to avoid overfitting, while processing unstructured text data (Twitter API)."
      },
      stack: ["Python", "Scikit-Learn", "Pandas", "NLP"],
      year: "2024",
      color: "#0AC8B9",
      image: "/project-lol.jpg",
      links: {
        demo: "#",
        github: "https://github.com/ninalemoine"
      }
    },
    {
      slug: "spotify-dashboard",
      title: "Spotify & Gemini AI",
      category: {
        fr: "DATA ENGINEERING & IA 🎵",
        en: "DATA ENGINEERING & AI 🎵"
      },
      shortDescription: {
        fr: "Pipeline de données automatisé connectant l'API Spotify à Google Sheets, enrichi par l'IA Gemini pour des recommandations musicales.",
        en: "Automated data pipeline connecting Spotify API to Google Sheets, enriched by Gemini AI for music recommendations."
      },
      fullDescription: {
        fr: `Un écosystème complet pour redécouvrir sa musique. J'ai construit un pipeline ETL (Extract, Transform, Load) automatisé avec Google Apps Script.
        
        Le système récupère mes données d'écoute via l'API Spotify, les stocke et les nettoie dans Google Sheets. Ensuite, l'IA Gemini analyse ces patterns pour générer des recommandations ultra-personnalisées et des "Vibe Checks" (analyse d'humeur) directement dans le dashboard.`,
        en: `A complete ecosystem to rediscover music. I built an automated ETL (Extract, Transform, Load) pipeline with Google Apps Script.
        
        The system retrieves my listening data via the Spotify API, stores and cleans it in Google Sheets. Then, Gemini AI analyzes these patterns to generate ultra-personalized recommendations and "Vibe Checks" (mood analysis) directly in the dashboard.`
      },
      challenges: {
        fr: "Gérer l'authentification OAuth 2.0 de Spotify dans un environnement serverless (Apps Script) et orchestrer les appels API pour éviter les quotas, tout en intégrant les réponses de l'IA en temps réel.",
        en: "Managing Spotify's OAuth 2.0 authentication in a serverless environment (Apps Script) and orchestrating API calls to avoid quotas, while integrating real-time AI responses."
      },
      stack: ["Apps Script", "API Spotify", "Gemini AI", "Google Sheets"],
      year: "2025",
      color: "#1DB954",
      image: "/project-spotify.jpg",
      links: {
        demo: "#",
        github: "https://github.com/ninalemoine"
      }
    },
    {
      slug: "go-fusion",
      title: "BDD Go Fusion",
      category: {
        fr: "GAGNANTE HACKATHON 🏆",
        en: "HACKATHON WINNER 🏆"
      },
      shortDescription: {
        fr: "La transparence au service de l'engagement environnemental. Simulateur CO2 temps réel.",
        en: "Transparency for environmental engagement. Real-time CO2 simulator."
      },
      fullDescription: {
        fr: `Projet lauréat du Hackathon. L'objectif était de créer une solution pour encourager la transition écologique des entreprises via la donnée.
        
        J'ai conçu une architecture de base de données permettant de centraliser les indicateurs RSE (Responsabilité Sociétale des Entreprises) et développé un simulateur interactif. Ce dernier permet aux utilisateurs de visualiser l'impact carbone d'une entreprise en temps réel sur la landing page.`,
        en: `Hackathon winning project. The goal was to create a solution to encourage ecological transition in companies via data.
        
        I designed a database architecture to centralize CSR (Corporate Social Responsibility) indicators and developed an interactive simulator. This allows users to visualize a company's carbon impact in real-time on the landing page.`
      },
      challenges: {
        fr: "Rendre des données RSE complexes (tonnes de CO2, équivalents énergétiques) compréhensibles pour le grand public en un coup d'œil, tout en assurant une performance optimale du simulateur.",
        en: "Making complex CSR data (tons of CO2, energy equivalents) understandable for the general public at a glance, while ensuring optimal simulator performance."
      },
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
      category: {
        fr: "MAKE X MISTRAL FINALIST 🥈",
        en: "MAKE X MISTRAL FINALIST 🥈"
      },
      shortDescription: {
        fr: "Campagnes marketing hyper-personnalisées générées par IA en 48h.",
        en: "Hyper-personalized AI-generated marketing campaigns in 48h."
      },
      fullDescription: {
        fr: `Développé lors du challenge Make x Mistral AI. Nous avons créé un système capable d'automatiser entièrement la création de campagnes marketing.
        
        En connectant l'API de Mistral (IA générative française) à des scénarios Make, l'outil analyse le profil d'une cible et génère un email, une image et une tagline uniques. C'est la puissance du No-Code alliée à l'IA.`,
        en: `Developed during the Make x Mistral AI challenge. We created a system capable of fully automating marketing campaign creation.
        
        By connecting the Mistral API (French Generative AI) to Make scenarios, the tool analyzes a target profile and generates a unique email, image, and tagline. It's the power of No-Code combined with AI.`
      },
      challenges: {
        fr: "Gérer la latence de l'API IA et assurer la cohérence du ton de marque (Tone of Voice) dans les textes générés automatiquement.",
        en: "Managing AI API latency and ensuring brand tone consistency (Tone of Voice) in automatically generated texts."
      },
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
      category: {
        fr: "SECURITY ANALYTICS 🤖",
        en: "SECURITY ANALYTICS 🤖"
      },
      shortDescription: {
        fr: "Algorithme de détection d'anomalies d'accès par badges.",
        en: "Badge access anomaly detection algorithm."
      },
      fullDescription: {
        fr: `Conception d'un algorithme de sécurité pour identifier les comportements suspects dans un système de contrôle d'accès.
        
        Le script analyse les logs d'entrées/sorties et repère les séquences illogiques (ex: deux entrées consécutives sans sortie, signe potentiel d'un badge passé à une autre personne). Le tout est automatisé via Google Apps Script pour alerter les responsables sécurité en temps réel.`,
        en: `Design of a security algorithm to identify suspicious behaviors in an access control system.
        
        The script analyzes entry/exit logs and spots illogical sequences (e.g., two consecutive entries without exit, potential sign of a badge pass-back). Everything is automated via Google Apps Script to alert security managers in real-time.`
      },
      challenges: {
        fr: "Traiter un grand volume de logs quotidiens sans faux positifs, en distinguant les oublis de badge des véritables tentatives de fraude.",
        en: "Processing a large volume of daily logs without false positives, distinguishing badge oversights from genuine fraud attempts."
      },
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
      category: {
        fr: "COMMUNAUTÉ & IMPACT 🌈",
        en: "COMMUNITY & IMPACT 🌈"
      },
      shortDescription: {
        fr: "Espace bienveillant pour les profils HPI et hypersensibles.",
        en: "Safe space for HPI and hypersensitive profiles."
      },
      fullDescription: {
        fr: `Une plateforme dédiée aux profils neuroatypiques. L'objectif est de faciliter l'identification (via un test interactif) et l'entraide.
        
        Ce projet personnel me tient à cœur car il allie tech (développement web) et humain (psychologie cognitive). J'ai travaillé sur l'UX pour garantir un environnement apaisant et inclusif.`,
        en: `A platform dedicated to neuroatypical profiles. The goal is to facilitate identification (via an interactive test) and mutual aid.
        
        This personal project is close to my heart as it combines tech (web development) and human aspects (cognitive psychology). I worked on UX to ensure a soothing and inclusive environment.`
      },
      challenges: {
        fr: "Créer une expérience utilisateur (UX) qui ne soit pas anxiogène pour des personnes hypersensibles.",
        en: "Creating a user experience (UX) that is not anxiety-inducing for hypersensitive people."
      },
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