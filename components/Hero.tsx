'use client';
import { motion } from 'framer-motion';
import RippleEffect from './RippleEffect'; // <--- Import

export default function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      
      {/* EFFET RIPPLE EN FOND (Remplace l'image statique) */}
      <RippleEffect />
      
      {/* CALQUE SOMBRE (pour que le texte reste lisible) */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none z-10" />

      {/* TON TEXTE */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 z-20 pointer-events-none">
          <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="text-6xl md:text-9xl font-bold tracking-tighter text-center"
          >
              NINA LEMOINE
          </motion.h1>
          
          <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2 }}
              className="mt-6 text-xl md:text-2xl font-light tracking-widest uppercase"
          >
              Data Scientist & Analyst
          </motion.p>
      </div>
    </div>
  );
}