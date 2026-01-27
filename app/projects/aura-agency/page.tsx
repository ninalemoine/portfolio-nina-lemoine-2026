'use client';
import Link from 'next/link';
import { FaArrowLeft, FaPlay } from 'react-icons/fa';
import { useLanguage } from '@/context/LanguageContext';

export default function AuraPage() {
  const { language } = useLanguage();

  const content = {
    fr: {
      category: "IA & MUSIC BUSINESS 🎧",
      title: "AURA Agency",
      year: "Année : 2025",
      tags: ["#Dust.tt", "#LLM", "#Multi-Agent"],
      section_project: "Le Concept",
      desc_project: `AURA est une startup fictive de label musical où chaque rôle clé (Directeur Artistique, Data Analyst, Community Manager) est tenu par un agent IA spécialisé.\n\nJ'ai architecturé tout le système sur la plateforme Dust, en créant des assistants interconnectés capables de collaborer. Par exemple, l'agent "DA" analyse les tendances et briefe l'agent "Data" qui vérifie la viabilité marché. L'objectif : automatiser la gestion administrative et stratégique pour laisser aux artistes 100% de temps créatif.`,
      section_challenge: "Le Challenge",
      desc_challenge: `"Orchestrer la communication entre plusieurs agents IA (Multi-Agent System) et définir des prompts systèmes robustes pour que chaque 'employé virtuel' garde sa personnalité et son expertise spécifique sans halluciner."`,
      section_links: "Démo du projet",
      link_demo: "Voir la présentation",
      back: "Retour aux projets",
      tech_title: "Technologies utilisées :"
    },
    en: {
      category: "AI & MUSIC BUSINESS 🎧",
      title: "AURA Agency",
      year: "Year: 2025",
      tags: ["#Dust.tt", "#LLM", "#Multi-Agent"],
      section_project: "The Concept",
      desc_project: `AURA is a fictional music label startup where every key role (Artistic Director, Data Analyst, Community Manager) is held by a specialized AI agent.\n\nI architected the entire system on the Dust platform, creating interconnected assistants capable of collaborating. For example, the "AD" agent analyzes trends and briefs the "Data" agent who checks market viability. The goal: automate administrative and strategic management to leave artists 100% creative time.`,
      section_challenge: "The Challenge",
      desc_challenge: `"Orchestrating communication between multiple AI agents (Multi-Agent System) and defining robust system prompts so that each 'virtual employee' maintains their personality and specific expertise without hallucinating."`,
      section_links: "Project Demo",
      link_demo: "Watch Presentation",
      back: "Back to projects",
      tech_title: "Technologies used:"
    }
  };

  const t = content[language];

  return (
    <main className="bg-zinc-950 min-h-screen text-white selection:bg-purple-900/30">
      <nav className="fixed top-24 left-0 w-full px-6 md:px-10 z-50 flex justify-between items-center mix-blend-difference">
        <Link href="/#projects" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors uppercase tracking-widest text-sm font-bold">
            <FaArrowLeft /> {t.back}
        </Link>
      </nav>

      <header className="relative w-full h-[60vh] flex items-end pb-20 px-4 md:px-20 bg-zinc-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20 blur-[100px]" style={{ background: `radial-gradient(circle at 50% 50%, #7000FF, transparent 70%)` }} />
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
                <div className="p-8 border-l-4 border-purple-600 bg-zinc-900/30 rounded-r-xl"><p className="text-lg text-zinc-300 italic">{t.desc_challenge}</p></div>
            </section>
            <div className="w-full aspect-video rounded-xl overflow-hidden border border-zinc-700 shadow-2xl">
                <img src="/detail-aura.jpg" alt="Interface Dust AURA" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
        </div>
        <div className="w-full md:w-1/3">
            <div className="sticky top-32 p-8 border border-white/10 rounded-2xl bg-zinc-900/50 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-6">{t.section_links}</h3>
                <div className="flex flex-col gap-4">
                    <a href="https://www.loom.com/share/6ddc6ae5dc204aa585975148c1657361" target="_blank" className="flex items-center justify-between px-6 py-4 bg-white text-black rounded-lg font-bold hover:bg-zinc-200 transition-colors">
                        {t.link_demo} <FaPlay size={12} />
                    </a>
                    <div className="mt-4">
                        <p className="text-sm text-zinc-500 mb-2">{t.tech_title}</p>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-zinc-800 rounded-full text-xs">Dust.tt</span>
                            <span className="px-3 py-1 bg-zinc-800 rounded-full text-xs">GPT-4</span>
                            <span className="px-3 py-1 bg-zinc-800 rounded-full text-xs">Claude 3</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </main>
  );
}