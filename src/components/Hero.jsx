import { motion } from 'framer-motion';
import { ArrowRight, Mail, Heart } from 'lucide-react';
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
      className="relative overflow-hidden pt-24 pb-20 lg:pt-40 lg:pb-28"
    >
      {/* Decorative neon mesh */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-hero-gradient" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-40" />
      <div
        className="pointer-events-none absolute -top-24 -right-16 h-80 w-80 rounded-full bg-neon-pink/40 blur-[100px]"
      />

      <div
        className="pointer-events-none absolute top-40 -left-24 h-96 w-96 rounded-full bg-neon-violet/30 blur-[110px]"
      />

      <div className="container-narrow px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
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
              className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-blush-200/75 sm:text-lg"
            >
              {t.hero.tagline}
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={4}
              className="mt-10 flex flex-wrap items-center justify-center gap-4"
            >
              <Button asChild href="#projects" size="lg">
                {t.hero.ctaProjects}
                <ArrowIcon
                  className={`h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''
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
              className="mx-auto mt-14 grid max-w-lg grid-cols-3 gap-4"
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


        </div>
      </div>
    </section>
  );
}
