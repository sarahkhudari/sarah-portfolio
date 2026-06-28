import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Send,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.jsx';
import { contactInfo } from '../i18n.js';
import { Card } from './ui/Card.jsx';
import { Input, Textarea } from './ui/Input.jsx';
import { Button } from './ui/Button.jsx';

export function Contact() {
  const { t } = useLanguage();
  const [sent, setSent] = useState(false);

  const infoItems = [
    {
      icon: Mail,
      label: t.contact.email,
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
    },
    {
      icon: Phone,
      label: t.contact.phone,
      value: contactInfo.phone,
      href: `tel:${contactInfo.phone.replace(/\s/g, '')}`,
    },
    {
      icon: MapPin,
      label: t.contact.location,
      value: contactInfo.location,
      href: '#',
    },
    {
      icon: Linkedin,
      label: t.contact.linkedin,
      value: contactInfo.linkedin.replace(/^https?:\/\/(www\.)?/, ''),
      href: contactInfo.linkedin,
    },
    {
      icon: Github,
      label: t.contact.github,
      value: contactInfo.github.replace(/^https?:\/\/(www\.)?/, ''),
      href: contactInfo.github,
    },
  ];

  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: hook up to your email service (Formspree, EmailJS, API, etc.)
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 h-80 w-80 rounded-full bg-neon-pink/25 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-neon-violet/25 blur-[100px]" />
      </div>

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
            {t.contact.eyebrow}
          </span>
          <h2 className="section-title mt-5">
            <span className="gradient-text">{t.contact.title}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-blush-200/80">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="mt-14 grid items-start gap-8 lg:grid-cols-[1fr_1.2fr]">
          {/* Contact info cards */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.07 } },
            }}
            className="space-y-4"
          >
            {infoItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                variants={{
                  hidden: { opacity: 0, x: -16 },
                  show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                }}
                whileHover={{ y: -4, x: 4 }}
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-2xl transition-all duration-500 hover:bg-white/[0.07] hover:border-neon-pink/40 hover:shadow-glow"
              >
                <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-gradient-to-br from-neon-pink/15 to-neon-hot/15 text-blush-100 shadow-sm transition duration-500 group-hover:bg-[linear-gradient(135deg,#ffafcc_0%,#ff8db5_100%)] group-hover:text-white group-hover:shadow-[0_0_20px_rgba(255,175,204,0.7)]">
                  <item.icon className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-blush-300 transition-colors duration-300 group-hover:text-neon-pink">
                    {item.label}
                  </p>
                  <p className="truncate text-sm font-semibold text-blush-50">
                    {item.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Card className="p-8">
              <form onSubmit={onSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-blush-300">
                      {t.contact.form.name}
                    </label>
                    <Input required type="text" name="name" placeholder="Sarah" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-blush-300">
                      {t.contact.form.email}
                    </label>
                    <Input
                      required
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-blush-300">
                    {t.contact.form.message}
                  </label>
                  <Textarea
                    required
                    name="message"
                    placeholder="Tell me a little about your project or opportunity…"
                  />
                </div>

                <div className="flex items-center justify-between gap-4">
                  <Button type="submit" size="lg">
                    <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    {t.contact.form.send}
                  </Button>
                  {sent && (
                    <motion.span
                      initial={{ opacity: 0, y: 6, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1.5 text-sm font-semibold text-emerald-300 shadow-[0_0_18px_rgba(52,211,153,0.35)] backdrop-blur"
                    >
                      <CheckCircle2 className="h-4 w-4" />
                      {t.contact.form.success}
                    </motion.span>
                  )}
                </div>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
