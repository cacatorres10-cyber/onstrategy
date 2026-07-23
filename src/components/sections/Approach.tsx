'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLang } from '@/i18n/LanguageContext';
import { Reveal, SectionLabel } from '@/components/ui/primitives';

export function Approach() {
  const { t } = useLang();
  return (
    <section id="approach" className="bg-paper px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <Reveal>
            <SectionLabel>{t.approach.tag}</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-display text-4xl font-bold uppercase tracking-tightest text-ink md:text-6xl">
              {t.approach.title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-base text-ink/55">{t.approach.subtitle}</p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {t.approach.cards.map((card, i) => (
            <Reveal key={card.region} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-ink p-8 text-paper"
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gold/10 blur-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-0" />
                <div className="relative">
                  <span className="inline-block rounded-full border border-gold/40 px-4 py-1.5 font-display text-sm font-bold tracking-wide text-gold">
                    {card.region}
                  </span>
                  <h3 className="mt-8 font-display text-2xl font-semibold text-paper">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-paper/60">{card.desc}</p>
                </div>
                <ArrowRight className="relative mt-10 h-6 w-6 text-gold transition-transform duration-300 group-hover:translate-x-2" />
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-14 text-center font-display text-2xl font-semibold uppercase tracking-tight text-ink/80 md:text-4xl">
            {t.approach.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
