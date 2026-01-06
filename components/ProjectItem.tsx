'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

// CORRECTION ICI : On ajoute le type "any" pour éviter l'erreur sur le ease
const anim: any = {
    initial: {width: 0},
    open: {width: "auto", transition: {duration: 0.4, ease: [0.23, 1, 0.32, 1]}},
    closed: {width: 0}
}

export default function ProjectItem({ project }: any) {
    const [isActive, setIsActive] = useState(false);
    const { title, category, image, slug } = project;

    return (
        <Link 
            href={"/projects/" + slug}
            onMouseEnter={() => {setIsActive(true)}} 
            onMouseLeave={() => {setIsActive(false)}} 
            className="w-full border-t border-zinc-800 py-4 cursor-pointer group block"
        >
            <div className="flex items-center justify-center text-4xl md:text-6xl font-bold uppercase tracking-tighter text-zinc-400 group-hover:text-white transition-colors duration-300">
                
                <p className="mr-4">{title}</p>

                <motion.div 
                    variants={anim} 
                    animate={isActive ? "open" : "closed"} 
                    className="overflow-hidden flex justify-center items-center"
                >
                    {/* On force une largeur minimale pour que l'image ne soit pas écrasée pendant l'anim */}
                    <div className="w-[300px] h-[200px] mx-4 relative rounded-lg overflow-hidden shrink-0">
                        <img 
                            src={image} 
                            alt={title} 
                            className="w-full h-full object-cover"
                        />
                    </div>
                </motion.div>

                <span className="text-sm font-normal tracking-widest ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-zinc-500 hidden md:block">
                    ({category})
                </span>

            </div>
        </Link>
    )
}