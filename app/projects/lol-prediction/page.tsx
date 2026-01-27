'use client';
import Link from 'next/link';
import { FaArrowLeft, FaGithub, FaFilePdf } from 'react-icons/fa';
import { useLanguage } from '@/context/LanguageContext';

export default function LoLPage() {
  const { language } = useLanguage();

  const content = {
    fr: {
      category: "MACHINE LEARNING & GAMING 🎮",
      title: "LoL Win Prediction",
      year: "Année : 2024",
      tags: ["#Python", "#Random Forest", "#NLP"],
      section_project: "Le Projet",
      desc_project: `Peut-on prédire l'issue d'une partie de League of Legends dès les 10 premières minutes ? C'était notre défi.\n\nNous avons entraîné plusieurs modèles de Machine Learning (Random Forest, XGBoost) sur un dataset de milliers de matchs classés diamant/master. L'objectif : identifier les facteurs clés de l'Early Game (Gold, Dragons, Kills) qui mènent au "Snowball".\nEn parallèle, nous avons mené une analyse de sentiment sur Twitter pour corréler la toxicité de la communauté avec les performances en jeu.`,
      section_challenge: "Le Challenge",
      desc_challenge: `"Gérer un dataset déséquilibré et sélectionner les features les plus pertinentes (Feature Engineering) pour éviter l'overfitting, tout en traitant des données textuelles non structurées (Twitter API)."`,
      section_links: "Ressources",
      link_code: "Voir le code",
      link_pdf: "Rapport PDF (Bientôt)",
      back: "Retour aux projets"
    },
    en: {
      category: "MACHINE LEARNING & GAMING 🎮",
      title: "LoL Win Prediction",
      year: "Year: 2024",
      tags: ["#Python", "#Random Forest", "#NLP"],
      section_project: "The Project",
      desc_project: `Can we predict the outcome of a League of Legends game within the first 10 minutes? That was our challenge.\n\nWe trained several Machine Learning models (Random Forest, XGBoost) on a dataset of thousands of ranked diamond/master matches. The goal: identify key Early Game factors (Gold, Dragons, Kills) leading to "Snowball".\nIn parallel, we conducted sentiment analysis on Twitter to correlate community toxicity with in-game performance.`,
      section_challenge: "The Challenge",
      desc_challenge: `"Handling an imbalanced dataset and selecting the most relevant features (Feature Engineering) to avoid overfitting, while processing unstructured text data (Twitter API)."`,
      section_links: "Resources",
      link_code: "View Code",
      link_pdf: "PDF Report (Soon)",
      back: "Back to projects"
    }
  };

  const t = content[language];

  return (
    <main className="bg-zinc-950 min-h-screen text-white selection:bg-cyan-900/30">
      <nav className="fixed top-24 left-0 w-full px-6 md:px-10 z-50 flex justify-between items-center mix-blend-difference">
        <Link href="/#projects" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors uppercase tracking-widest text-sm font-bold">
            <FaArrowLeft /> {t.back}
        </Link>
      </nav>

      <header className="relative w-full h-[60vh] flex items-end pb-20 px-4 md:px-20 bg-zinc-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20 blur-[100px]" style={{ background: `radial-gradient(circle at 50% 50%, #0AC8B9, transparent 70%)` }} />
        <div className="relative z-10 w-full max-w-5xl">
            <span className="inline-block px-3 py-1 mb-6 border border-white/20 rounded-full text-xs font-bold tracking-widest uppercase bg-black/50 backdrop-blur-md">{t.category}</span>
            <h1 className="text-5xl md:text-8xl font-bold leading-none tracking-tighter mb-6">{t.title}</h1>
            <div className="flex flex-wrap gap-4 text-zinc-400">
                <span>{t.year}</span><span>•</span>
                <div className="flex gap-2 text-white">{t.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
            </div>
        </div>
      </header>

      <div className="container mx-auto px-4 md:px-20 py-20 flex flex-col md:flex-row gap-20">
        <div className="w-full md:w-2/3 space-y-12">
            <section>
                <h2 className="text-2xl font-bold mb-6 text-zinc-200">{t.section_project}</h2>
                <p className="text-xl leading-relaxed text-zinc-300 whitespace-pre-line">{t.desc_project}</p>
            </section>
            <section>
                <h2 className="text-2xl font-bold mb-6 text-zinc-200">{t.section_challenge}</h2>
                <div className="p-8 border-l-4 border-cyan-500 bg-zinc-900/30 rounded-r-xl"><p className="text-lg text-zinc-300 italic">{t.desc_challenge}</p></div>
            </section>
            <div className="w-full aspect-video rounded-xl overflow-hidden border border-zinc-700 shadow-2xl">
                <img src="/detail-lol.jpg" alt="Graphiques Analyse LoL" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
        </div>
        <div className="w-full md:w-1/3">
            <div className="sticky top-32 p-8 border border-white/10 rounded-2xl bg-zinc-900/50 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-6">{t.section_links}</h3>
                <div className="flex flex-col gap-4">
                    <a href="https://github.com/ninalemoine" target="_blank" className="flex items-center justify-between px-6 py-4 bg-white text-black rounded-lg font-bold hover:bg-zinc-200 transition-colors">
                        {t.link_code} <FaGithub />
                    </a>
                    <div className="flex items-center justify-between px-6 py-4 bg-black border border-zinc-700 rounded-lg font-medium text-zinc-400 cursor-not-allowed opacity-70">
                        {t.link_pdf} <FaFilePdf />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </main>
  );
}