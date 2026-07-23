'use client';

import { motion } from 'framer-motion';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import { useLang } from '@/i18n/LanguageContext';
import { CONTACT } from '@/i18n/content';
import { Reveal, SectionLabel } from '@/components/ui/primitives';
import { cn } from '@/lib/utils';

export function Plans() {
  const { t } = useLang();

  return (
    <section id="plans" className="bg-paper px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <div className="flex justify-center">
              <SectionLabel>{t.plans.tag}</SectionLabel>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-display text-4xl font-bold uppercase tracking-tightest text-ink md:text-6xl">
              {t.plans.title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-base text-ink/55">{t.plans.subtitle}</p>
          </Reveal>
        </div>

        <div className="mt-16 grid items-stretch gap-6 lg:grid-cols-3">
          {t.plans.items.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className={cn(
                  'relative flex h-full flex-col rounded-3xl p-8',
                  plan.featured
                    ? 'bg-ink text-paper shadow-2xl ring-2 ring-gold'
                    : 'border border-ink/12 bg-white/50 text-ink'
                )}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-8 inline-flex items-center gap-1 rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-wide text-ink">
                    <Sparkles className="h-3 w-3" /> Top
                  </span>
                )}
                <h3 className="font-display text-2xl font-bold uppercase tracking-tight">
                  {plan.name}
                </h3>
                <p
                  className={cn(
                    'mt-1 text-sm',
                    plan.featured ? 'text-paper/60' : 'text-ink/50'
                  )}
                >
                  {plan.tagline}
                </p>

                <div className="mt-6 flex items-end gap-2">
                  <span
                    className={cn(
                      'text-xs font-semibold uppercase',
                      plan.featured ? 'text-gold' : 'text-ink/40'
                    )}
                  >
                    {t.plans.from}
                  </span>
                  <span className="font-display text-5xl font-bold leading-none">
                    {plan.price}
                  </span>
                </div>

                <ul className="mt-8 flex-1 space-y-3.5 border-t border-current/10 pt-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex gap-3 text-sm">
                      <Check
                        className={cn(
                          'mt-0.5 h-4 w-4 shrink-0',
                          plan.featured ? 'text-gold' : 'text-gold-dark'
                        )}
                      />
                      <span className={plan.featured ? 'text-paper/80' : 'text-ink/70'}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={cn(
                    'group mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold uppercase tracking-wide transition-all duration-200',
                    plan.featured
                      ? 'bg-gold text-ink hover:bg-paper'
                      : 'bg-ink text-paper hover:bg-gold hover:text-ink'
                  )}
                >
                  {t.nav.cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* Diagnostic */}
        <Reveal delay={0.1}>
          <div className="mt-8 overflow-hidden rounded-3xl border border-ink/12 bg-white/60">
            <div className="grid gap-8 p-8 md:grid-cols-[1.2fr_1fr] md:p-12">
              <div>
                <SectionLabel>{t.plans.diagnosticTag}</SectionLabel>
                <h3 className="mt-4 font-display text-3xl font-bold uppercase tracking-tight text-ink md:text-4xl">
                  {t.plans.diagnosticTitle}
                </h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-ink/60">
                  {t.plans.diagnosticBody}
                </p>
                <a
                  href={`${CONTACT.whatsapp}?text=${encodeURIComponent(
                    t.plans.diagnosticCta
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-paper transition-all hover:bg-gold hover:text-ink"
                >
                  {t.plans.diagnosticCta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 md:border-l md:border-ink/10 md:pl-10">
                <div>
                  <span className="font-display text-5xl font-bold text-gold-dark">01</span>
                  <ul className="mt-4 space-y-2">
                    {t.plans.diagnosticProfiles.map((p) => (
                      <li key={p} className="text-sm text-ink/70">
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <span className="font-display text-5xl font-bold text-gold-dark">02</span>
                  <ul className="mt-4 space-y-2">
                    {t.plans.diagnosticCategories.map((p) => (
                      <li key={p} className="text-sm text-ink/70">
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
