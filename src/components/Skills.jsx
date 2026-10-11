import { motion } from 'framer-motion';
import {
  Smartphone,
  Code2,
  Atom,
  Braces,
  LayoutGrid,
  Plug,
  GitBranch,
  Sparkles,
  Palette,
  Database,
  Layers,
  Workflow,
  ClipboardList,
  Wrench,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.jsx';
import { Card } from './ui/Card.jsx';

const iconMap = {
  Smartphone,
  Code2,
  Atom,
  Braces,
  LayoutGrid,
  Plug,
  GitBranch,
  Palette,
  Database,
  Layers,
  Workflow,
  ClipboardList,
  Wrench,
};

export function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="section-padding relative">
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 h-64 -translate-y-1/2 bg-gradient-to-r from-neon-pink/15 via-neon-hot/10 to-neon-violet/15 blur-3xl" />
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="section-eyebrow">
            <Sparkles className="h-3 w-3 text-neon-pink" />
            {t.skills.eyebrow}
          </span>
          <h2 className="section-title mt-5">
            <span className="gradient-text">{t.skills.title}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-blush-200/80">
            {t.skills.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.07 } },
          }}
          className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
        >
          {t.skills.items.map((skill) => {
            const Icon = iconMap[skill.icon] ?? Sparkles;
            return (
              <motion.div
                key={skill.name}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                whileHover={{ y: -8, scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 280, damping: 18 }}
              >
                <Card className="group relative flex h-full flex-col items-center gap-3 overflow-hidden p-6 text-center transition-all duration-500 hover:shadow-glow">
                  {/* Glow sweep on hover */}
                  <div className="pointer-events-none absolute inset-x-0 -top-16 h-32 translate-y-full rounded-full bg-[radial-gradient(circle,rgba(255,175,204,0.55)_0%,transparent_70%)] blur-2xl transition-transform duration-700 group-hover:translate-y-0" />
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-neon-pink/15 to-neon-hot/15 text-blush-100 shadow-sm transition duration-500 group-hover:bg-[linear-gradient(135deg,#ffafcc_0%,#ff8db5_100%)] group-hover:text-white group-hover:shadow-[0_0_24px_rgba(255,175,204,0.7)]">
                    <Icon className="h-6 w-6 transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <div className="relative">
                    <p className="font-display text-base font-semibold text-blush-50">
                      {skill.name}
                    </p>
                    <p className="mt-1 text-[11px] font-semibold uppercase tracking-widest text-blush-300 transition-colors duration-500 group-hover:text-neon-pink">
                      {skill.level}
                    </p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
