import { Locale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { use } from 'react';
import { Link } from '@/i18n/navigation';
import { ChiroFooter, ChiroNav } from '../Chrome';
import { getChiroContent, LAST_UPDATED } from '../content';
import '../chiro.css';

export function generateMetadata() {
  return { title: 'Política de Privacidad · Chiro' };
}

export default function ChiroPrivacy({ params }: PageProps<'/[locale]/chiro/privacy'>) {
  const { locale } = use(params);
  setRequestLocale(locale as Locale);
  const { privacy } = getChiroContent(locale);

  return (
    <div className="chiro">
      <ChiroNav locale={locale} />
      <main className="chiro__wrap chiro__legal">
        <Link href="/chiro" className="chiro__back">← Chiro</Link>
        <h1>{privacy.title}</h1>
        <p className="chiro__legal-updated">{privacy.updated}: {LAST_UPDATED}</p>
        <p className="chiro__legal-intro">{privacy.intro}</p>
        {privacy.sections.map((s) => (
          <section key={s.heading}>
            <h2>{s.heading}</h2>
            {s.body.map((p, i) => <p key={i}>{p}</p>)}
          </section>
        ))}
      </main>
      <ChiroFooter locale={locale} />
    </div>
  );
}
