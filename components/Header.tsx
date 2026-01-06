'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa'; // Import de l'icône

export default function Header() {
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

        {/* NAVIGATION CENTRALE (Cachée sur mobile) */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-widest uppercase absolute left-1/2 -translate-x-1/2">
            <NavLink href="/#about">À Propos</NavLink>
            <NavLink href="/#projects">Projets</NavLink>
            <NavLink href="/#contact">Contact</NavLink>
        </nav>

        {/* BOUTON CV (À DROITE) */}
        <div className="flex items-center gap-4">
            <a 
                href="/CV_Nina_LEMOINE_2025.pdf" 
                download 
                className="hidden md:flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full text-xs font-bold uppercase tracking-widest hover:bg-zinc-200 transition-colors"
            >
                <FaDownload size={10} />
                CV
            </a>

            {/* Menu Burger Mobile (On le garde pour le responsive) */}
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