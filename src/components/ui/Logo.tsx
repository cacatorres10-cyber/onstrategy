import { cn } from '@/lib/utils';

/**
 * Recreation of the ON STRATEGY PRO wordmark: a gold pentagon "tag" holding a
 * power-button "O" + "N", followed by the STRATEGY wordmark.
 */
export function Logo({
  className,
  variant = 'dark',
}: {
  className?: string;
  variant?: 'dark' | 'light';
}) {
  const wordColor = variant === 'light' ? '#F3F3F1' : '#1B1B1B';
  return (
    <span className={cn('inline-flex items-center gap-2 select-none', className)}>
      <svg
        viewBox="0 0 118 56"
        className="h-7 w-auto"
        role="img"
        aria-label="ON STRATEGY PRO"
      >
        {/* gold tag */}
        <path d="M2 8 H86 L108 28 L86 48 H2 Z" fill="#F4C430" />
        {/* power O */}
        <g
          fill="none"
          stroke="#1B1B1B"
          strokeWidth="4.4"
          strokeLinecap="round"
        >
          <path d="M24 20 A13 13 0 1 0 34 20" />
          <line x1="29" y1="13" x2="29" y2="30" />
        </g>
        {/* N */}
        <text
          x="46"
          y="37"
          fontFamily="Clash Display, sans-serif"
          fontWeight="700"
          fontSize="26"
          fill="#1B1B1B"
        >
          N
        </text>
      </svg>
      <span
        className="font-display text-lg font-bold tracking-tight"
        style={{ color: wordColor }}
      >
        STRATEGY
        <span className="ml-1 align-top text-[0.6em] font-semibold tracking-[0.15em] text-gold-dark">
          PRO
        </span>
      </span>
    </span>
  );
}
