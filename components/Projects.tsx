'use client';
import { useLanguage } from '@/context/LanguageContext';
import ProjectItem from './ProjectItem';
import { projects } from '@/data/projects';

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="relative w-full py-32 px-4 md:px-10 bg-black text-white">
      
      <div className="container mx-auto max-w-5xl">
        <div className="mb-20 text-center">
            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter mb-4">
            {t('projects.title')} <span className="text-zinc-700">{t('projects.title.span')}</span>
            </h2>
            <p className="text-zinc-500 uppercase tracking-widest text-sm">
                {t('projects.subtitle')}
            </p>
        </div>

        <div className="flex flex-col border-b border-zinc-800">
          {projects.map((project, index) => (
            // On désactive la vérification TS ici pour éviter l'erreur de typage
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            <ProjectItem key={index} project={project} />
          ))}
        </div>
      </div>

    </section>
  );
}