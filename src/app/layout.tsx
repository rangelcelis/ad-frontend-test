import Footer from '@/app/ui/footer';
import Header from '@/app/ui/header';
import { meta } from '@/config/metadata';
import type { Metadata } from 'next';
import { Archivo } from 'next/font/google';
import { Suspense } from 'react';
import './globals.css';
import Loader from './ui/loader';

const archivo = Archivo({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  keywords: meta.keywords,
  authors: {
    name: meta.author,
    url: meta.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={archivo.className}>
        <Header />
        <Suspense fallback={<Loader />}>{children}</Suspense>
        <Footer />
      </body>
    </html>
  );
}
