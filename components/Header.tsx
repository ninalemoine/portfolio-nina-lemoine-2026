'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
// On importe le contexte qu'on vient de créer
import { useLanguage } from '@/context/LanguageContext';

export default function Header() {
  // On récupère la langue actuelle et les outils
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 2.5 }}
      className="fixed top-0 left-0 w-full z-40 px-6 py-6 flex justify-between items-center mix-blend-difference text-white"
    >
        {/* LOGO */}
        <Link href="/" className="text-xl font-bold tracking-tighter uppercase group cursor-pointer flex items-center gap-2">
            <span className="block group-hover:-translate-y-1 transition-transform">Nina</span>
            <span className="block group-hover:translate-y-1 transition-transform">Lemoine©</span>
        </Link>

        {/* NAVIGATION CENTRALE (Traduite) */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-widest uppercase absolute left-1/2 -translate-x-1/2">
            <NavLink href="/#about">{t('nav.about')}</NavLink>
            <NavLink href="/#projects">{t('nav.projects')}</NavLink>
            <NavLink href="/#contact">{t('nav.contact')}</NavLink>
        </nav>

        {/* BOUTONS DROITE */}
        <div className="flex items-center gap-4">
            
            {/* BOUTON LANGUE (FR/EN) */}
            <button 
                onClick={toggleLanguage}
                className="text-xs font-bold uppercase border border-white/30 px-3 py-2 rounded-full hover:bg-white hover:text-black transition-colors w-12 text-center"
            >
                {language === 'fr' ? 'EN' : 'FR'}
            </button>

            {/* BOUTON CV (Change selon la langue) */}
            <a 
                href={language === 'fr' ? "/CV_Nina_LEMOINE_2025.pdf" : "/CV_Nina_LEMOINE_2025_EN.pdf"} 
                download 
                className="hidden md:flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full text-xs font-bold uppercase tracking-widest hover:bg-zinc-200 transition-colors"
            >
                <FaDownload size={10} />
                {t('cv.download')}
            </a>

            {/* Menu Burger Mobile */}
            <button className="md:hidden text-sm font-bold uppercase">Menu</button>
        </div>

    </motion.header>
  );
}

function NavLink({ href, children }: { href: string, children: React.ReactNode }) {
    return (
        <a href={href} className="relative group overflow-hidden">
            <span className="block translate-y-0 group-hover:-translate-y-full transition-transform duration-300">
                {children}
            </span>
            <span className="absolute top-0 left-0 block translate-y-full group-hover:translate-y-0 transition-transform duration-300 text-zinc-400">
                {children}
            </span>
        </a>
    )
}