import type { Metadata } from 'next';

import { monument, satoshi, satoshiBold, satoshiMedium } from '@/config/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'Niftables',
  description:
    'Explore, create, and trade unique NFTs on Niftables, the premier platform for digital asset innovation and ownership.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`
      ${satoshi.variable} ${monument.variable} ${satoshiMedium.variable} ${satoshiBold.variable} font-satoshi bg-black text-white overflow-x-hidden max-w-[100vw]
      `}
      >
        {children}
      </body>
    </html>
  );
}
