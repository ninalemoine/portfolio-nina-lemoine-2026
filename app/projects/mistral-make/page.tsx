'use client';
import Link from 'next/link';
import { FaArrowLeft, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useLanguage } from '@/context/LanguageContext';

export default function MistralPage() {
  const { language } = useLanguage();

  const content = {
    fr: {
      category: "MAKE X MISTRAL FINALIST 🥈",
      title: "Campagnes IA & Make",
      year: "Année : 2024",
      tags: ["#Mistral AI", "#Make", "#Prompt Engineering"],
      section_project: "Le Projet",
      desc_project: `Développé lors du challenge Make x Mistral AI. Nous avons créé un système capable d'automatiser entièrement la création de campagnes marketing.\n\nEn connectant l'API de Mistral (IA générative française) à des scénarios Make, l'outil analyse le profil d'une cible et génère un email, une image et une tagline uniques. C'est la puissance du No-Code alliée à l'IA.`,
      section_challenge: "Le Challenge",
      desc_challenge: `"Gérer la latence de l'API IA et assurer la cohérence du ton de marque (Tone of Voice) dans les textes générés automatiquement."`,
      section_links: "Liens du projet",
      link_demo: "Voir le projet",
      back: "Retour aux projets"
    },
    en: {
      category: "MAKE X MISTRAL FINALIST 🥈",
      title: "Campagnes IA & Make",
      year: "Year: 2024",
      tags: ["#Mistral AI", "#Make", "#Prompt Engineering"],
      section_project: "The Project",
      desc_project: `Developed during the Make x Mistral AI challenge. We created a system capable of fully automating marketing campaign creation.\n\nBy connecting the Mistral API (French Generative AI) to Make scenarios, the tool analyzes a target profile and generates a unique email, image, and tagline. It's the power of No-Code combined with AI.`,
      section_challenge: "The Challenge",
      desc_challenge: `"Managing AI API latency and ensuring brand tone consistency (Tone of Voice) in automatically generated texts."`,
      section_links: "Project Links",
      link_demo: "View Project",
      back: "Back to projects"
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
        <div className="absolute inset-0 opacity-20 blur-[100px]" style={{ background: `radial-gradient(circle at 50% 50%, #7c3aed, transparent 70%)` }} />
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
                <img src="/detail-mistral.jpg" alt="Capture Mistral AI" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
        </div>
        <div className="w-full md:w-1/3">
            <div className="sticky top-32 p-8 border border-white/10 rounded-2xl bg-zinc-900/50 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-6">{t.section_links}</h3>
                <div className="flex flex-col gap-4">
                    <a href="https://ninalemoine.github.io/malt-mistral-make-v2.html" target="_blank" className="flex items-center justify-between px-6 py-4 bg-white text-black rounded-lg font-bold hover:bg-zinc-200 transition-colors">
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