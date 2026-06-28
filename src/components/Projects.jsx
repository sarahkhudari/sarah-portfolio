import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Sparkles, ExternalLink, Eye } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.jsx';
import { Card } from './ui/Card.jsx';
import { Badge } from './ui/Badge.jsx';
import { ProjectModal } from './ProjectModal.jsx';
import { PhoneFrame } from './PhoneFrame.jsx';

export function Projects() {
  const { t, isRTL } = useLanguage();
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" className="section-padding relative">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-10 left-1/4 h-72 w-72 rounded-full bg-neon-pink/20 blur-[100px]" />
        <div className="absolute bottom-10 right-1/4 h-72 w-72 rounded-full bg-neon-violet/25 blur-[100px]" />
      </div>

      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          <span className="section-eyebrow">
            <Sparkles className="h-3 w-3 text-neon-pink" />
            {t.projects.eyebrow}
          </span>
          <h2 className="section-title mt-5">
            <span className="gradient-text">{t.projects.title}</span>
          </h2>
          <p className="mt-4 max-w-xl text-base text-blush-200/80">
            {t.projects.subtitle}
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {t.projects.items.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              whileHover={{ y: -8 }}
            >
              <Card
                className="group relative h-full overflow-hidden p-0 transition-all duration-500 hover:shadow-glow-lg cursor-pointer"
                onClick={() => setActiveProject(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveProject(project);
                  }
                }}
              >
                {/* Animated neon edge that appears on hover */}
                <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 [box-shadow:0_0_0_1px_rgba(255,175,204,0.55),0_0_30px_-4px_rgba(255,175,204,0.7)]" />

                {/* ----------------------------------------------------------
                   PROJECT IMAGE
                   Drop your real screenshots into /public/images/ following:
                   /images/{id}-1.png … /images/{id}-5.png
                   ---------------------------------------------------------- */}
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  {project.kind === 'mobile' ? (
                    <>
                      {/* Blurred backdrop using the same screenshot */}
                      <div
                        className="absolute inset-0 bg-cover bg-center scale-110 blur-2xl opacity-40"
                        style={{ backgroundImage: `url(${project.image})` }}
                        aria-hidden="true"
                      />
                      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-ink-950 via-blush-900/40 to-neon-violet/15" />

                      {/* Centered phone frame */}
                      <div className="relative flex h-full w-full items-center justify-center py-3 transition-transform duration-700 group-hover:scale-[1.05]">
                        <PhoneFrame className="h-full">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="absolute inset-0 h-full w-full object-cover"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                        </PhoneFrame>
                      </div>
                    </>
                  ) : (
                    <>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.08]"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                      {/* Fallback gradient while the real screenshot is missing */}
                      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-ink-950 via-blush-900/40 to-neon-violet/15" />
                      <div className="absolute inset-0 -z-10 flex items-center justify-center">
                        <span className="font-display text-6xl font-semibold gradient-text opacity-80">
                          {project.title.charAt(0)}
                        </span>
                      </div>
                    </>
                  )}

                  {/* Soft pink overlay on hover */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neon-pink/55 via-blush-500/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/15 bg-ink-950/70 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-blush-200 shadow-glow-soft backdrop-blur">
                    {project.id}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-xl font-semibold text-blush-50 transition-colors duration-300 group-hover:text-neon-pink">
                      {project.title}
                    </h3>
                    <ArrowUpRight
                      className={`h-5 w-5 flex-none text-blush-300/60 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-neon-pink group-hover:drop-shadow-[0_0_8px_rgba(255,175,204,0.7)] ${
                        isRTL ? 'rotate-[270deg] group-hover:-translate-x-1' : ''
                      }`}
                    />
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-blush-200/80">
                    {project.description}
                  </p>

                  <div className="mt-5 grid gap-3 text-xs">
                    <div>
                      <span className="font-bold uppercase tracking-wider text-blush-300">
                        {t.projects.role}:
                      </span>{' '}
                      <span className="text-blush-100">{project.role}</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-bold uppercase tracking-wider text-blush-300">
                        {t.projects.stack}:
                      </span>
                      {project.tech.map((tech) => (
                        <Badge key={tech}>{tech}</Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveProject(project);
                      }}
                      className="btn-primary !px-5 !py-2.5 !text-xs"
                    >
                      <Eye className="h-3.5 w-3.5" />
                      {t.projects.viewDetails}
                    </button>
                    {/* TODO: Replace "#" with the real demo / GitHub URLs */}
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="btn-ghost !px-5 !py-2.5 !text-xs"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      {t.projects.demo}
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="btn-ghost !px-5 !py-2.5 !text-xs"
                    >
                      <Github className="h-3.5 w-3.5" />
                      {t.projects.code}
                    </a>
                  </div>
                </div>
              </Card>
            </motion.article>
          ))}
        </div>
      </div>

      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}
