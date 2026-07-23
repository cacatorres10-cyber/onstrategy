'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLang } from '@/i18n/LanguageContext';
import { EchoStack } from '@/components/ui/primitives';

function useTypewriter(words: string[]) {
  const [display, setDisplay] = useState('');
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = words[index % words.length];
    const speed = deleting ? 45 : 95;

    if (!deleting && display === full) {
      const pause = setTimeout(() => setDeleting(true), 1600);
      return () => clearTimeout(pause);
    }
    if (deleting && display === '') {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }
    const timer = setTimeout(() => {
      setDisplay((prev) =>
        deleting ? full.substring(0, prev.length - 1) : full.substring(0, prev.length + 1)
      );
    }, speed);
    return () => clearTimeout(timer);
  }, [display, deleting, index, words]);

  return display;
}

export function Hero() {
  const { t } = useLang();
  const typed = useTypewriter(t.hero.rotating);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-5 pt-28 pb-16 md:px-8"
    >
      {/* subtle gold glow */}
      <div className="pointer-events-none absolute -right-40 top-20 h-[520px] w-[520px] rounded-full bg-gold/20 blur-[140px]" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-[360px] w-[360px] rounded-full bg-ink/5 blur-[120px]" />

      <div className="mx-auto w-full max-w-7xl">
        {/* Region kicker */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex flex-wrap items-center gap-3"
        >
          {t.hero.kicker.split(' · ').map((r) => (
            <span
              key={r}
              className="rounded-full border border-ink/15 bg-ink/[0.03] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-ink"
            >
              {r}
            </span>
          ))}
        </motion.div>

        {/* Headline with echo stack */}
        <h1 className="font-display font-bold uppercase leading-[0.86] tracking-tightest text-ink">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="block text-[17vw] md:text-[13vw] lg:text-[11vw]"
          >
            <EchoStack text={t.hero.line1} />
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative block w-fit text-[17vw] text-ink md:text-[13vw] lg:text-[11vw]"
          >
            <motion.span
              className="absolute inset-x-[-0.06em] bottom-[0.1em] -z-10 h-[0.4em] origin-left bg-gold"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            />
            {t.hero.line2}
          </motion.span>
        </h1>

        {/* Typewriter line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-4 flex items-baseline gap-3"
        >
          <span className="font-display text-3xl font-semibold text-ink/80 md:text-5xl">
            {typed}
            <span className="ml-0.5 inline-block animate-pulse text-gold-dark">|</span>
          </span>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-8 max-w-2xl text-base leading-relaxed text-ink/60 md:text-lg"
        >
          {t.hero.subtitle}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 text-sm font-bold uppercase tracking-wide text-paper transition-all duration-200 hover:bg-gold hover:text-ink"
          >
            {t.hero.primary}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#solutions"
            className="inline-flex items-center gap-2 rounded-full border border-ink/25 px-7 py-4 text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:border-ink"
          >
            {t.hero.secondary}
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-ink/10 pt-8"
        >
          {t.hero.stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-4xl font-bold text-ink md:text-5xl">
                {s.value}
              </div>
              <div className="mt-1 text-xs uppercase tracking-wide text-ink/50">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
