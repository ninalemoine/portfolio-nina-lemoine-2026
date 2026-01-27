'use client';
import Link from "next/link";
import { FaArrowLeft, FaDownload, FaGraduationCap } from "react-icons/fa";
import { useLanguage } from '@/context/LanguageContext';

export default function AboutPage() {
  const { language } = useLanguage();

  const content = {
    fr: {
      back: "Retour à l'accueil",
      title: "Mon Parcours.",
      subtitle: "De la compétition de ski Alpin à l'analyse de données Retail, mon chemin est guidé par la recherche de performance et l'optimisation.",
      download: "Télécharger mon CV",
      
      // SECTION EXPÉRIENCES
      exp_title: "Expériences Professionnelles",
      exp_1_date: "2025 - Aujourd'hui",
      exp_1_title: "Data Analyst @ Carrefour",
      exp_1_loc: "Alternance - Massy",
      exp_1_desc: [
        "Analyse de performance des gammes de produits.",
        "Optimisation des flux logistiques via SQL & Tableau.",
        "Collaboration avec les équipes métiers pour définir les KPIs."
      ],
      exp_2_date: "2025 - Aujourd'hui",
      exp_2_title: "Coach Run Club @ Oysho",
      exp_2_loc: "Paris",
      exp_2_desc: [
        "Encadrement et animation des sessions de running hebdomadaires.",
        "Gestion d'événements sportifs et création de communauté.",
        "Motivation et accompagnement des participants (tous niveaux)."
      ],
      exp_3_date: "Hiver 2022 - Aujourd'hui",
      exp_3_title: "Monitrice de Ski Alpin @ ESF",
      exp_3_loc: "Courchevel Village",
      exp_3_desc: [
        "Gestion de la clientèle : Encadrement de groupes (1 à 6 clients), avec un taux de fidélisation de 70%.",
        "Communication multilingue : Interaction avec une clientèle internationale en français et anglais.",
        "Gestion opérationnelle : Organisation logistique pour +15 cours hebdomadaires.",
        "Pédagogie personnalisée : 95% de satisfaction client."
      ],
      exp_4_date: "2024 - 2025",
      exp_4_title: "Chargée d'Opérations @ Zenpark",
      exp_4_loc: "Stage - Paris",
      exp_4_desc: [
        "Gestion de la base de données clients.",
        "Automatisation de processus via Make (No-code)."
      ],
      exp_5_date: "2022 - 2024",
      exp_5_title: "Conduite de Travaux @ SAS 2GM",
      exp_5_loc: "Alternance - Maîtrise d'oeuvre",
      exp_5_desc: "Gestion de chantier, suivi budgétaire et management d'équipes terrain.",

      // SECTION FORMATION
      edu_title: "Formation",
      edu_1_date: "2024 - 2026",
      edu_1_title: "Eugenia School",
      edu_1_sub: "MSc Business Analytics",
      edu_1_rank: "Top 2 Promo 🏆",
      edu_1_focus: "Focus : Récolte, visualisation et analyse de données, Code, Stratégie, Finance.",
      edu_1_awards: "Finaliste Hackathon 3M (Malt, Mistral, Make) • Vainqueur Hackathon GoFusion",
      edu_2_date: "2021 - 2024",
      edu_2_title: "Campus Bourget du Lac",
      edu_2_sub: "BUT GCCD (Génie Civil)",
      edu_2_rank: "Top 10 Promo 🏅",
      edu_2_focus: "Spécialité Bâtiment : Mathématiques, Dimensionnement, BIM, Analyse solution.",

      // SECTION SKILLS
      skills_title: "Compétences Techniques",
      skills_1: "Data & Code",
      skills_2: "Viz & Tools"
    },
    en: {
      back: "Back to home",
      title: "My Journey.",
      subtitle: "From Alpine Ski racing to Retail Data Analysis, my path is guided by the pursuit of performance and optimization.",
      download: "Download Resume",

      // EXPERIENCE SECTION
      exp_title: "Professional Experience",
      exp_1_date: "2025 - Present",
      exp_1_title: "Data Analyst @ Carrefour",
      exp_1_loc: "Apprenticeship - Massy",
      exp_1_desc: [
        "Product range performance analysis.",
        "Logistics flow optimization via SQL & Tableau.",
        "Collaboration with business teams to define KPIs."
      ],
      exp_2_date: "2025 - Present",
      exp_2_title: "Run Club Coach @ Oysho",
      exp_2_loc: "Paris",
      exp_2_desc: [
        "Leading and animating weekly running sessions.",
        "Sports event management and community building.",
        "Motivating and guiding participants (all levels)."
      ],
      exp_3_date: "Winter 2022 - Present",
      exp_3_title: "Alpine Ski Instructor @ ESF",
      exp_3_loc: "Courchevel Village",
      exp_3_desc: [
        "Client management: Supervising groups (1 to 6 clients), 70% retention rate.",
        "Multilingual communication: Interaction with international clients in French and English.",
        "Operational management: Logistics for 15+ weekly lessons.",
        "Personalized pedagogy: 95% client satisfaction."
      ],
      exp_4_date: "2024 - 2025",
      exp_4_title: "Operations Officer @ Zenpark",
      exp_4_loc: "Internship - Paris",
      exp_4_desc: [
        "Customer database management.",
        "Process automation via Make (No-code)."
      ],
      exp_5_date: "2022 - 2024",
      exp_5_title: "Construction Manager @ SAS 2GM",
      exp_5_loc: "Apprenticeship - Project Management",
      exp_5_desc: "Site management, budget monitoring, and field team management.",

      // EDUCATION SECTION
      edu_title: "Education",
      edu_1_date: "2024 - 2026",
      edu_1_title: "Eugenia School",
      edu_1_sub: "MSc Business Analytics",
      edu_1_rank: "Top 2 Promo 🏆",
      edu_1_focus: "Focus: Data collection, visualization & analysis, Code, Strategy, Finance.",
      edu_1_awards: "Finalist 3M Hackathon (Malt, Mistral, Make) • Winner GoFusion Hackathon",
      edu_2_date: "2021 - 2024",
      edu_2_title: "Campus Bourget du Lac",
      edu_2_sub: "BUT Civil Engineering",
      edu_2_rank: "Top 10 Promo 🏅",
      edu_2_focus: "Specialty: Mathematics, BIM, Solution Analysis.",

      // SKILLS SECTION
      skills_title: "Technical Skills",
      skills_1: "Data & Code",
      skills_2: "Viz & Tools"
    }
  };

  const t = content[language];

  return (
    <main className="bg-zinc-950 min-h-screen text-white p-8 md:p-20">
      
      {/* BOUTON RETOUR */}
      <Link href="/" replace className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors mb-12 cursor-pointer z-50 relative">
        <FaArrowLeft /> {t.back}
      </Link>

      <div className="max-w-4xl mx-auto space-y-20">
        
        {/* HEADER */}
        <section>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">{t.title}</h1>
            <p className="text-xl text-zinc-300 leading-relaxed">
                {t.subtitle}
            </p>
             <a href={language === 'fr' ? "/CV_Nina_LEMOINE_2025.pdf" : "/CV_Nina_LEMOINE_2025_EN.pdf"} download className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-zinc-200 transition-colors">
                <FaDownload /> {t.download}
            </a>
        </section>

        {/* SECTION EXPÉRIENCES */}
        <section className="space-y-8">
            <h2 className="text-3xl font-bold border-b border-zinc-800 pb-4">{t.exp_title}</h2>
            <div className="border-l border-zinc-800 pl-8 space-y-12">
                
                {/* Carrefour */}
                <div className="relative">
                    <span className="absolute -left-[37px] top-2 w-4 h-4 bg-blue-500 rounded-full border-4 border-zinc-950" />
                    <span className="text-sm text-blue-400 font-bold tracking-widest uppercase">{t.exp_1_date}</span>
                    <h3 className="text-2xl font-bold mt-2">{t.exp_1_title}</h3>
                    <p className="text-zinc-400">{t.exp_1_loc}</p>
                    <ul className="list-disc list-inside mt-4 text-zinc-300 space-y-1 text-sm">
                        {(t.exp_1_desc as string[]).map((point, i) => <li key={i}>{point}</li>)}
                    </ul>
                </div>

                {/* Oysho */}
                <div className="relative">
                    <span className="absolute -left-[37px] top-2 w-4 h-4 bg-pink-500 rounded-full border-4 border-zinc-950" />
                    <span className="text-sm text-pink-400 font-bold tracking-widest uppercase">{t.exp_2_date}</span>
                    <h3 className="text-2xl font-bold mt-2">{t.exp_2_title}</h3>
                    <p className="text-zinc-400">{t.exp_2_loc}</p>
                    <ul className="list-disc list-inside mt-4 text-zinc-300 space-y-1 text-sm">
                        {(t.exp_2_desc as string[]).map((point, i) => <li key={i}>{point}</li>)}
                    </ul>
                </div>

                {/* ESF */}
                <div className="relative">
                    <span className="absolute -left-[37px] top-2 w-4 h-4 bg-red-600 rounded-full border-4 border-zinc-950" />
                    <span className="text-sm text-red-500 font-bold tracking-widest uppercase">{t.exp_3_date}</span>
                    <h3 className="text-2xl font-bold mt-2">{t.exp_3_title}</h3>
                    <p className="text-zinc-400">{t.exp_3_loc}</p>
                    <ul className="list-disc list-inside mt-4 text-zinc-300 space-y-1 text-sm">
                        {(t.exp_3_desc as string[]).map((point, i) => <li key={i}>{point}</li>)}
                    </ul>
                </div>

                {/* Zenpark */}
                <div className="relative">
                    <span className="absolute -left-[37px] top-2 w-4 h-4 bg-zinc-700 rounded-full border-4 border-zinc-950" />
                    <span className="text-sm text-zinc-500 font-bold tracking-widest uppercase">{t.exp_4_date}</span>
                    <h3 className="text-2xl font-bold mt-2">{t.exp_4_title}</h3>
                    <p className="text-zinc-400">{t.exp_4_loc}</p>
                    <ul className="list-disc list-inside mt-4 text-zinc-300 space-y-1 text-sm">
                        {(t.exp_4_desc as string[]).map((point, i) => <li key={i}>{point}</li>)}
                    </ul>
                </div>

                {/* SAS 2GM */}
                <div className="relative">
                    <span className="absolute -left-[37px] top-2 w-4 h-4 bg-zinc-700 rounded-full border-4 border-zinc-950" />
                    <span className="text-sm text-zinc-500 font-bold tracking-widest uppercase">{t.exp_5_date}</span>
                    <h3 className="text-2xl font-bold mt-2">{t.exp_5_title}</h3>
                    <p className="text-zinc-400">{t.exp_5_loc}</p>
                    <p className="text-zinc-300 mt-2 text-sm">{t.exp_5_desc}</p>
                </div>

            </div>
        </section>

        {/* NOUVELLE SECTION : ÉDUCATION */}
        <section className="space-y-8">
            <h2 className="text-3xl font-bold border-b border-zinc-800 pb-4 flex items-center gap-3">
                <FaGraduationCap className="text-zinc-500" /> {t.edu_title}
            </h2>
            
            <div className="border-l border-zinc-800 pl-8 space-y-12">
                
                {/* Eugenia */}
                <div className="relative">
                    <span className="absolute -left-[37px] top-2 w-4 h-4 bg-purple-500 rounded-full border-4 border-zinc-950" />
                    <span className="text-sm text-purple-400 font-bold tracking-widest uppercase">{t.edu_1_date}</span>
                    <h3 className="text-2xl font-bold mt-2">{t.edu_1_title}</h3>
                    <p className="text-zinc-400 font-medium">{t.edu_1_sub} — <span className="text-white bg-white/10 px-2 py-0.5 rounded text-xs">{t.edu_1_rank}</span></p>
                    <div className="mt-4 space-y-3">
                        <p className="text-zinc-300 text-sm"><strong>{t.edu_1_focus}</strong></p>
                        <div className="flex flex-wrap gap-2">
                            {['Python', 'SQL', 'PowerBI', 'IA', 'n8n', 'Dataiku', 'Tableau'].map(s => (
                                <span key={s} className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-xs text-zinc-400">{s}</span>
                            ))}
                        </div>
                        <p className="text-zinc-400 text-xs italic border-l-2 border-zinc-700 pl-3">
                            {t.edu_1_awards}
                        </p>
                    </div>
                </div>

                {/* IUT */}
                <div className="relative">
                    <span className="absolute -left-[37px] top-2 w-4 h-4 bg-zinc-700 rounded-full border-4 border-zinc-950" />
                    <span className="text-sm text-zinc-500 font-bold tracking-widest uppercase">{t.edu_2_date}</span>
                    <h3 className="text-2xl font-bold mt-2">{t.edu_2_title}</h3>
                    <p className="text-zinc-400 font-medium">{t.edu_2_sub} — <span className="text-white bg-white/10 px-2 py-0.5 rounded text-xs">{t.edu_2_rank}</span></p>
                    <div className="mt-4 space-y-3">
                        <p className="text-zinc-300 text-sm"><strong>{t.edu_2_focus}</strong></p>
                        <div className="flex flex-wrap gap-2">
                            {['Autocad', 'Revit', 'Robot', 'Project', 'Odoo', 'Excel'].map(s => (
                                <span key={s} className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-xs text-zinc-400">{s}</span>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>

        {/* SKILLS */}
        <section>
            <h2 className="text-3xl font-bold mb-8 border-b border-zinc-800 pb-4">{t.skills_title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-semibold mb-4 text-blue-400">{t.skills_1}</h3>
                    <div className="flex flex-wrap gap-2">
                        {['Python', 'SQL', 'Pandas', 'Scikit-learn', 'R', 'VBA'].map(s => (
                            <span key={s} className="px-3 py-1 bg-zinc-900 rounded border border-zinc-800 text-sm">{s}</span>
                        ))}
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-4 text-purple-400">{t.skills_2}</h3>
                    <div className="flex flex-wrap gap-2">
                        {['Tableau', 'PowerBI', 'Looker Studio', 'Make', 'Zapier', 'Figma'].map(s => (
                            <span key={s} className="px-3 py-1 bg-zinc-900 rounded border border-zinc-800 text-sm">{s}</span>
                        ))}
                    </div>
                </div>
            </div>
        </section>

      </div>
    </main>
  );
}