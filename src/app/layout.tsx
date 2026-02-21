import {ReactNode} from 'react';
import { metadata } from "./metadata";
import { Analytics } from '@vercel/analytics/next';

export { metadata };

type Props = {
  children: ReactNode;
};


export default function RootLayout({children}: Props) {
  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );;
}