'use client';

import { useLang } from '@/i18n/LanguageContext';

export function Marquee() {
  const { t } = useLang();
  const items = [...t.marquee, ...t.marquee];
  return (
    <div className="border-y border-ink/10 bg-ink py-5 overflow-hidden">
      <div className="flex w-max animate-marquee items-center gap-8 whitespace-nowrap">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-8">
            <span className="font-display text-xl font-semibold uppercase tracking-tight text-paper md:text-2xl">
              {item}
            </span>
            <span className="text-gold">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
