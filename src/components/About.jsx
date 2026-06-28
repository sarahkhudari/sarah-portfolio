import { motion } from 'framer-motion';
import { CheckCircle2, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.jsx';

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section-padding relative">
      <div className="pointer-events-none absolute inset-x-0 top-1/3 -z-10 h-72 bg-gradient-to-r from-neon-pink/15 via-neon-hot/10 to-neon-violet/15 blur-3xl" />
      <div className="container-narrow">
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-eyebrow">
              <Sparkles className="h-3 w-3 text-neon-pink" />
              {t.about.eyebrow}
            </span>
            <h2 className="section-title mt-5">
              <span className="gradient-text">{t.about.title}</span>
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-blush-200/85">
              {t.about.body.map((p, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                >
                  {p}
                </motion.p>
              ))}
            </div>
          </motion.div>

          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.1 } },
            }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {t.about.highlights.map((item) => (
              <motion.li
                key={item}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="glass-card group flex items-start gap-3 p-5 transition-all duration-500 hover:shadow-glow"
              >
                <span className="mt-0.5 flex h-9 w-9 flex-none items-center justify-center rounded-full bg-gradient-to-br from-neon-pink/15 to-neon-hot/15 text-blush-200 shadow-sm transition duration-500 group-hover:bg-[linear-gradient(135deg,#ffafcc_0%,#ff8db5_100%)] group-hover:text-white group-hover:shadow-[0_0_18px_rgba(255,175,204,0.7)]">
                  <CheckCircle2 className="h-4 w-4" />
                </span>
                <span className="text-sm font-medium leading-relaxed text-blush-100">
                  {item}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
