'use client';
import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
// J'ai ajouté SiBitcoin dans les imports
import { SiPython, SiTableau, SiMysql, SiR, SiFigma, SiOpenai, SiBitcoin } from 'react-icons/si';
import { FaSkiing, FaRunning, FaBrain, FaChartBar } from 'react-icons/fa';
import { IconType } from 'react-icons'; 

const slider1 = [
    { icon: SiPython, title: "Python", color: "#3776AB" },
    { icon: SiTableau, title: "Tableau", color: "#E97627" },
    { icon: SiMysql, title: "SQL", color: "#4479A1" },
    { icon: FaSkiing, title: "Ski Alpin", color: "#FFFFFF" },
    { icon: FaChartBar, title: "Power BI", color: "#F2C811" },
];

const slider2 = [
    { icon: FaBrain, title: "HPI / Soft Skills", color: "#FF6B6B" },
    { icon: SiOpenai, title: "Gen AI", color: "#10A37F" },
    { icon: SiBitcoin, title: "Crypto & Invest", color: "#F7931A" }, // <--- AJOUT ICI
    { icon: FaRunning, title: "Running", color: "#FFFFFF" },
    { icon: SiFigma, title: "UI Design", color: "#F24E1E" },
    { icon: SiR, title: "R Stats", color: "#276DC3" },
];

export default function SlidingImages() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    });
    const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

    return (
        <div ref={container} className="flex flex-col gap-10 relative mt-0 bg-black z-10 py-32 overflow-hidden">
            
            {/* Titre */}
            <div className="container mx-auto px-10 mb-10">
                <h3 className="text-zinc-500 text-sm uppercase tracking-[0.3em]">Stack & Passions</h3>
            </div>

            {/* SLIDER 1 (Gauche) */}
            <div className="flex overflow-hidden w-full mask-gradient">
                <motion.div 
                    className="flex gap-6 min-w-full px-4"
                    animate={{ x: ["0%", "-100%"] }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
                >
                    {[...slider1, ...slider1, ...slider1].map((item, index) => (
                        <Card key={index} item={item} />
                    ))}
                </motion.div>
            </div>

            {/* SLIDER 2 (Droite) */}
            <div className="flex overflow-hidden w-full mask-gradient">
                <motion.div 
                    className="flex gap-6 min-w-full px-4"
                    animate={{ x: ["-100%", "0%"] }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
                >
                    {[...slider2, ...slider2, ...slider2].map((item, index) => (
                        <Card key={index} item={item} />
                    ))}
                </motion.div>
            </div>
            
            {/* Arche décorative en bas */}
            <motion.div style={{ height }} className="absolute bottom-0 left-0 h-[100px] w-full z-10">
                 <div className="h-[1550%] w-[120%] -left-[10%] rounded-[50%] bg-black absolute shadow-[0px_-50px_100px_rgba(0,0,0,1)]"></div>
            </motion.div>

        </div>
    );
}

// Le composant Carte unitaire
function Card({ item }: { item: { icon: IconType, title: string, color: string } }) {
    return (
        <div className="group relative w-[200px] h-[200px] shrink-0 flex flex-col items-center justify-center rounded-3xl bg-zinc-900/30 border border-white/5 hover:border-white/20 hover:bg-zinc-900/80 transition-all duration-500 cursor-default">
            
            {/* L'icône */}
            <div className="text-4xl text-zinc-600 group-hover:scale-110 transition-all duration-500">
                <item.icon 
                    style={{ color: 'inherit' }} 
                    className="group-hover:text-[var(--hover-color)] transition-colors duration-500" 
                />
                <style jsx>{`
                    .group:hover {
                        --hover-color: \${item.color};
                    }
                `}</style>
            </div>

            {/* Le titre */}
            <span className="mt-6 text-xs font-medium uppercase tracking-widest text-zinc-500 group-hover:text-white transition-colors duration-300">
                {item.title}
            </span>

            {/* Lueur d'ambiance */}
            <div 
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(circle at center, \${item.color}, transparent 70%)` }}
            />
        </div>
    )
}