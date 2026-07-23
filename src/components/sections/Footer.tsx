'use client';

import { Mail, Phone, Globe } from 'lucide-react';
import { useLang } from '@/i18n/LanguageContext';
import { CONTACT } from '@/i18n/content';
import { Logo } from '@/components/ui/Logo';

export function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  const navLinks = [
    { href: '#solutions', label: t.nav.solutions },
    { href: '#approach', label: t.nav.approach },
    { href: '#clients', label: t.nav.clients },
    { href: '#plans', label: t.nav.plans },
    { href: '#team', label: t.nav.team },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <footer className="border-t border-white/5 bg-ink px-5 py-16 text-paper md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1.2fr]">
          <div>
            <Logo variant="light" />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-paper/50">
              {t.footer.tagline}
            </p>
            <p className="mt-6 font-display text-lg font-semibold uppercase tracking-tight text-gold">
              LATAM · USA · EAU
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-paper/40">
              {t.footer.nav}
            </h4>
            <ul className="mt-5 space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-paper/60 transition-colors hover:text-gold"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-paper/40">
              {t.contact.tag}
            </h4>
            <ul className="mt-5 space-y-3.5">
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center gap-3 text-sm text-paper/60 transition-colors hover:text-gold"
                >
                  <Mail className="h-4 w-4 text-gold" />
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-paper/60 transition-colors hover:text-gold"
                >
                  <Phone className="h-4 w-4 text-gold" />
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`https://${CONTACT.web}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-paper/60 transition-colors hover:text-gold"
                >
                  <Globe className="h-4 w-4 text-gold" />
                  {CONTACT.web}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/5 pt-8 md:flex-row md:items-center">
          <p className="text-xs uppercase tracking-wide text-paper/40">
            © {year} ON STRATEGY PRO LLC. {t.footer.rights}
          </p>
          <p className="text-xs uppercase tracking-[0.15em] text-gold/80">
            {t.footer.madeWith}
          </p>
        </div>
      </div>
    </footer>
  );
}
