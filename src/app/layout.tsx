import {ReactNode} from 'react';
import { metadata } from "./metadata";
import { Analytics } from '@vercel/analytics/next';

export { metadata };

type Props = {
  children: ReactNode;
};


export default function RootLayout({children}: Props) {
  return (
    <html>
      <head>
        <title>Portfolio</title>
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );;
}