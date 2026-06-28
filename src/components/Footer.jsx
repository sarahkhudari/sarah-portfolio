import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext.jsx';
import { contactInfo } from '../i18n.js';

const socialClass =
  'group relative flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-blush-100 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[linear-gradient(135deg,#ffafcc_0%,#ff8db5_100%)] hover:text-white hover:border-transparent hover:shadow-glow';

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-ink-950/60 backdrop-blur-2xl">
      {/* Top gradient hairline */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon-pink/70 to-transparent" />

      <div className="container-narrow px-6 py-12 lg:px-8">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-display text-2xl font-semibold text-blush-50">
              Sarah Alkhudari<span className="gradient-text">.</span>
            </p>
            <p className="mt-1 text-sm font-medium text-blush-300">
              {t.footer.role}
            </p>
          </motion.div>

          <div className="flex items-center gap-3">
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className={socialClass}
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className={socialClass}
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              aria-label="Email"
              className={socialClass}
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-blush-300 md:flex-row">
          <p>© {year} Sarah Alkhudari. {t.footer.rights}</p>
          <p className="inline-flex items-center gap-1.5">
            {t.footer.madeWith}
            <Heart className="h-3.5 w-3.5 fill-neon-pink text-neon-pink drop-shadow-[0_0_6px_rgba(255,175,204,0.7)]" />
            Flutter & React
          </p>
        </div>
      </div>
    </footer>
  );
}
