import { motion } from 'framer-motion';
import { ArrowRight, Mail, Sparkles, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.jsx';
import { Button } from './ui/Button.jsx';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function Hero() {
  const { t, isRTL } = useLanguage();
  const ArrowIcon = ArrowRight;

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28"
    >
      {/* Decorative neon mesh */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-hero-gradient" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-40" />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.45, 0.65, 0.45] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -top-24 -right-16 h-80 w-80 rounded-full bg-neon-pink/40 blur-[100px]"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="pointer-events-none absolute top-40 -left-24 h-96 w-96 rounded-full bg-neon-violet/30 blur-[110px]"
      />

      <div className="container-narrow px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <motion.span
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0}
              className="section-eyebrow"
            >
              <Heart className="h-3 w-3 fill-neon-pink text-neon-pink" />
              {t.hero.badge}
            </motion.span>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={1}
              className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-blush-50 sm:text-6xl lg:text-7xl"
            >
              <span className="block text-blush-200/80 text-lg font-sans font-normal tracking-wide">
                {t.hero.greeting}
              </span>
              <span className="gradient-text text-glow">{t.hero.name}</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={2}
              className="mt-4 text-lg font-semibold text-blush-100 sm:text-xl"
            >
              {t.hero.role}
            </motion.p>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={3}
              className="mt-6 max-w-xl text-base leading-relaxed text-blush-200/75 sm:text-lg"
            >
              {t.hero.tagline}
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={4}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Button asChild href="#projects" size="lg">
                {t.hero.ctaProjects}
                <ArrowIcon
                  className={`h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 ${
                    isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''
                  }`}
                />
              </Button>
              <Button asChild href="#contact" variant="ghost" size="lg">
                <Mail className="h-4 w-4" />
                {t.hero.ctaContact}
              </Button>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={5}
              className="mt-14 grid max-w-lg grid-cols-3 gap-4"
            >
              {t.hero.stats.map((s) => (
                <motion.div
                  key={s.label}
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ duration: 0.25 }}
                  className="glass-card flex flex-col items-center p-4 text-center transition-all duration-500 hover:shadow-glow"
                >
                  <span className="font-display text-2xl font-semibold gradient-text">
                    {s.value}
                  </span>
                  <span className="mt-1 text-[11px] font-semibold uppercase tracking-widest text-blush-300">
                    {s.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Portrait / decorative card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="relative mx-auto aspect-[4/5] w-full max-w-md"
          >
            {/* Outer pulsing neon glow */}
            <div className="absolute inset-0 rounded-[2.5rem] bg-[linear-gradient(135deg,#ffd1dc_0%,#ffafcc_50%,#ff8db5_100%)] blur-3xl opacity-50 animate-pulse-glow" />
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-neon-pink/20 via-neon-hot/15 to-neon-violet/20 blur-2xl opacity-80" />

            <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.04] shadow-card backdrop-blur-2xl">
              {/* Subtle inner gradient ring */}
              <div className="pointer-events-none absolute inset-0 rounded-[2.5rem] [mask:linear-gradient(#000,transparent)] opacity-70">
                <div className="h-full w-full rounded-[2.5rem] border border-white/10" />
              </div>

              <div className="relative h-full w-full bg-gradient-to-br from-ink-950 via-blush-900/40 to-neon-violet/15">
                <img
                  src="/images/sarah.jpg"
                  alt={t.hero.name}
                  className="h-full w-full object-cover [object-position:50%_18%]"
                  loading="eager"
                  decoding="async"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/40 via-transparent to-transparent" />

                {/* Floating chips */}
                <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  whileHover={{ y: -2, scale: 1.04 }}
                  className="absolute top-6 left-6 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-blush-100 shadow-glow-soft backdrop-blur-xl"
                >
                  <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />
                  Flutter · React
                </motion.div>
                <motion.div
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  whileHover={{ y: -2, scale: 1.04 }}
                  className="absolute bottom-6 right-6 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-blush-100 shadow-glow-soft backdrop-blur-xl"
                >
                  <Sparkles className="h-3.5 w-3.5 text-neon-pink" />
                  UI / UX
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
