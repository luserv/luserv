import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Fronted projects",
  description: "Frontend projects backup",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className=''
      >
        {children}
      </body>
    </html>
  );
}
