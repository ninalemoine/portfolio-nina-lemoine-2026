import Link from 'next/link';
import { FaArrowLeft, FaExternalLinkAlt, FaLaptopCode } from 'react-icons/fa';

export default function MichiPage() {
  return (
    <main className="bg-zinc-950 min-h-screen text-white selection:bg-orange-100/30">
      
      <nav className="fixed top-24 left-0 w-full px-6 md:px-10 z-50 flex justify-between items-center mix-blend-difference">
        <Link href="/#projects" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors uppercase tracking-widest text-sm font-bold">
            <FaArrowLeft /> Retour aux projets
        </Link>
      </nav>

      <header className="relative w-full h-[60vh] flex items-end pb-20 px-4 md:px-20 bg-zinc-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20 blur-[100px]" style={{ background: `radial-gradient(circle at 50% 50%, #F4EBD0, transparent 70%)` }} />
        
        <div className="relative z-10 w-full max-w-5xl">
            <span className="inline-block px-3 py-1 mb-6 border border-white/20 rounded-full text-xs font-bold tracking-widest uppercase bg-black/50 backdrop-blur-md">
                PRODUCT DESIGN & HACKATHON 🥈
            </span>
            <h1 className="text-5xl md:text-8xl font-bold leading-none tracking-tighter mb-6">
                Michi
            </h1>
            <div className="flex flex-wrap gap-4 text-zinc-400">
                <span>Année : 2025</span>
                <span>•</span>
                <div className="flex gap-2 text-white">
                    <span>#Framer</span>
                    <span>#Lovable</span>
                    <span>#UX/UI</span>
                </div>
            </div>
        </div>
      </header>

      <div className="container mx-auto px-4 md:px-20 py-20 flex flex-col md:flex-row gap-20">
        <div className="w-full md:w-2/3 space-y-12">
            <section>
                <h2 className="text-2xl font-bold mb-6 text-zinc-200">Le Projet</h2>
                <p className="text-xl leading-relaxed text-zinc-300 whitespace-pre-line">
                    "Trouver le bon chemin. Commencer par le bon guide."
                    
                    Michi est né d'un constat simple : trouver un psy est un parcours du combattant. Les annuaires listent des diplômes, mais la thérapie est une histoire de relation humaine.
                    
                    En 5 jours de Hackathon, nous avons créé une solution complète : un site vitrine rassurant, une application de matching pour les patients, et un espace pro pour les thérapeutes. Michi ne cherche pas le psy le plus proche, mais celui qui vous correspond.
                </p>
            </section>
            <section>
                <h2 className="text-2xl font-bold mb-6 text-zinc-200">Le Challenge</h2>
                <div className="p-8 border-l-4 border-orange-200 bg-zinc-900/30 rounded-r-xl">
                    <p className="text-lg text-zinc-300 italic">
                        "Créer une identité de marque forte et rassurante (Soft & Safe) et développer 3 produits fonctionnels (Site, App Client, App Pro) en un temps record (Sprint de 5 jours), tout en garantissant une UX fluide."
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
                <h3 className="text-xl font-bold mb-6">Découvrir l'écosystème</h3>
                <div className="flex flex-col gap-4">
                    <a href="https://michimichi.framer.website" target="_blank" className="flex items-center justify-between px-6 py-4 bg-white text-black rounded-lg font-bold hover:bg-zinc-200 transition-colors">
                        Site Vitrine <FaExternalLinkAlt />
                    </a>
                    <a href="https://michimichi.lovable.app" target="_blank" className="flex items-center justify-between px-6 py-4 bg-black border border-zinc-700 rounded-lg font-medium hover:bg-zinc-800 transition-colors">
                        App Client <FaLaptopCode />
                    </a>
                    <a href="https://michimichi.lovable.app/pro" target="_blank" className="flex items-center justify-between px-6 py-4 bg-black border border-zinc-700 rounded-lg font-medium hover:bg-zinc-800 transition-colors text-zinc-400 text-sm">
                        Espace Pro <FaExternalLinkAlt size={12} />
                    </a>
                </div>
            </div>
        </div>
      </div>
    </main>
  );
}