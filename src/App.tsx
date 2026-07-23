import { LanguageProvider, useLang } from '@/i18n/LanguageContext';
import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Marquee } from '@/components/sections/Marquee';
import { Intro } from '@/components/sections/Intro';
import { Solutions } from '@/components/sections/Solutions';
import { Intelligence } from '@/components/sections/Intelligence';
import { Approach } from '@/components/sections/Approach';
import { Gallery } from '@/components/sections/Gallery';
import { Clients } from '@/components/sections/Clients';
import { Plans } from '@/components/sections/Plans';
import { Team } from '@/components/sections/Team';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';
import ScrollExpandShowcase from '@/components/ui/scroll-expand-showcase';

const px = (id: number, w = 1920) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

function Showcase() {
  const { t } = useLang();
  return (
    <ScrollExpandShowcase
      bgImageSrc={px(373912)} // aerial city skyline
      mediaSrc={px(1470405)} // Dubai marina at night — global reach
      title={t.hero.line1 === 'Global' ? 'GLOBAL EXPANSION' : 'EXPANSIÓN GLOBAL'}
      subtitle={t.approach.note}
      scrollHint={t.hero.scroll}
    />
  );
}

function Page() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Showcase />
        <Hero />
        <Marquee />
        <Intro />
        <Solutions />
        <Intelligence />
        <Approach />
        <Gallery />
        <Clients />
        <Plans />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <Page />
    </LanguageProvider>
  );
}
