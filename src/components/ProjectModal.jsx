import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  X,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
  Check,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.jsx';
import { Badge } from './ui/Badge.jsx';
import { PhoneFrame } from './PhoneFrame.jsx';

export function ProjectModal({ project, onClose }) {
  const { t, isRTL } = useLanguage();
  const [activeIdx, setActiveIdx] = useState(0);
  const gallery = project?.gallery?.length
    ? project.gallery
    : [project?.image].filter(Boolean);

  useEffect(() => {
    setActiveIdx(0);
  }, [project?.id]);

  useEffect(() => {
    if (!project) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') {
        setActiveIdx((i) => (i + 1) % gallery.length);
      }
      if (e.key === 'ArrowLeft') {
        setActiveIdx((i) => (i - 1 + gallery.length) % gallery.length);
      }
    };
    window.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [project, gallery.length, onClose]);

  const goPrev = () =>
    setActiveIdx((i) => (i - 1 + gallery.length) % gallery.length);
  const goNext = () => setActiveIdx((i) => (i + 1) % gallery.length);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          onClick={onClose}
          aria-modal="true"
          role="dialog"
        >
          <div className="absolute inset-0 bg-ink-950/80 backdrop-blur-md" />

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-3xl border border-white/10 bg-ink-950/95 backdrop-blur-2xl [box-shadow:0_30px_80px_-20px_rgba(255,175,204,0.45),inset_0_1px_0_0_rgba(255,255,255,0.06)]"
          >
            {/* Close button */}
            <button
              type="button"
              onClick={onClose}
              aria-label={t.projects.close}
              className={`absolute top-4 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-ink-950/70 text-blush-100 backdrop-blur transition-all duration-300 hover:border-neon-pink/60 hover:bg-neon-pink/15 hover:text-neon-pink ${
                isRTL ? 'left-4' : 'right-4'
              }`}
            >
              <X className="h-5 w-5" />
            </button>

            {/* Hero image with arrows */}
            <div className="relative h-[70vh] max-h-[820px] min-h-[480px] w-full overflow-hidden rounded-t-3xl bg-gradient-to-br from-ink-950 via-blush-900/40 to-neon-violet/15">
              {/* Soft blurred backdrop using the same screenshot — fills the
                  letterboxing space around portrait phone screenshots so the
                  area never feels empty */}
              <div
                className="absolute inset-0 bg-cover bg-center scale-110 blur-2xl opacity-40"
                style={{ backgroundImage: `url(${gallery[activeIdx]})` }}
                aria-hidden="true"
              />

              {project.kind === 'mobile' ? (
                <div className="relative z-10 flex h-full w-full items-center justify-center py-3 sm:py-4">
                  <PhoneFrame className="h-full">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={gallery[activeIdx]}
                        src={gallery[activeIdx]}
                        alt={`${project.title} — ${activeIdx + 1}`}
                        initial={{ opacity: 0, scale: 1.02 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="absolute inset-0 h-full w-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </AnimatePresence>
                  </PhoneFrame>
                </div>
              ) : (
                <AnimatePresence mode="wait">
                  <motion.img
                    key={gallery[activeIdx]}
                    src={gallery[activeIdx]}
                    alt={`${project.title} — ${activeIdx + 1}`}
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="relative z-10 h-full w-full object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </AnimatePresence>
              )}

              {/* Title overlay — sits above the image at the bottom */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-40 bg-gradient-to-t from-ink-950/90 via-ink-950/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 z-20 p-6 sm:p-8">
                <div className="flex items-center gap-2 rounded-full border border-white/15 bg-ink-950/70 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-blush-200 shadow-glow-soft backdrop-blur w-fit">
                  {project.id}
                </div>
                <h2 className="mt-3 font-display text-3xl font-semibold text-blush-50 sm:text-4xl">
                  <span className="gradient-text">{project.title}</span>
                </h2>
              </div>

              {/* Prev / next arrows */}
              {gallery.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={isRTL ? goNext : goPrev}
                    aria-label="Previous image"
                    className="absolute left-3 top-1/2 z-20 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-ink-950/70 text-blush-100 backdrop-blur transition-all duration-300 hover:border-neon-pink/60 hover:bg-neon-pink/15 hover:text-neon-pink"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={isRTL ? goPrev : goNext}
                    aria-label="Next image"
                    className="absolute right-3 top-1/2 z-20 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-ink-950/70 text-blush-100 backdrop-blur transition-all duration-300 hover:border-neon-pink/60 hover:bg-neon-pink/15 hover:text-neon-pink"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnail strip — portrait-shaped to suit phone screenshots */}
            {gallery.length > 1 && (
              <div className="flex gap-3 overflow-x-auto px-6 py-4 sm:px-8">
                {gallery.map((src, i) => (
                  <button
                    key={src + i}
                    type="button"
                    onClick={() => setActiveIdx(i)}
                    aria-label={`Show image ${i + 1}`}
                    className={`relative h-24 w-14 flex-none overflow-hidden rounded-xl border transition-all duration-300 ${
                      i === activeIdx
                        ? 'border-neon-pink shadow-glow-soft'
                        : 'border-white/10 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={src}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-ink-950 via-blush-900/40 to-neon-violet/15" />
                  </button>
                ))}
              </div>
            )}

            {/* Body */}
            <div className="px-6 pb-8 sm:px-8">
              {/* Overview */}
              <h3 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-blush-300">
                {t.projects.overview}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-blush-100/90">
                {project.description}
              </p>

              {/* Features */}
              {project.features?.length > 0 && (
                <>
                  <h3 className="mt-8 font-display text-xs font-bold uppercase tracking-[0.2em] text-blush-300">
                    {t.projects.features}
                  </h3>
                  <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                    {project.features.map((f, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.05 * i }}
                        className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/[0.03] p-4"
                      >
                        <span className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-neon-pink/15 text-neon-pink">
                          <Check className="h-3.5 w-3.5" />
                        </span>
                        <span className="text-sm leading-relaxed text-blush-100/90">
                          {f}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </>
              )}

              {/* Meta */}
              <div className="mt-8 grid gap-4 text-sm sm:grid-cols-2">
                <div>
                  <span className="font-bold uppercase tracking-wider text-blush-300 text-xs">
                    {t.projects.role}
                  </span>
                  <p className="mt-1 text-blush-100">{project.role}</p>
                </div>
                <div>
                  <span className="font-bold uppercase tracking-wider text-blush-300 text-xs">
                    {t.projects.stack}
                  </span>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary !px-6 !py-3 !text-sm"
                >
                  <ExternalLink className="h-4 w-4" />
                  {t.projects.demo}
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost !px-6 !py-3 !text-sm"
                >
                  <Github className="h-4 w-4" />
                  {t.projects.code}
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
