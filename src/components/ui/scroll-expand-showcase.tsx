'use client';

import { useRef, ReactNode } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface ScrollExpandShowcaseProps {
  mediaSrc: string;
  bgImageSrc: string;
  title: string;
  subtitle?: string;
  scrollHint?: string;
  children?: ReactNode;
}

/**
 * A scroll-linked media expansion, inspired by the ScrollExpandMedia component
 * but driven by a scoped useScroll (no global wheel hijacking), so it composes
 * safely with the rest of the page.
 */
export default function ScrollExpandShowcase({
  mediaSrc,
  bgImageSrc,
  title,
  subtitle,
  scrollHint,
  children,
}: ScrollExpandShowcaseProps) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const progress: MotionValue<number> = scrollYProgress;

  const width = useTransform(progress, [0, 0.6], ['42vw', '100vw']);
  const height = useTransform(progress, [0, 0.6], ['52vh', '100vh']);
  const radius = useTransform(progress, [0, 0.6], ['28px', '0px']);
  const bgOpacity = useTransform(progress, [0, 0.5], [1, 0]);
  const overlayOpacity = useTransform(progress, [0, 0.6], [0.35, 0.62]);
  const spreadLeft = useTransform(progress, [0, 0.6], ['0vw', '-18vw']);
  const spreadRight = useTransform(progress, [0, 0.6], ['0vw', '18vw']);
  const contentOpacity = useTransform(progress, [0.55, 0.85], [0, 1]);
  const contentY = useTransform(progress, [0.55, 0.85], [40, 0]);

  const words = title.split(' ');
  const firstWord = words[0];
  const rest = words.slice(1).join(' ');

  return (
    <div ref={sectionRef} className="relative h-[260vh]">
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden bg-ink">
        {/* Background layer */}
        <motion.div className="absolute inset-0 z-0" style={{ opacity: bgOpacity }}>
          <img
            src={bgImageSrc}
            alt=""
            className="h-full w-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-ink/40" />
        </motion.div>

        {/* Expanding media */}
        <motion.div
          className="relative z-10 overflow-hidden shadow-2xl"
          style={{
            width,
            height,
            borderRadius: radius,
            maxWidth: '100vw',
            maxHeight: '100vh',
          }}
        >
          <img
            src={mediaSrc}
            alt={title}
            className="h-full w-full object-cover"
          />
          <motion.div
            className="absolute inset-0 bg-ink"
            style={{ opacity: overlayOpacity }}
          />
        </motion.div>

        {/* Title split, spreading apart as it expands */}
        <div className="pointer-events-none absolute inset-0 z-20 flex flex-col items-center justify-center text-center mix-blend-difference">
          <div className="flex flex-wrap items-center justify-center gap-x-6 px-4">
            <motion.h2
              className="font-display text-[13vw] font-bold uppercase leading-none tracking-tightest text-paper md:text-[9vw]"
              style={{ x: spreadLeft }}
            >
              {firstWord}
            </motion.h2>
            <motion.h2
              className="font-display text-[13vw] font-bold uppercase leading-none tracking-tightest text-paper md:text-[9vw]"
              style={{ x: spreadRight }}
            >
              {rest}
            </motion.h2>
          </div>
          {scrollHint && (
            <motion.p
              className="mt-6 text-xs uppercase tracking-[0.3em] text-paper/70"
              style={{ opacity: bgOpacity }}
            >
              {scrollHint}
            </motion.p>
          )}
        </div>

        {/* Revealed content */}
        <motion.div
          className="absolute inset-x-0 bottom-0 z-30 px-6 pb-16 md:pb-24"
          style={{ opacity: contentOpacity, y: contentY }}
        >
          <div className="mx-auto max-w-4xl text-center">
            {subtitle && (
              <p className="font-display text-2xl font-semibold text-paper md:text-4xl">
                {subtitle}
              </p>
            )}
            {children}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
