import Link from 'next/link';
import { FaArrowLeft, FaPlay, FaExternalLinkAlt } from 'react-icons/fa'; // J'ai ajouté FaPlay pour la vidéo

export default function AuraPage() {
  return (
    <main className="bg-zinc-950 min-h-screen text-white selection:bg-purple-900/30">
      
      <nav className="fixed top-24 left-0 w-full px-6 md:px-10 z-50 flex justify-between items-center mix-blend-difference">
        <Link href="/#projects" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors uppercase tracking-widest text-sm font-bold">
            <FaArrowLeft /> Retour aux projets
        </Link>
      </nav>

      <header className="relative w-full h-[60vh] flex items-end pb-20 px-4 md:px-20 bg-zinc-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20 blur-[100px]" style={{ background: `radial-gradient(circle at 50% 50%, #7000FF, transparent 70%)` }} />
        
        <div className="relative z-10 w-full max-w-5xl">
            <span className="inline-block px-3 py-1 mb-6 border border-white/20 rounded-full text-xs font-bold tracking-widest uppercase bg-black/50 backdrop-blur-md">
                IA & MUSIC BUSINESS 🎧
            </span>
            <h1 className="text-5xl md:text-8xl font-bold leading-none tracking-tighter mb-6">
                AURA Agency
            </h1>
            <div className="flex flex-wrap gap-4 text-zinc-400">
                <span>Année : 2025</span>
                <span>•</span>
                <div className="flex gap-2 text-white">
                    <span>#Dust.tt</span>
                    <span>#LLM</span>
                    <span>#Multi-Agent</span>
                </div>
            </div>
        </div>
      </header>

      <div className="container mx-auto px-4 md:px-20 py-20 flex flex-col md:flex-row gap-20">
        <div className="w-full md:w-2/3 space-y-12">
            <section>
                <h2 className="text-2xl font-bold mb-6 text-zinc-200">Le Concept</h2>
                <p className="text-xl leading-relaxed text-zinc-300 whitespace-pre-line">
                    AURA est une startup fictive de label musical où chaque rôle clé est tenu par un agent IA spécialisé.
                    
                    J'ai architecturé tout le système sur la plateforme Dust, en créant des assistants interconnectés capables de collaborer. L'agent "Directeur Artistique" analyse les tendances, l'agent "Data Analyst" vérifie la viabilité marché, et l'agent "Legal" prépare les contrats. L'objectif : automatiser la gestion administrative et stratégique pour laisser aux artistes 100% de temps créatif.
                </p>
            </section>
            <section>
                <h2 className="text-2xl font-bold mb-6 text-zinc-200">Le Challenge</h2>
                <div className="p-8 border-l-4 border-purple-600 bg-zinc-900/30 rounded-r-xl">
                    <p className="text-lg text-zinc-300 italic">
                        "Orchestrer la communication entre plusieurs agents IA (Multi-Agent System) et définir des prompts systèmes robustes pour que chaque 'employé virtuel' garde sa personnalité et son expertise spécifique sans halluciner."
                    </p>
                </div>
            </section>
            
            {/* Image Detail */}
            <div className="w-full aspect-video rounded-xl overflow-hidden border border-zinc-700 shadow-2xl">
                <img 
                    src="/detail-aura.jpg" 
                    alt="Interface Dust AURA" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                />
            </div>
        </div>

        <div className="w-full md:w-1/3">
            <div className="sticky top-32 p-8 border border-white/10 rounded-2xl bg-zinc-900/50 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-6">Démo du projet</h3>
                <div className="flex flex-col gap-4">
                    <a href="https://www.loom.com/share/6ddc6ae5dc204aa585975148c1657361" target="_blank" className="flex items-center justify-between px-6 py-4 bg-white text-black rounded-lg font-bold hover:bg-zinc-200 transition-colors">
                        Voir la présentation <FaPlay size={12} />
                    </a>
                    
                    <div className="mt-4">
                        <p className="text-sm text-zinc-500 mb-2">Technologies utilisées :</p>
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