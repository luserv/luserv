import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import {Locale, NextIntlClientProvider, hasLocale } from "next-intl";
import "../../styles/globals.css";


export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export async function generateMetadata(
  props: Omit<LayoutProps<'/[locale]'>, 'children'>
) {
  const {locale} = await props.params;

  const t = await getTranslations({
    locale: locale as Locale,
    namespace: 'LocaleLayout'
  });
  
  return {
    title: t('title'),
  };
}

export default async function LocaleLayout({
  children,
  params
  }: LayoutProps<'/[locale]'>) {

  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  const messages = (await import(`../../../messages/${locale}.json`)).default;

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
