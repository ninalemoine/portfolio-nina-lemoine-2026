'use client'; // <--- INDISPENSABLE
import Link from 'next/link';
import { FaArrowLeft, FaExternalLinkAlt, FaLaptopCode } from 'react-icons/fa';
import { useLanguage } from '@/context/LanguageContext'; // <--- IMPORT

export default function MichiPage() {
  const { language } = useLanguage();

  const content = {
    fr: {
      category: "PRODUCT DESIGN & HACKATHON 🥈",
      title: "Michi",
      year: "Année : 2025",
      tags: ["#Framer", "#Lovable", "#UX/UI"],
      section_project: "Le Projet",
      desc_project: `"Trouver le bon chemin. Commencer par le bon guide."\n\nMichi est né d'un constat simple : trouver un psy est un parcours du combattant. Les annuaires listent des diplômes, mais la thérapie est une histoire de relation humaine.\n\nEn 5 jours de Hackathon, nous avons créé une solution complète : un site vitrine rassurant, une application de matching pour les patients, et un espace pro pour les thérapeutes. Michi ne cherche pas le psy le plus proche, mais celui qui vous correspond.`,
      section_challenge: "Le Challenge",
      desc_challenge: `"Créer une identité de marque forte et rassurante (Soft & Safe) et développer 3 produits fonctionnels (Site, App Client, App Pro) en un temps record (Sprint de 5 jours), tout en garantissant une UX fluide."`,
      section_links: "Découvrir l'écosystème",
      link_site: "Site Vitrine",
      link_app: "App Client",
      link_pro: "Espace Pro",
      back: "Retour aux projets"
    },
    en: {
      category: "PRODUCT DESIGN & HACKATHON 🥈",
      title: "Michi",
      year: "Year: 2025",
      tags: ["#Framer", "#Lovable", "#UX/UI"],
      section_project: "The Project",
      desc_project: `"Find the right path. Start with the right guide."\n\nMichi was born from a simple observation: finding a therapist is an obstacle course. Directories list diplomas, but therapy is about human connection.\n\nIn a 5-day Hackathon, we created a complete solution: a reassuring showcase site, a matching app for patients, and a pro space for therapists. Michi doesn't look for the closest therapist, but the one that matches you.`,
      section_challenge: "The Challenge",
      desc_challenge: `"Creating a strong and reassuring brand identity (Soft & Safe) and developing 3 functional products (Site, Client App, Pro App) in record time (5-day Sprint), while ensuring a smooth UX."`,
      section_links: "Discover Ecosystem",
      link_site: "Showcase Site",
      link_app: "Client App",
      link_pro: "Pro Space",
      back: "Back to projects"
    }
  };

  const t = content[language];

  return (
    <main className="bg-zinc-950 min-h-screen text-white selection:bg-orange-100/30">
      
      <nav className="fixed top-24 left-0 w-full px-6 md:px-10 z-50 flex justify-between items-center mix-blend-difference">
        <Link href="/#projects" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors uppercase tracking-widest text-sm font-bold">
            <FaArrowLeft /> {t.back}
        </Link>
      </nav>

      <header className="relative w-full h-[60vh] flex items-end pb-20 px-4 md:px-20 bg-zinc-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20 blur-[100px]" style={{ background: `radial-gradient(circle at 50% 50%, #F4EBD0, transparent 70%)` }} />
        
        <div className="relative z-10 w-full max-w-5xl">
            <span className="inline-block px-3 py-1 mb-6 border border-white/20 rounded-full text-xs font-bold tracking-widest uppercase bg-black/50 backdrop-blur-md">
                {t.category}
            </span>
            <h1 className="text-5xl md:text-8xl font-bold leading-none tracking-tighter mb-6">
                {t.title}
            </h1>
            <div className="flex flex-wrap gap-4 text-zinc-400">
                <span>{t.year}</span>
                <span>•</span>
                <div className="flex gap-2 text-white">
                    {t.tags.map(tag => <span key={tag}>{tag}</span>)}
                </div>
            </div>
        </div>
      </header>

      <div className="container mx-auto px-4 md:px-20 py-20 flex flex-col md:flex-row gap-20">
        <div className="w-full md:w-2/3 space-y-12">
            <section>
                <h2 className="text-2xl font-bold mb-6 text-zinc-200">{t.section_project}</h2>
                <p className="text-xl leading-relaxed text-zinc-300 whitespace-pre-line">
                    {t.desc_project}
                </p>
            </section>
            <section>
                <h2 className="text-2xl font-bold mb-6 text-zinc-200">{t.section_challenge}</h2>
                <div className="p-8 border-l-4 border-orange-200 bg-zinc-900/30 rounded-r-xl">
                    <p className="text-lg text-zinc-300 italic">
                        {t.desc_challenge}
                    </p>
                </div>
            </section>
            
            <div className="w-full aspect-video rounded-xl overflow-hidden border border-zinc-700 shadow-2xl">
                <img 
                    src="/detail-michi.jpg" 
                    alt="Interface Michi App" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                />
            </div>
        </div>

        <div className="w-full md:w-1/3">
            <div className="sticky top-32 p-8 border border-white/10 rounded-2xl bg-zinc-900/50 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-6">{t.section_links}</h3>
                <div className="flex flex-col gap-4">
                    <a href="https://michimichi.framer.website" target="_blank" className="flex items-center justify-between px-6 py-4 bg-white text-black rounded-lg font-bold hover:bg-zinc-200 transition-colors">
                        {t.link_site} <FaExternalLinkAlt />
                    </a>
                    <a href="https://michimichi.lovable.app" target="_blank" className="flex items-center justify-between px-6 py-4 bg-black border border-zinc-700 rounded-lg font-medium hover:bg-zinc-800 transition-colors">
                        {t.link_app} <FaLaptopCode />
                    </a>
                    <a href="https://michimichi.lovable.app/pro" target="_blank" className="flex items-center justify-between px-6 py-4 bg-black border border-zinc-700 rounded-lg font-medium hover:bg-zinc-800 transition-colors text-zinc-400 text-sm">
                        {t.link_pro} <FaExternalLinkAlt size={12} />
                    </a>
                </div>
            </div>
        </div>
      </div>
    </main>
  );
}