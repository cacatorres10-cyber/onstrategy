'use client';

import { useState } from 'react';
import { Mail, Phone, Globe, ArrowRight } from 'lucide-react';
import { useLang } from '@/i18n/LanguageContext';
import { CONTACT } from '@/i18n/content';
import { Reveal, SectionLabel } from '@/components/ui/primitives';

export function Contact() {
  const { t } = useLang();
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    region: '',
    message: '',
  });

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      `*ON STRATEGY PRO*`,
      `${t.contact.form.name}: ${form.name}`,
      `${t.contact.form.email}: ${form.email}`,
      `${t.contact.form.company}: ${form.company}`,
      `${t.contact.form.region}: ${form.region}`,
      `${t.contact.form.message}: ${form.message}`,
    ];
    const url = `${CONTACT.whatsapp}?text=${encodeURIComponent(lines.join('\n'))}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const info = [
    { icon: Mail, label: t.contact.emailLabel, value: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { icon: Phone, label: t.contact.phoneLabel, value: CONTACT.phoneDisplay, href: CONTACT.whatsapp },
    { icon: Globe, label: t.contact.webLabel, value: CONTACT.web, href: `https://${CONTACT.web}` },
  ];

  const inputCls =
    'w-full rounded-xl border border-ink/15 bg-white/60 px-4 py-3.5 text-sm text-ink placeholder-ink/35 outline-none transition-colors focus:border-ink focus:bg-white';

  return (
    <section id="contact" className="bg-paper px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr]">
          {/* Left: info */}
          <div>
            <Reveal>
              <SectionLabel>{t.contact.tag}</SectionLabel>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 font-display text-4xl font-bold uppercase tracking-tightest text-ink md:text-6xl">
                {t.contact.title}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-md text-base text-ink/55">{t.contact.subtitle}</p>
            </Reveal>

            <div className="mt-10 space-y-3">
              {info.map((item) => (
                <Reveal key={item.label} delay={0.15}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-2xl border border-ink/10 bg-white/40 p-4 transition-colors hover:border-ink/25 hover:bg-white"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink text-gold transition-transform group-hover:rotate-[-12deg]">
                      <item.icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs uppercase tracking-wide text-ink/45">
                        {item.label}
                      </span>
                      <span className="block truncate font-display text-lg font-semibold text-ink">
                        {item.value}
                      </span>
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <Reveal delay={0.1}>
            <form
              onSubmit={submit}
              className="rounded-3xl border border-ink/12 bg-white/60 p-7 md:p-9"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  required
                  placeholder={t.contact.form.name}
                  value={form.name}
                  onChange={update('name')}
                  className={inputCls}
                />
                <input
                  type="email"
                  placeholder={t.contact.form.email}
                  value={form.email}
                  onChange={update('email')}
                  className={inputCls}
                />
                <input
                  placeholder={t.contact.form.company}
                  value={form.company}
                  onChange={update('company')}
                  className={inputCls}
                />
                <input
                  placeholder={t.contact.form.region}
                  value={form.region}
                  onChange={update('region')}
                  className={inputCls}
                />
              </div>
              <textarea
                required
                rows={4}
                placeholder={t.contact.form.placeholderMsg}
                value={form.message}
                onChange={update('message')}
                className={`${inputCls} mt-4 resize-none`}
              />
              <button
                type="submit"
                className="group mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-7 py-4 text-sm font-bold uppercase tracking-wide text-paper transition-all hover:bg-gold hover:text-ink"
              >
                {t.contact.form.send}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
