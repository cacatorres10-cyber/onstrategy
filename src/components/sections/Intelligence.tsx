'use client';

import { motion } from 'framer-motion';
import { useLang } from '@/i18n/LanguageContext';
import { Reveal, SectionLabel } from '@/components/ui/primitives';

export function Intelligence() {
  const { t } = useLang();
  return (
    <section className="bg-ink px-5 py-24 text-paper md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <Reveal>
            <SectionLabel dark>{t.intelligence.tag}</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-display text-4xl font-bold uppercase tracking-tightest text-paper md:text-6xl">
              {t.intelligence.title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-base text-paper/55">{t.intelligence.subtitle}</p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {t.intelligence.pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.12}>
              <div className="border-t border-paper/15 pt-6">
                <div className="flex items-end gap-2">
                  <span className="font-display text-6xl font-bold text-gold md:text-7xl">
                    {pillar.pct}
                  </span>
                </div>
                <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-paper/10">
                  <motion.div
                    className="h-full rounded-full bg-gold"
                    initial={{ width: 0 }}
                    whileInView={{ width: pillar.pct }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                  />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold text-paper">
                  {pillar.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {pillar.points.map((p) => (
                    <li key={p} className="flex gap-2.5 text-sm text-paper/60">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
