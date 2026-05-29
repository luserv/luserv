import { Locale } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { use } from 'react';
import DeleteAccountClient from './DeleteAccountClient';

export async function generateMetadata(
  props: Omit<PageProps<'/[locale]/chiro/delete'>, 'children'>
) {
  const { locale } = await props.params;
  const t = await getTranslations({ locale: locale as Locale, namespace: 'chiroDelete' });
  return {
    title: t('metaTitle'),
    robots: { index: false, follow: false },
  };
}

export default function ChiroDeletePage({ params }: PageProps<'/[locale]/chiro/delete'>) {
  const { locale } = use(params);
  setRequestLocale(locale as Locale);
  return <DeleteAccountClient />;
}
