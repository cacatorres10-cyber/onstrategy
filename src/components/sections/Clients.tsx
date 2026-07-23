'use client';

import { motion } from 'framer-motion';
import { useLang } from '@/i18n/LanguageContext';
import { Reveal, SectionLabel } from '@/components/ui/primitives';
import { ThreeDPhotoCarousel } from '@/components/ui/3d-carousel';

// Pexels stock, curated per industry (verified contextual matches).
const px = (id: number, w = 800) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

function industryCards(labels: string[]) {
  const imgs = [
    px(2886937), // agroindustria — greenhouse crops
    px(1108101), // automatización industrial — worker + machinery
    px(264636), // retailers — supermarket
    px(4483610), // distribuidores — logistics warehouse
    px(262978), // foodservice — restaurant service
    px(2933243), // agroindustria — open field
    px(3985062), // retailers — store aisle
    px(3862132), // automatización industrial — factory floor
  ];
  return imgs.map((img, i) => ({ img, label: labels[i] }));
}

export function Clients() {
  const { t } = useLang();

  const carouselLabels = [
    t.clients.industries[0],
    t.clients.industries[1],
    t.clients.industries[2],
    t.clients.industries[3],
    t.clients.industries[4],
    t.clients.industries[0],
    t.clients.industries[2],
    t.clients.industries[1],
  ];

  const logos = [...t.clients.logos, ...t.clients.logos];

  return (
    <section id="clients" className="overflow-hidden bg-smoke px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <Reveal>
            <SectionLabel>{t.clients.tag}</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-display text-4xl font-bold uppercase tracking-tightest text-ink md:text-6xl">
              {t.clients.title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-base text-ink/55">{t.clients.subtitle}</p>
          </Reveal>
        </div>

        {/* Logos marquee */}
        <Reveal delay={0.1}>
          <div className="relative mt-12 overflow-hidden border-y border-ink/10 py-8">
            <div className="flex w-max animate-marquee items-center gap-12">
              {logos.map((logo, i) => (
                <span
                  key={i}
                  className="font-display text-xl font-bold uppercase tracking-tight text-ink/40 transition-colors hover:text-ink md:text-2xl"
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* 3D carousel */}
        <Reveal delay={0.1}>
          <div className="mt-16">
            <ThreeDPhotoCarousel cards={industryCards(carouselLabels)} />
            <p className="mt-4 text-center text-xs uppercase tracking-[0.2em] text-ink/40">
              {t.clients.industriesTitle}
            </p>
          </div>
        </Reveal>

        {/* Industries tags */}
        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {t.clients.industries.map((ind) => (
              <span
                key={ind}
                className="rounded-full border border-ink/20 bg-white/50 px-5 py-2 text-sm font-semibold text-ink"
              >
                {ind}
              </span>
            ))}
          </div>
        </Reveal>

        {/* B2B split */}
        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {[
            { pct: t.clients.split.b2b, label: t.clients.split.b2bLabel, dark: true },
            { pct: t.clients.split.entre, label: t.clients.split.entreLabel, dark: false },
          ].map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`flex items-center gap-6 rounded-2xl p-8 ${
                  s.dark ? 'bg-ink text-paper' : 'border border-ink/15 bg-white/50 text-ink'
                }`}
              >
                <span
                  className={`font-display text-6xl font-bold md:text-7xl ${
                    s.dark ? 'text-gold' : 'text-ink'
                  }`}
                >
                  {s.pct}
                </span>
                <span className={`text-sm ${s.dark ? 'text-paper/70' : 'text-ink/60'}`}>
                  {s.label}
                </span>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
