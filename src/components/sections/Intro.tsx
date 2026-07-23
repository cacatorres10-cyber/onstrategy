'use client';

import { useLang } from '@/i18n/LanguageContext';
import { Reveal, SectionLabel } from '@/components/ui/primitives';

export function Intro() {
  const { t } = useLang();
  return (
    <section className="mx-auto max-w-5xl px-5 py-24 md:px-8 md:py-36">
      <Reveal>
        <div className="mx-auto mb-10 h-14 w-px bg-ink/15" />
      </Reveal>
      <Reveal>
        <div className="mx-auto mb-10 w-fit">
          <SectionLabel>{t.intro.tag}</SectionLabel>
        </div>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="text-center font-display text-3xl font-semibold leading-tight tracking-tight text-ink md:text-5xl md:leading-[1.1]">
          {t.intro.lead}
          <span className="italic text-gold-dark" style={{ fontFamily: 'Georgia, serif' }}>
            {t.intro.keyword}
          </span>
          {t.intro.leadRest}
        </p>
      </Reveal>
      <Reveal delay={0.2}>
        <p className="mx-auto mt-10 max-w-2xl text-center text-base leading-relaxed text-ink/55 md:text-lg">
          {t.intro.body}
        </p>
      </Reveal>
    </section>
  );
}
