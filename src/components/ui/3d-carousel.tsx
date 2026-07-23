'use client';

import { memo, useEffect, useLayoutEffect, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from 'framer-motion';

export const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

type UseMediaQueryOptions = {
  defaultValue?: boolean;
  initializeWithValue?: boolean;
};

const IS_SERVER = typeof window === 'undefined';

export function useMediaQuery(
  query: string,
  { defaultValue = false, initializeWithValue = true }: UseMediaQueryOptions = {}
): boolean {
  const getMatches = (q: string): boolean => {
    if (IS_SERVER) return defaultValue;
    return window.matchMedia(q).matches;
  };

  const [matches, setMatches] = useState<boolean>(() =>
    initializeWithValue ? getMatches(query) : defaultValue
  );

  const handleChange = () => setMatches(getMatches(query));

  useIsomorphicLayoutEffect(() => {
    const matchMedia = window.matchMedia(query);
    handleChange();
    matchMedia.addEventListener('change', handleChange);
    return () => matchMedia.removeEventListener('change', handleChange);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return matches;
}

const duration = 0.15;
const transition = { duration, ease: [0.32, 0.72, 0, 1] as const };
const transitionOverlay = { duration: 0.5, ease: [0.32, 0.72, 0, 1] as const };

type CarouselCard = { img: string; label?: string };

const Carousel = memo(
  ({
    handleClick,
    controls,
    cards,
    isCarouselActive,
  }: {
    handleClick: (card: CarouselCard, index: number) => void;
    controls: ReturnType<typeof useAnimation>;
    cards: CarouselCard[];
    isCarouselActive: boolean;
  }) => {
    const isScreenSizeSm = useMediaQuery('(max-width: 640px)');
    const cylinderWidth = isScreenSizeSm ? 1100 : 1900;
    const faceCount = cards.length;
    const faceWidth = cylinderWidth / faceCount;
    const radius = cylinderWidth / (2 * Math.PI);
    const rotation = useMotionValue(0);
    const transform = useTransform(
      rotation,
      (value) => `rotate3d(0, 1, 0, ${value}deg)`
    );

    return (
      <div
        className="flex h-full items-center justify-center"
        style={{
          perspective: '1000px',
          transformStyle: 'preserve-3d',
          willChange: 'transform',
        }}
      >
        <motion.div
          drag={isCarouselActive ? 'x' : false}
          className="relative flex h-full origin-center cursor-grab justify-center active:cursor-grabbing"
          style={{
            transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: 'preserve-3d',
          }}
          onDrag={(_, info) =>
            isCarouselActive && rotation.set(rotation.get() + info.offset.x * 0.05)
          }
          onDragEnd={(_, info) =>
            isCarouselActive &&
            controls.start({
              rotateY: rotation.get() + info.velocity.x * 0.05,
              transition: {
                type: 'spring',
                stiffness: 100,
                damping: 30,
                mass: 0.1,
              },
            })
          }
          animate={controls}
        >
          {cards.map((card, i) => (
            <motion.div
              key={`key-${card.img}-${i}`}
              className="absolute flex h-full origin-center items-center justify-center rounded-2xl p-2"
              style={{
                width: `${faceWidth}px`,
                transform: `rotateY(${i * (360 / faceCount)}deg) translateZ(${radius}px)`,
              }}
              onClick={() => handleClick(card, i)}
            >
              <motion.div
                layoutId={`img-${card.img}`}
                className="group relative w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
                initial={{ filter: 'blur(4px)' }}
                layout="position"
                animate={{ filter: 'blur(0px)' }}
                transition={transition}
              >
                <img
                  src={card.img}
                  alt={card.label ?? `slide ${i}`}
                  className="pointer-events-none aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
                {card.label && (
                  <span className="pointer-events-none absolute bottom-3 left-4 font-display text-sm font-semibold uppercase tracking-wide text-paper">
                    {card.label}
                  </span>
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    );
  }
);
Carousel.displayName = 'Carousel';

export function ThreeDPhotoCarousel({ cards }: { cards: CarouselCard[] }) {
  const [activeCard, setActiveCard] = useState<CarouselCard | null>(null);
  const [isCarouselActive, setIsCarouselActive] = useState(true);
  const controls = useAnimation();

  const handleClick = (card: CarouselCard) => {
    setActiveCard(card);
    setIsCarouselActive(false);
    controls.stop();
  };

  const handleClose = () => {
    setActiveCard(null);
    setIsCarouselActive(true);
  };

  return (
    <motion.div layout className="relative">
      <AnimatePresence mode="sync">
        {activeCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            layoutId={`img-container-${activeCard.img}`}
            layout="position"
            onClick={handleClose}
            className="fixed inset-0 z-50 m-5 flex items-center justify-center rounded-3xl bg-ink/70 backdrop-blur-sm md:m-24 lg:mx-[19rem]"
            style={{ willChange: 'opacity' }}
            transition={transitionOverlay}
          >
            <motion.img
              layoutId={`img-${activeCard.img}`}
              src={activeCard.img}
              alt={activeCard.label ?? ''}
              className="max-h-full max-w-full rounded-2xl shadow-2xl"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              style={{ willChange: 'transform' }}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="relative h-[420px] w-full overflow-hidden md:h-[520px]">
        <Carousel
          handleClick={handleClick}
          controls={controls}
          cards={cards}
          isCarouselActive={isCarouselActive}
        />
      </div>
    </motion.div>
  );
}
