'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';
import { useLang } from '@/i18n/LanguageContext';
import { cn } from '@/lib/utils';

export function Navbar() {
  const { t, lang, toggle } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#solutions', label: t.nav.solutions },
    { href: '#approach', label: t.nav.approach },
    { href: '#clients', label: t.nav.clients },
    { href: '#plans', label: t.nav.plans },
    { href: '#team', label: t.nav.team },
  ];

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-ink/10 bg-paper/90 backdrop-blur-xl'
          : 'bg-transparent'
      )}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
        <a href="#top" className="shrink-0">
          <Logo />
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] font-medium uppercase tracking-wide text-ink/70 transition-colors duration-150 hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <button
            onClick={toggle}
            aria-label="Toggle language"
            className="flex items-center gap-1.5 rounded-full border border-ink/20 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper"
          >
            <Globe className="h-3.5 w-3.5" />
            {lang === 'es' ? 'EN' : 'ES'}
          </button>

          <a
            href="#contact"
            className="hidden rounded-full border border-ink bg-ink px-5 py-2 text-xs font-bold uppercase tracking-wide text-paper transition-all duration-200 hover:bg-transparent hover:text-ink sm:inline-block"
          >
            {t.nav.cta}
          </a>

          <button
            className="lg:hidden"
            aria-label="Menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-ink/10 bg-paper lg:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {[...links, { href: '#contact', label: t.nav.contact }].map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-ink/5 py-3 font-display text-xl font-semibold text-ink"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
