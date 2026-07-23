import { cn } from '@/lib/utils';

/** Small SVG flags (emoji flags don't render on Windows, so we draw them). */

export function FlagES({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 3 2"
      className={cn('h-full w-full', className)}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <rect width="3" height="2" fill="#C60B1E" />
      <rect y="0.5" width="3" height="1" fill="#FFC400" />
    </svg>
  );
}

export function FlagEN({ className }: { className?: string }) {
  // Simplified Stars & Stripes, legible at small sizes.
  const stripeH = 20 / 13;
  return (
    <svg
      viewBox="0 0 30 20"
      className={cn('h-full w-full', className)}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <rect width="30" height="20" fill="#fff" />
      {Array.from({ length: 13 }).map((_, i) =>
        i % 2 === 0 ? (
          <rect key={i} y={i * stripeH} width="30" height={stripeH} fill="#B22234" />
        ) : null
      )}
      <rect width="13" height={stripeH * 7} fill="#3C3B6E" />
      {Array.from({ length: 4 }).map((_, r) =>
        Array.from({ length: 5 }).map((_, c) => (
          <circle
            key={`${r}-${c}`}
            cx={1.4 + c * 2.5}
            cy={1.4 + r * 2.6}
            r="0.7"
            fill="#fff"
          />
        ))
      )}
    </svg>
  );
}
