import { Locale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { use, Suspense } from 'react';
import NavBar from "@/components/NavBar";
import Hero from "@/sections/Hero";
import ShowcaseSection from "@/sections/ShowcaseSection";
import LogoShowcase from "@/sections/LogoShowcase";
import FeatureCards from "@/sections/FeatureCards";
import Experience from "@/sections/Experience";
import TechStack from "@/sections/TechStack";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";

export default function Home({ params }: PageProps<'/[locale]'>) {
  const { locale } = use(params);
  setRequestLocale(locale as Locale);

  return (
    <>
      <Suspense fallback={null}><NavBar /></Suspense>
      <Hero />
      <ShowcaseSection />
      <LogoShowcase />
      <FeatureCards />
      <Experience />
      <TechStack />
      <Contact />
      <Footer />
    </>
  );
}
