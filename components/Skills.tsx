'use client';

const skillCategories = [
    {
        title: "Data Science & IA",
        skills: ["Python", "Pandas", "NumPy", "Scikit-learn", "Machine Learning", "Data Analytics", "Google Colab", "Dataiku", "R", "SQL"]
    },
    {
        title: "Engineering & Automation",
        skills: ["n8n", "Make (Integromat)", "Zapier", "Dust.tt", "Google Apps Script", "Docker", "VS Code", "Git/GitHub", "LLM APIs"]
    },
    {
        title: "Business Intelligence & Product",
        skills: ["Tableau", "Power BI", "Looker Studio", "Suite Google", "Excel Expert", "Figma", "Lovable", "Framer", "Agile/Sprint"]
    }
];

export default function Skills() {
  return (
    <section className="bg-black text-white py-20 border-t border-zinc-900">
        <div className="container mx-auto px-6 md:px-10">
            
            <div className="flex flex-col md:flex-row gap-10 md:gap-20">
                {/* Titre à gauche */}
                <div className="w-full md:w-1/3">
                    <h2 className="text-3xl font-bold mb-4">Expertise.<br /><span className="text-zinc-500">Toolkit 360°</span></h2>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                        Une approche hybride combinant la rigueur de l'ingénierie des données, la puissance de l'automatisation et la vision produit.
                    </p>
                </div>

                {/* Grille de compétences à droite */}
                <div className="w-full md:w-2/3 grid grid-cols-1 gap-12"> {/* J'ai mis 1 colonne pour laisser de la place aux listes plus longues */}
                    {skillCategories.map((category, index) => (
                        <div key={index}>
                            <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-4 border-b border-zinc-800 pb-2">
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-x-4 gap-y-3">
                                {category.skills.map((skill, i) => (
                                    <span key={i} className="px-3 py-1 bg-zinc-900/50 border border-zinc-800 rounded-md text-sm text-zinc-300 hover:text-white hover:border-zinc-600 transition-all duration-300 cursor-default">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    </section>
  );
}