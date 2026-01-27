'use client';
import Link from 'next/link';
import { FaArrowLeft, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useLanguage } from '@/context/LanguageContext';

export default function FraudePage() {
  const { language } = useLanguage();

  const content = {
    fr: {
      category: "SECURITY ANALYTICS 🤖",
      title: "Détection de Fraude",
      year: "Année : 2023",
      tags: ["#Google Apps Script", "#Algorithme", "#Security"],
      section_project: "Le Projet",
      desc_project: `Conception d'un algorithme de sécurité pour identifier les comportements suspects dans un système de contrôle d'accès.\n\nLe script analyse les logs d'entrées/sorties et repère les séquences illogiques (ex: deux entrées consécutives sans sortie, signe potentiel d'un badge passé à une autre personne). Le tout est automatisé via Google Apps Script pour alerter les responsables sécurité en temps réel.`,
      section_challenge: "Le Challenge",
      desc_challenge: `"Traiter un grand volume de logs quotidiens sans faux positifs, en distinguant les oublis de badge des véritables tentatives de fraude."`,
      section_links: "Liens du projet",
      link_demo: "Voir le projet",
      back: "Retour aux projets"
    },
    en: {
      category: "SECURITY ANALYTICS 🤖",
      title: "Fraud Detection",
      year: "Year: 2023",
      tags: ["#Google Apps Script", "#Algorithm", "#Security"],
      section_project: "The Project",
      desc_project: `Design of a security algorithm to identify suspicious behaviors in an access control system.\n\nThe script analyzes entry/exit logs and spots illogical sequences (e.g., two consecutive entries without exit, potential sign of a badge pass-back). Everything is automated via Google Apps Script to alert security managers in real-time.`,
      section_challenge: "The Challenge",
      desc_challenge: `"Processing a large volume of daily logs without false positives, distinguishing badge oversights from genuine fraud attempts."`,
      section_links: "Project Links",
      link_demo: "View Project",
      back: "Back to projects"
    }
  };

  const t = content[language];

  return (
    <main className="bg-zinc-950 min-h-screen text-white selection:bg-red-900/30">
      <nav className="fixed top-24 left-0 w-full px-6 md:px-10 z-50 flex justify-between items-center mix-blend-difference">
        <Link href="/#projects" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors uppercase tracking-widest text-sm font-bold">
            <FaArrowLeft /> {t.back}
        </Link>
      </nav>

      <header className="relative w-full h-[60vh] flex items-end pb-20 px-4 md:px-20 bg-zinc-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20 blur-[100px]" style={{ background: `radial-gradient(circle at 50% 50%, #e11d48, transparent 70%)` }} />
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
                <div className="p-8 border-l-4 border-red-600 bg-zinc-900/30 rounded-r-xl"><p className="text-lg text-zinc-300 italic">{t.desc_challenge}</p></div>
            </section>
            <div className="w-full aspect-video rounded-xl overflow-hidden border border-zinc-700 shadow-2xl">
                <img src="/detail-fraude.jpg" alt="Capture Fraude" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
        </div>
        <div className="w-full md:w-1/3">
            <div className="sticky top-32 p-8 border border-white/10 rounded-2xl bg-zinc-900/50 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-6">{t.section_links}</h3>
                <div className="flex flex-col gap-4">
                    <a href="https://ninalemoine.github.io/analyse-fraude-v2.html" target="_blank" className="flex items-center justify-between px-6 py-4 bg-white text-black rounded-lg font-bold hover:bg-zinc-200 transition-colors">
                        {t.link_demo} <FaExternalLinkAlt />
                    </a>
                    <a href="https://github.com/ninalemoine" target="_blank" className="flex items-center justify-between px-6 py-4 bg-black border border-zinc-700 rounded-lg font-medium hover:bg-zinc-800 transition-colors">
                        GitHub <FaGithub size={20} />
                    </a>
                </div>
            </div>
        </div>
      </div>
    </main>
  );
}