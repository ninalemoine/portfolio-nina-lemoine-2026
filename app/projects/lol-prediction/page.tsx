import Link from 'next/link';
import { FaArrowLeft, FaGithub, FaFilePdf } from 'react-icons/fa';

export default function LoLPage() {
  return (
    <main className="bg-zinc-950 min-h-screen text-white selection:bg-cyan-900/30">
      
      <nav className="fixed top-24 left-0 w-full px-6 md:px-10 z-50 flex justify-between items-center mix-blend-difference">
        <Link href="/#projects" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors uppercase tracking-widest text-sm font-bold">
            <FaArrowLeft /> Retour aux projets
        </Link>
      </nav>

      <header className="relative w-full h-[60vh] flex items-end pb-20 px-4 md:px-20 bg-zinc-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20 blur-[100px]" style={{ background: `radial-gradient(circle at 50% 50%, #0AC8B9, transparent 70%)` }} />
        
        <div className="relative z-10 w-full max-w-5xl">
            <span className="inline-block px-3 py-1 mb-6 border border-white/20 rounded-full text-xs font-bold tracking-widest uppercase bg-black/50 backdrop-blur-md">
                MACHINE LEARNING & GAMING 🎮
            </span>
            <h1 className="text-5xl md:text-8xl font-bold leading-none tracking-tighter mb-6">
                LoL Win Prediction
            </h1>
            <div className="flex flex-wrap gap-4 text-zinc-400">
                <span>Année : 2024</span>
                <span>•</span>
                <div className="flex gap-2 text-white">
                    <span>#Python</span>
                    <span>#Random Forest</span>
                    <span>#NLP</span>
                </div>
            </div>
        </div>
      </header>

      <div className="container mx-auto px-4 md:px-20 py-20 flex flex-col md:flex-row gap-20">
        <div className="w-full md:w-2/3 space-y-12">
            <section>
                <h2 className="text-2xl font-bold mb-6 text-zinc-200">Le Projet</h2>
                <p className="text-xl leading-relaxed text-zinc-300 whitespace-pre-line">
                    Dans League of Legends, le début de partie ("early game") est crucial. Un avantage pris rapidement peut souvent se convertir en victoire ("snowball").
                    
                    Notre but était de quantifier cet impact. Nous avons développé un modèle capable de prédire l'équipe gagnante avec une précision de plus de 70% en utilisant uniquement les données des 10 premières minutes (Gold, XP, Dragons). Nous avons comparé plusieurs algorithmes (KNN, Decision Tree, Random Forest) pour trouver le plus performant.
                </p>
            </section>
            <section>
                <h2 className="text-2xl font-bold mb-6 text-zinc-200">Le Challenge</h2>
                <div className="p-8 border-l-4 border-cyan-500 bg-zinc-900/30 rounded-r-xl">
                    <p className="text-lg text-zinc-300 italic">
                        "Nettoyer et structurer un dataset complexe issu de l'API Riot Games, et réussir à corréler des données de jeu quantitatives avec des données sociales qualitatives (tweets) pour une analyse hybride."
                    </p>
                </div>
            </section>
            
            {/* Image Detail */}
            <div className="w-full aspect-video rounded-xl overflow-hidden border border-zinc-700 shadow-2xl">
                <img 
                    src="/detail-lol.jpg" 
                    alt="Graphiques Analyse LoL" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                />
            </div>
        </div>

        <div className="w-full md:w-1/3">
            <div className="sticky top-32 p-8 border border-white/10 rounded-2xl bg-zinc-900/50 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-6">Ressources</h3>
                <div className="flex flex-col gap-4">
                    <a href="https://github.com/ninalemoine" target="_blank" className="flex items-center justify-between px-6 py-4 bg-white text-black rounded-lg font-bold hover:bg-zinc-200 transition-colors">
                        Voir le code <FaGithub />
                    </a>
                    
                    {/* Lien vers le rapport PDF si tu veux le mettre en ligne */}
                    <div className="flex items-center justify-between px-6 py-4 bg-black border border-zinc-700 rounded-lg font-medium text-zinc-400 cursor-not-allowed opacity-70">
                        Rapport PDF (Bientôt) <FaFilePdf />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </main>
  );
}