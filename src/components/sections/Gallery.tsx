'use client';

import { useLang } from '@/i18n/LanguageContext';
import { Reveal, SectionLabel } from '@/components/ui/primitives';

const px = (id: number, w = 900) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export function Gallery() {
  const { t } = useLang();
  const ind = t.clients.industries;

  const tiles = [
    { id: 373912, label: 'Global', span: 'md:col-span-2 md:row-span-2' },
    { id: 1470405, label: 'Dubái · EAU', span: 'md:col-span-1 md:row-span-2' },
    { id: 259280, label: ind[0], span: 'md:col-span-1 md:row-span-1' },
    { id: 3184291, label: 'B2B', span: 'md:col-span-1 md:row-span-1' },
    { id: 264636, label: ind[2], span: 'md:col-span-2 md:row-span-1' },
    { id: 906494, label: ind[3], span: 'md:col-span-2 md:row-span-1' },
  ];

  return (
    <section className="bg-paper px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <Reveal>
            <SectionLabel>{t.gallery.tag}</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-display text-4xl font-bold uppercase tracking-tightest text-ink md:text-6xl">
              {t.gallery.title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-base text-ink/55">{t.gallery.subtitle}</p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12 grid auto-rows-[200px] grid-cols-2 gap-4 md:grid-cols-4">
            {tiles.map((tile) => (
              <figure
                key={tile.id}
                className={`group relative overflow-hidden rounded-2xl ${tile.span}`}
              >
                <img
                  src={px(tile.id)}
                  alt={tile.label}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />
                <figcaption className="absolute bottom-0 left-0 flex items-center gap-2 p-4">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  <span className="font-display text-sm font-semibold uppercase tracking-wide text-paper">
                    {tile.label}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
