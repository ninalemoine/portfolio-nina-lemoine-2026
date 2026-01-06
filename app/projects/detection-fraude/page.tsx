import Link from 'next/link';
import { FaArrowLeft, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function FraudePage() {
  return (
    <main className="bg-zinc-950 min-h-screen text-white selection:bg-red-900/30">
      
      <nav className="fixed top-10 left-0 w-full p-6 md:p-10 z-50 flex justify-between items-center mix-blend-difference">
        <Link href="/#projects" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors uppercase tracking-widest text-sm font-bold">
            <FaArrowLeft /> Retour aux projets
        </Link>
      </nav>

      <header className="relative w-full h-[60vh] flex items-end pb-20 px-4 md:px-20 bg-zinc-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20 blur-[100px]" style={{ background: `radial-gradient(circle at 50% 50%, #e11d48, transparent 70%)` }} />
        
        <div className="relative z-10 w-full max-w-5xl">
            <span className="inline-block px-3 py-1 mb-6 border border-white/20 rounded-full text-xs font-bold tracking-widest uppercase bg-black/50 backdrop-blur-md">
                SECURITY ANALYTICS 🤖
            </span>
            <h1 className="text-5xl md:text-8xl font-bold leading-none tracking-tighter mb-6">
                Détection de Fraude
            </h1>
            <div className="flex flex-wrap gap-4 text-zinc-400">
                <span>Année : 2025</span>
                <span>•</span>
                <div className="flex gap-2 text-white">
                    <span>#Google Apps Script</span>
                    <span>#Algorithme</span>
                    <span>#Security</span>
                </div>
            </div>
        </div>
      </header>

      <div className="container mx-auto px-4 md:px-20 py-20 flex flex-col md:flex-row gap-20">
        <div className="w-full md:w-2/3 space-y-12">
            <section>
                <h2 className="text-2xl font-bold mb-6 text-zinc-200">Le Projet</h2>
                <p className="text-xl leading-relaxed text-zinc-300 whitespace-pre-line">
                    Conception d'un algorithme de sécurité pour identifier les comportements suspects dans un système de contrôle d'accès.
                    
                    Le script analyse les logs d'entrées/sorties et repère les séquences illogiques (ex: deux entrées consécutives sans sortie, signe potentiel d'un badge passé à une autre personne). Le tout est automatisé via Google Apps Script pour alerter les responsables sécurité en temps réel.
                </p>
            </section>
            <section>
                <h2 className="text-2xl font-bold mb-6 text-zinc-200">Le Challenge</h2>
                <div className="p-8 border-l-4 border-red-600 bg-zinc-900/30 rounded-r-xl">
                    <p className="text-lg text-zinc-300 italic">
                        "Traiter un grand volume de logs quotidiens sans générer de faux positifs, et réussir à distinguer les simples oublis de badge des véritables tentatives de fraude."
                    </p>
                </div>
            </section>
            {/* Image Detail */}
            <div className="w-full aspect-video rounded-xl overflow-hidden border border-zinc-700 shadow-2xl">
                <img 
                    src="/detail-fraude.jpg" 
                    alt="Capture d'écran Détection de Fraude" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                />
            </div>
        </div>
        <div className="w-full md:w-1/3">
            <div className="sticky top-32 p-8 border border-white/10 rounded-2xl bg-zinc-900/50 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-6">Liens du projet</h3>
                <div className="flex flex-col gap-4">
                    <a href="https://ninalemoine.github.io/analyse-fraude-v2.html" target="_blank" className="flex items-center justify-between px-6 py-4 bg-white text-black rounded-lg font-bold hover:bg-zinc-200 transition-colors">
                        Voir le projet <FaExternalLinkAlt />
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