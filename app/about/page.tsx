import Link from "next/link";
// Une seule ligne propre pour les imports :
import { FaArrowLeft, FaDownload, FaGraduationCap } from "react-icons/fa";

export default function AboutPage() {
  return (
    <main className="bg-zinc-950 min-h-screen text-white p-8 md:p-20">
      
      {/* BOUTON RETOUR CORRIGÉ (Utilise Link + replace pour être propre) */}
      <Link href="/" replace className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors mb-12 cursor-pointer z-50 relative">
        <FaArrowLeft /> Retour à l&apos;accueil
      </Link>

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
        <section className="space-y-8">
            <h2 className="text-3xl font-bold border-b border-zinc-800 pb-4">Expériences Professionnelles</h2>
            <div className="border-l border-zinc-800 pl-8 space-y-12">
                
                {/* Carrefour (Actuel) */}
                <div className="relative">
                    <span className="absolute -left-[37px] top-2 w-4 h-4 bg-blue-500 rounded-full border-4 border-zinc-950" />
                    <span className="text-sm text-blue-400 font-bold tracking-widest uppercase">2025 - Aujourd&apos;hui</span>
                    <h3 className="text-2xl font-bold mt-2">Data Analyst @ Carrefour</h3>
                    <p className="text-zinc-400">Alternance - Massy</p>
                    <ul className="list-disc list-inside mt-4 text-zinc-300 space-y-1 text-sm">
                        <li>Analyse de performance des gammes de produits.</li>
                        <li>Optimisation des flux logistiques via SQL & Tableau.</li>
                        <li>Collaboration avec les équipes métiers pour définir les KPIs.</li>
                    </ul>
                </div>

                {/* Oysho Run Club (Actuel) */}
                <div className="relative">
                    <span className="absolute -left-[37px] top-2 w-4 h-4 bg-pink-500 rounded-full border-4 border-zinc-950" />
                    <span className="text-sm text-pink-400 font-bold tracking-widest uppercase">2025 - Aujourd&apos;hui</span>
                    <h3 className="text-2xl font-bold mt-2">Coach Run Club @ Oysho</h3>
                    <p className="text-zinc-400">Paris</p>
                    <ul className="list-disc list-inside mt-4 text-zinc-300 space-y-1 text-sm">
                        <li>Encadrement et animation des sessions de running hebdomadaires.</li>
                        <li>Gestion d&apos;événements sportifs et création de communauté.</li>
                        <li>Motivation et accompagnement des participants (tous niveaux).</li>
                    </ul>
                </div>

                {/* ESF Courchevel (Actuel/Saisonnier) */}
                <div className="relative">
                    <span className="absolute -left-[37px] top-2 w-4 h-4 bg-red-600 rounded-full border-4 border-zinc-950" />
                    <span className="text-sm text-red-500 font-bold tracking-widest uppercase">Hiver 2022 - Aujourd&apos;hui</span>
                    <h3 className="text-2xl font-bold mt-2">Monitrice de Ski Alpin @ ESF</h3>
                    <p className="text-zinc-400">Courchevel Village</p>
                    <ul className="list-disc list-inside mt-4 text-zinc-300 space-y-1 text-sm">
                        <li><strong>Gestion client :</strong> Encadrement de groupes (1 à 6 pers), fidélisation 70%.</li>
                        <li><strong>International :</strong> Enseignement en français et anglais.</li>
                        <li><strong>Opérationnel :</strong> Logistique de +15 cours/semaine, CA +10K€/saison.</li>
                        <li><strong>Pédagogie :</strong> 95% de satisfaction client grâce à un suivi personnalisé.</li>
                    </ul>
                </div>

                {/* Zenpark */}
                <div className="relative">
                    <span className="absolute -left-[37px] top-2 w-4 h-4 bg-zinc-700 rounded-full border-4 border-zinc-950" />
                    <span className="text-sm text-zinc-500 font-bold tracking-widest uppercase">2024 - 2025</span>
                    <h3 className="text-2xl font-bold mt-2">Chargée d&apos;Opérations @ Zenpark</h3>
                    <p className="text-zinc-400">Stage - Paris</p>
                    <ul className="list-disc list-inside mt-4 text-zinc-300 space-y-1 text-sm">
                        <li>Gestion de la base de données clients.</li>
                        <li>Automatisation de processus via Make (No-code).</li>
                    </ul>
                </div>

                {/* SAS 2GM */}
                <div className="relative">
                    <span className="absolute -left-[37px] top-2 w-4 h-4 bg-zinc-700 rounded-full border-4 border-zinc-950" />
                    <span className="text-sm text-zinc-500 font-bold tracking-widest uppercase">2022 - 2024</span>
                    <h3 className="text-2xl font-bold mt-2">Conduite de Travaux @ SAS 2GM</h3>
                    <p className="text-zinc-400">Alternance - Maîtrise d&apos;oeuvre</p>
                    <p className="text-zinc-300 mt-2 text-sm">Gestion de chantier, suivi budgétaire et management d&apos;équipes terrain.</p>
                </div>

            </div>
        </section>

        {/* NOUVELLE SECTION : ÉDUCATION */}
        <section className="space-y-8">
            <h2 className="text-3xl font-bold border-b border-zinc-800 pb-4 flex items-center gap-3">
                <FaGraduationCap className="text-zinc-500" /> Formation
            </h2>
            
            <div className="border-l border-zinc-800 pl-8 space-y-12">
                
                {/* Eugenia School */}
                <div className="relative">
                    <span className="absolute -left-[37px] top-2 w-4 h-4 bg-purple-500 rounded-full border-4 border-zinc-950" />
                    <span className="text-sm text-purple-400 font-bold tracking-widest uppercase">2024 - 2026</span>
                    <h3 className="text-2xl font-bold mt-2">Eugenia School</h3>
                    <p className="text-zinc-400 font-medium">MSc Business Analytics — <span className="text-white bg-white/10 px-2 py-0.5 rounded text-xs">Top 2 Promo 🏆</span></p>
                    
                    <div className="mt-4 space-y-3">
                        <p className="text-zinc-300 text-sm"><strong>Focus :</strong> Récolte, visualisation et analyse de données, Code, Stratégie, Finance.</p>
                        <div className="flex flex-wrap gap-2">
                            {['Python', 'SQL', 'PowerBI', 'IA', 'n8n', 'Dataiku', 'Tableau'].map(s => (
                                <span key={s} className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-xs text-zinc-400">{s}</span>
                            ))}
                        </div>
                        <p className="text-zinc-400 text-xs italic border-l-2 border-zinc-700 pl-3">
                            Finaliste Hackathon 3M (Malt, Mistral, Make) • Vainqueur Hackathon GoFusion
                        </p>
                    </div>
                </div>

                {/* IUT Chambéry */}
                <div className="relative">
                    <span className="absolute -left-[37px] top-2 w-4 h-4 bg-zinc-700 rounded-full border-4 border-zinc-950" />
                    <span className="text-sm text-zinc-500 font-bold tracking-widest uppercase">2021 - 2024</span>
                    <h3 className="text-2xl font-bold mt-2">Campus Bourget du Lac</h3>
                    <p className="text-zinc-400 font-medium">BUT GCCD (Génie Civil) — <span className="text-white bg-white/10 px-2 py-0.5 rounded text-xs">Top 10 Promo 🏅</span></p>
                    
                    <div className="mt-4 space-y-3">
                        <p className="text-zinc-300 text-sm"><strong>Spécialité Bâtiment :</strong> Mathématiques, Dimensionnement, BIM, Analyse solution, Pilotage chantier.</p>
                        <div className="flex flex-wrap gap-2">
                            {['Autocad', 'Revit', 'Robot', 'Project', 'Odoo', 'Excel'].map(s => (
                                <span key={s} className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-xs text-zinc-400">{s}</span>
                            ))}
                        </div>
                    </div>
                </div>

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