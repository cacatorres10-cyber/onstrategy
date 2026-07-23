'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

/* ---------------- Reveal on scroll ---------------- */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

/* ---------------- Section label ---------------- */
export function SectionLabel({
  children,
  dark = false,
}: {
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <div className="flex items-center gap-3">
      <span
        className={cn(
          'h-px w-10',
          dark ? 'bg-paper/40' : 'bg-ink/30'
        )}
      />
      <span
        className={cn(
          'text-xs font-bold uppercase tracking-[0.28em]',
          dark ? 'text-gold' : 'text-ink/60'
        )}
      >
        {children}
      </span>
    </div>
  );
}

/* ---------------- Echo text stack ---------------- */
export function EchoStack({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const layers = [
    { color: '#d9d9d9', dx: '0.16em', dy: '0.16em' },
    { color: '#d1d1d1', dx: '0.12em', dy: '0.12em' },
    { color: '#c9c9c9', dx: '0.08em', dy: '0.08em' },
    { color: '#bfbfbf', dx: '0.04em', dy: '0.04em' },
  ];
  return (
    <span className={cn('relative inline-block', className)}>
      {layers.map((l, i) => (
        <span
          key={i}
          aria-hidden
          className="pointer-events-none absolute inset-0 select-none"
          style={{ color: l.color, transform: `translate(${l.dx}, ${l.dy})` }}
        >
          {text}
        </span>
      ))}
      <span className="relative text-ink">{text}</span>
    </span>
  );
}
