import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TrustTrade Pakistan - Secure Escrow Service',
  description: 'Pakistan\'s most trusted escrow service for secure online trading. Safe payments through EasyPaisa, JazzCash, and bank transfers.',
  keywords: 'escrow, Pakistan, online trading, secure payments, DVA, EasyPaisa, JazzCash, bank transfer',
  openGraph: {
    title: 'TrustTrade Pakistan - Secure Escrow Service',
    description: 'Pakistan\'s most trusted escrow service for secure online trading',
    type: 'website',
    locale: 'en_PK',
    siteName: 'TrustTrade Pakistan',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="relative min-h-screen flex flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}