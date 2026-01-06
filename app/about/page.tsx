import { FaArrowLeft, FaDownload } from "react-icons/fa";

export default function AboutPage() {
  return (
    <main className="bg-zinc-950 min-h-screen text-white p-8 md:p-20">
      
      {/* BOUTON RETOUR RADICAL */}
      <a href="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors mb-12 cursor-pointer z-50 relative">
        <FaArrowLeft /> Retour à l&apos;accueil
      </a>

      <div className="max-w-4xl mx-auto space-y-20">
        
        {/* HEADER */}
        <section>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Mon Parcours.</h1>
            <p className="text-xl text-zinc-300 leading-relaxed">
                De la compétition de ski Alpin à l&apos;analyse de données Retail, mon chemin est guidé par la recherche de performance et l&apos;optimisation.
            </p>
             <a href="/CV_Nina_LEMOINE_2025.pdf" download className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-zinc-200 transition-colors">
                <FaDownload /> Télécharger mon CV
            </a>
        </section>

        {/* SECTION EXPÉRIENCES (Timeline) */}
        <section className="border-l border-zinc-800 pl-8 space-y-12">
            
            <div className="relative">
                <span className="absolute -left-[37px] top-2 w-4 h-4 bg-blue-500 rounded-full border-4 border-zinc-950" />
                <span className="text-sm text-blue-400 font-bold tracking-widest uppercase">2024 - Aujourd&apos;hui</span>
                <h3 className="text-3xl font-bold mt-2">Data Analyst @ Carrefour</h3>
                <p className="text-zinc-400 mt-2">Alternance - Massy</p>
                <ul className="list-disc list-inside mt-4 text-zinc-300 space-y-2">
                    <li>Analyse de performance des gammes de produits.</li>
                    <li>Optimisation des flux logistiques via SQL & Tableau.</li>
                    <li>Collaboration avec les équipes métiers pour définir les KPIs.</li>
                </ul>
            </div>

            <div className="relative">
                <span className="absolute -left-[37px] top-2 w-4 h-4 bg-zinc-700 rounded-full border-4 border-zinc-950" />
                <span className="text-sm text-zinc-500 font-bold tracking-widest uppercase">2023 - 2024</span>
                <h3 className="text-3xl font-bold mt-2">Chargée d&apos;Opérations @ Zenpark</h3>
                <p className="text-zinc-400 mt-2">Stage - Paris</p>
                <ul className="list-disc list-inside mt-4 text-zinc-300 space-y-2">
                    <li>Gestion de la base de données clients.</li>
                    <li>Automatisation de processus via Make (No-code).</li>
                </ul>
            </div>

             <div className="relative">
                <span className="absolute -left-[37px] top-2 w-4 h-4 bg-zinc-700 rounded-full border-4 border-zinc-950" />
                <span className="text-sm text-zinc-500 font-bold tracking-widest uppercase">2022 - 2023</span>
                <h3 className="text-3xl font-bold mt-2">Conduite de Travaux @ SAS 2GM</h3>
                <p className="text-zinc-400 mt-2">Stage - BTP</p>
                <p className="text-zinc-300 mt-2">Gestion de chantier, suivi budgétaire et management d&apos;équipes terrain.</p>
            </div>

        </section>

        {/* SECTION COMPÉTENCES */}
        <section>
            <h2 className="text-3xl font-bold mb-8 border-b border-zinc-800 pb-4">Compétences Techniques</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-semibold mb-4 text-blue-400">Data & Code</h3>
                    <div className="flex flex-wrap gap-2">
                        {['Python', 'SQL', 'Pandas', 'Scikit-learn', 'R', 'VBA'].map(s => (
                            <span key={s} className="px-3 py-1 bg-zinc-900 rounded border border-zinc-800 text-sm">{s}</span>
                        ))}
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-4 text-purple-400">Viz & Tools</h3>
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