import { Locale, useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { use, Suspense } from 'react';
import PageLayout from '@/components/PageLayout';
import NavBar from "../../components/NavBar";


export default function Home({ params }: PageProps<'/[locale]'>) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale as Locale);

  const t = useTranslations('home');

  return (
    <div className='max-w-5xl mx-auto'>
      <Suspense fallback={<div />}> 
        <NavBar />
      </Suspense>
      <PageLayout title={t('title')}>

      </PageLayout>

    </div>
  );
}
