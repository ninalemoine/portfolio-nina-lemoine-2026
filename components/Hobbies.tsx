'use client';
import { motion } from 'framer-motion';

const hobbies = [
  { name: "Running", detail: "Semi-marathonienne 🏅" },
  { name: "Ski", detail: "Haut Niveau & Monitrice ⛷️" },
  { name: "Pilates", detail: "Bien-être & Focus 🧘‍♀️" },
  { name: "Tech", detail: "Automatisations & IA 🤖" },
  { name: "Investissement", detail: "BTC, ETH & NFT 📈" },
];

export default function Hobbies() {
  return (
    <section className="py-32 bg-zinc-950 text-white border-t border-white/10">
      <div className="container mx-auto px-4 text-center mb-20">
        <h2 className="text-3xl md:text-4xl font-light uppercase tracking-[0.2em] mb-4">
            Lifestyle & Passions
        </h2>
        <p className="text-zinc-500">Ce qui me fait avancer en dehors de la Data</p>
      </div>

      {/* BANDEAU DÉFILANT (Marquee) */}
      <div className="relative flex overflow-hidden w-full py-10 bg-white/5 border-y border-white/10">
        <motion.div 
            className="flex gap-20 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
        >
            {[...hobbies, ...hobbies, ...hobbies].map((hobby, i) => (
                <div key={i} className="flex flex-col items-center justify-center min-w-[200px]">
                    <span className="text-4xl md:text-6xl font-bold text-white/80">{hobby.name}</span>
                    <span className="text-sm md:text-base text-zinc-500 mt-2 uppercase tracking-wider">{hobby.detail}</span>
                </div>
            ))}
        </motion.div>
      </div>

    </section>
  );
}