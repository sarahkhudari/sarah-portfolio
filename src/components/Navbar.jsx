import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.jsx';
import { LanguageSwitcher } from './LanguageSwitcher.jsx';
import { ThemeSwitcher } from './ThemeSwitcher.jsx';
import { cn } from '../lib/utils.js';

export function Navbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#home', label: t.nav.home },
    { href: '#about', label: t.nav.about },
    { href: '#skills', label: t.nav.skills },
    { href: '#projects', label: t.nav.projects },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'backdrop-blur-2xl bg-ink-950/70 border-b border-white/10 shadow-[0_8px_30px_-14px_rgba(255,175,204,0.45)]'
          : 'bg-transparent'
      )}
    >
      <nav className="container-narrow flex items-center justify-between px-6 py-4 lg:px-8">
        <motion.a
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          href="#home"
          className="group flex items-center gap-2.5 font-display text-lg font-semibold tracking-tight text-blush-50"
        >
          <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-[linear-gradient(135deg,#ffafcc_0%,#ff8db5_50%,#f48fb1_100%)] text-white shadow-glow transition-transform duration-500 group-hover:rotate-[18deg]">
            <Sparkles className="h-4 w-4" />
            <span className="absolute inset-0 rounded-full bg-neon-pink/40 blur-md opacity-60 transition-opacity duration-300 group-hover:opacity-100" />
          </span>
          Sarah&nbsp;Alkhudari<span className="gradient-text">.</span>
        </motion.a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative text-sm font-medium text-blush-200 transition hover:text-white"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 rounded-full bg-gradient-to-r from-neon-pink to-neon-hot shadow-[0_0_12px_rgba(255,175,204,0.7)] transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <ThemeSwitcher />
          <LanguageSwitcher />
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden rounded-full border border-white/15 bg-white/5 p-2 text-blush-100 shadow-sm backdrop-blur transition hover:shadow-glow-soft hover:border-neon-pink/40"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden border-t border-white/10 bg-ink-950/80 backdrop-blur-2xl"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {links.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-sm font-medium text-blush-200 transition hover:bg-white/5 hover:text-white hover:shadow-[0_0_18px_-6px_rgba(255,175,204,0.65)]"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
