'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link'; 
import { FaArrowRight } from 'react-icons/fa';
// Import du contexte de langue
import { useLanguage } from '@/context/LanguageContext';

export default function About() {
  const { t } = useLanguage(); // Récupération de la fonction de traduction
  
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section id="about" ref={container} className="relative w-full min-h-screen bg-zinc-950 flex items-center justify-center overflow-hidden py-20">
      
      {/* FOND PARALLAXE (Mots clés traduits aussi !) */}
      <div className="absolute inset-0 flex flex-col justify-center opacity-10 pointer-events-none select-none">
        <motion.div style={{ x: x1 }} className="whitespace-nowrap text-[15vw] font-bold leading-none text-white">
          {t('about.bg.1')}
        </motion.div>
        <motion.div style={{ x: x2 }} className="whitespace-nowrap text-[15vw] font-bold leading-none text-white stroke-text">
          {t('about.bg.2')}
        </motion.div>
      </div>

      <div className="relative z-10 container mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
        
        {/* PHOTO */}
        <div className="w-full md:w-1/2 flex justify-center">
            <div className="w-[350px] h-[500px] rounded-lg overflow-hidden relative shadow-2xl border border-zinc-700 grayscale hover:grayscale-0 transition-all duration-500">
                <img src="/me.jpg" alt="Nina Lemoine" className="w-full h-full object-cover" />
            </div>
        </div>

        {/* TEXTE */}
        <div className="w-full md:w-1/2 text-white">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
                {t('about.title')}
            </h2>
            
            <p className="text-lg text-zinc-300 leading-relaxed mb-8">
                {t('about.text')}
                <br /><br />
                <strong>{t('about.current')}</strong>
            </p>

            <Link href="/about" className="group inline-flex items-center gap-3 text-lg font-medium border-b border-white pb-1 hover:text-zinc-300 hover:border-zinc-300 transition-all">
                {t('about.btn')}
                <span className="group-hover:translate-x-2 transition-transform">
                    <FaArrowRight size={14} />
                </span>
            </Link>
        </div>
      </div>
    </section>
  );
}