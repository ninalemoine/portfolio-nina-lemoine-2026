'use client';
import { FaLinkedin, FaEnvelope, FaPhone, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <div 
        id="contact" 
        className="relative h-[500px]" 
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
        <div className="fixed bottom-0 h-[500px] w-full bg-zinc-900 text-white flex flex-col items-center justify-center">
            
            <div className="container mx-auto px-4 flex flex-col items-center text-center">
                <h2 className="text-[12vw] md:text-[8vw] font-bold leading-none tracking-tighter mb-8">
                    LET'S TALK
                </h2>
                
                <div className="flex flex-col md:flex-row gap-8 md:gap-20 items-center text-lg md:text-xl font-light">
                    
                    <a href="mailto:ninalemoine@icloud.com" className="group flex items-center gap-3 hover:text-blue-400 transition-colors">
                        <span className="p-3 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                            <FaEnvelope />
                        </span>
                        ninalemoine@icloud.com
                    </a>

                    <a href="tel:0783389933" className="group flex items-center gap-3 hover:text-green-400 transition-colors">
                        <span className="p-3 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                            <FaPhone />
                        </span>
                        07 83 38 99 33
                    </a>

                    <a href="https://www.linkedin.com/in/nina-lemoine-/" target="_blank" className="group flex items-center gap-3 hover:text-[#0077b5] transition-colors">
                        <span className="p-3 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                            <FaLinkedin />
                        </span>
                        LinkedIn
                    </a>

                    <a href="https://github.com/ninalemoine" target="_blank" className="group flex items-center gap-3 hover:text-[#0077b5] transition-colors">
                        <span className="p-3 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                            <FaGithub />
                        </span>
                        Github
                    </a>

                </div>

                <div className="absolute bottom-10 text-zinc-600 text-sm">
                    © 2026 Nina Lemoine • Data & Design
                </div>
            </div>
        </div>
    </div>
  );
}