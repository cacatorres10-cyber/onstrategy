'use client';

import { useLang } from '@/i18n/LanguageContext';
import { FlagES, FlagEN } from '@/components/ui/Flags';
import { Lang } from '@/i18n/content';
import { cn } from '@/lib/utils';

const options: { code: Lang; label: string; Flag: typeof FlagES }[] = [
  { code: 'es', label: 'Español', Flag: FlagES },
  { code: 'en', label: 'English', Flag: FlagEN },
];

export function FlagToggle({
  dark = false,
  size = 'sm',
}: {
  dark?: boolean;
  size?: 'sm' | 'md';
}) {
  const { lang, setLang } = useLang();
  const flagW = size === 'md' ? 'h-[18px] w-[26px]' : 'h-[15px] w-[22px]';

  return (
    <div
      className={cn(
        'flex items-center gap-1 rounded-full border p-1 transition-colors',
        dark ? 'border-paper/30 bg-ink/20 backdrop-blur-sm' : 'border-ink/15 bg-white/40'
      )}
      role="group"
      aria-label="Language / Idioma"
    >
      {options.map(({ code, label, Flag }) => {
        const active = lang === code;
        return (
          <button
            key={code}
            onClick={() => setLang(code)}
            aria-label={label}
            aria-pressed={active}
            title={label}
            className={cn(
              'relative overflow-hidden rounded-full transition-all duration-200',
              flagW,
              active
                ? 'shadow-[0_0_0_2px_#F4C430] scale-105'
                : 'opacity-45 grayscale hover:opacity-90 hover:grayscale-0'
            )}
          >
            <Flag />
          </button>
        );
      })}
    </div>
  );
}
