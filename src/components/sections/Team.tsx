'use client';

import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { useLang } from '@/i18n/LanguageContext';
import { Reveal, SectionLabel } from '@/components/ui/primitives';

export function Team() {
  const { t } = useLang();
  return (
    <section id="team" className="bg-ink px-5 py-24 text-paper md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <div className="flex justify-center">
              <SectionLabel dark>{t.team.tag}</SectionLabel>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-display text-4xl font-bold uppercase tracking-tightest text-paper md:text-6xl">
              {t.team.title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-base text-paper/55">{t.team.subtitle}</p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {t.team.members.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className="group h-full rounded-2xl border border-paper/12 bg-paper/[0.04] p-8 transition-colors hover:border-gold/40"
              >
                <div className="flex items-center gap-2 text-gold">
                  <MapPin className="h-4 w-4" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em]">
                    {m.region}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold text-paper">
                  {m.name}
                </h3>
                <p className="mt-2 text-sm text-paper/55">{m.role}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
