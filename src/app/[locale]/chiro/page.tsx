import Image from 'next/image';
import { Locale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { use } from 'react';
import { ChiroFooter, ChiroNav } from './Chrome';
import { getChiroContent, PLAY_STORE_URL } from './content';
import './chiro.css';

export function generateMetadata() {
  return { title: 'Chiro · Control de gastos' };
}

export default function ChiroLanding({ params }: PageProps<'/[locale]/chiro'>) {
  const { locale } = use(params);
  setRequestLocale(locale as Locale);
  const c = getChiroContent(locale);

  return (
    <div className="chiro">
      <ChiroNav locale={locale} />

      <header className="chiro__hero">
        <div className="chiro__wrap">
          <Image className="chiro__hero-logo" src="/chiro/logo.png" alt="Chiro" width={96} height={96} priority />
          <span className="chiro__badge">{c.hero.badge}</span>
          <h1 className="chiro__title">{c.hero.title}</h1>
          <p className="chiro__tagline">{c.hero.tagline}</p>
          <p className="chiro__desc">{c.hero.description}</p>
          <a className="chiro__cta" href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">
            ▶ {c.hero.cta}
          </a>
          <p className="chiro__free">{c.hero.free}</p>
        </div>
      </header>

      <section id="features" className="chiro__wrap">
        <h2 className="chiro__section-title">{c.featuresTitle}</h2>
        <div className="chiro__grid">
          {c.features.map((f) => (
            <div key={f.title} className="chiro__feature">
              <div className="chiro__feature-icon" aria-hidden>{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      <ChiroFooter locale={locale} />
    </div>
  );
}
