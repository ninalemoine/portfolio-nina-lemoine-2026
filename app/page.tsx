'use client';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Preloader from '@/components/Preloader';

import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills"; // <--- Import ajouté
import SlidingImages from "@/components/SlidingImages";
import Footer from "@/components/Footer";

export default function Home() {
  // Par défaut, on AFFICHE le site (false), pour éviter l'écran noir si ça bugge
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // On lance la logique uniquement une fois que le site est chargé (côté client)
    (async () => {
        // Petit délai pour être sûr que tout est prêt
        setTimeout( () => {
            const hasSeenIntro = sessionStorage.getItem('hasSeenIntro');
            
            // Si on n'a JAMAIS vu l'intro, ALORS on active le chargement
            if (!hasSeenIntro) {
                setIsLoading(true); // On cache le site et on montre l'intro
                document.body.style.cursor = 'wait';
                
                // Et on l'enlève après 2.5s
                setTimeout(() => {
                    setIsLoading(false);
                    document.body.style.cursor = 'default';
                    window.scrollTo(0, 0);
                    sessionStorage.setItem('hasSeenIntro', 'true');
                }, 2500);
            }
        }, 10);
    })()
  }, [])

  return (
    <main className="bg-black">
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>

      <Hero />
      <About />
      <Projects />
      <Skills />
      <SlidingImages />
      <Footer />
    </main>
  );
}