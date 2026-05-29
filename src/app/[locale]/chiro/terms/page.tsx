import { Locale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { use } from 'react';
import { Link } from '@/i18n/navigation';
import { ChiroFooter, ChiroNav } from '../Chrome';
import { getChiroContent, LAST_UPDATED } from '../content';
import '../chiro.css';

export function generateMetadata() {
  return { title: 'Términos y Condiciones · Chiro' };
}

export default function ChiroTerms({ params }: PageProps<'/[locale]/chiro/terms'>) {
  const { locale } = use(params);
  setRequestLocale(locale as Locale);
  const { terms } = getChiroContent(locale);

  return (
    <div className="chiro">
      <ChiroNav locale={locale} />
      <main className="chiro__wrap chiro__legal">
        <Link href="/chiro" className="chiro__back">← Chiro</Link>
        <h1>{terms.title}</h1>
        <p className="chiro__legal-updated">{terms.updated}: {LAST_UPDATED}</p>
        <p className="chiro__legal-intro">{terms.intro}</p>
        {terms.sections.map((s) => (
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
