import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "luserv.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Desarrollo de Software y Servicios en la Nube",
    template: "%s - Luser",
  },
  description:
    "Desarrollador de software espcializado en NextJS, PostgreSQL, NodeJS, NestJS, Debian",
  keywords: [
    "Ingeniero en Tecnologias de la Información",
    "Desarrollo de Software",
    "Servicios en la Nube",
    "NextJS",
    "PostgreSQL",
    "NodeJS",
    "NestJS",
    "Debian"
  ],
  authors: [{ name: "Luser" }],
  creator: "Luser",
  publisher: "Luser",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "es_EC",
    url: siteUrl,
    siteName: "Desarrollo de Software y Servicios en la Nube",
    title: "Desarrollador de Software y Servicios en la Nube - Luser",
    description:
      "Desarrollador de software especializado en NextJS, PostgreSQL, NodeJS, NestJS, Debian - Luser",
  },
  twitter: {
    card: "summary_large_image",
    title: "Desarrollador de Software y Servicios en la Nube - Luser",
    description:
      "Desarrollador de software especializado en NextJS, PostgreSQL, NodeJS, NestJS, Debian - Luser.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  verification: {
    google: "",
  },
  alternates: { canonical: siteUrl },
  category: "education",
};
