import { Languages } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext.jsx';

export function LanguageSwitcher({ compact = false }) {
  const { lang, toggle, t } = useLanguage();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggle}
      aria-label="Toggle language"
      className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-blush-100 backdrop-blur-xl transition-all duration-300 hover:border-neon-pink/50 hover:bg-white/10 hover:text-white hover:shadow-glow-soft"
    >
      <span className="sheen-overlay absolute inset-0 -translate-x-[120%] opacity-0 transition-opacity duration-300 group-hover:animate-sheen group-hover:opacity-100" />
      <Languages className="relative h-3.5 w-3.5 text-blush-300 transition group-hover:rotate-12 group-hover:text-neon-pink" />
      {!compact && <span className="relative">{t.language.toggle}</span>}
      <span className="relative rounded-full bg-[linear-gradient(135deg,#ffafcc_0%,#ff8db5_100%)] px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white shadow-[0_0_12px_rgba(255,175,204,0.55)]">
        {lang === 'en' ? 'EN' : 'ع'}
      </span>
    </motion.button>
  );
}
