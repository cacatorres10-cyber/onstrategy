'use client';

import { motion } from 'framer-motion';
import { Megaphone, LineChart, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { useLang } from '@/i18n/LanguageContext';
import { Reveal, SectionLabel } from '@/components/ui/primitives';

const icons = [Megaphone, LineChart, ShieldCheck];

export function Solutions() {
  const { t } = useLang();
  return (
    <section id="solutions" className="bg-paper px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <SectionLabel>{t.solutions.tag}</SectionLabel>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 font-display text-5xl font-bold uppercase tracking-tightest text-ink md:text-7xl">
                {t.solutions.title}
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-base text-ink/55">{t.solutions.subtitle}</p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {t.solutions.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={item.index} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                  className="group flex h-full flex-col rounded-2xl border border-ink/10 bg-white/40 p-8 transition-colors duration-300 hover:border-ink/20 hover:bg-white"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-ink text-gold transition-transform duration-300 group-hover:rotate-[-12deg] group-hover:bg-gold group-hover:text-ink">
                      <Icon className="h-7 w-7" />
                    </div>
                    <span className="font-display text-6xl font-bold text-ink/10 transition-colors group-hover:text-gold/40">
                      {item.index}
                    </span>
                  </div>

                  <h3 className="mt-8 font-display text-2xl font-semibold leading-tight text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/55">{item.desc}</p>

                  <ul className="mt-6 space-y-3 border-t border-ink/10 pt-6">
                    {item.points.map((p) => (
                      <li key={p} className="flex gap-3 text-sm text-ink/70">
                        <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
