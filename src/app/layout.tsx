import { Suspense } from 'react';
import type { Metadata } from 'next';
import { Archivo } from 'next/font/google';
import { meta } from '@/config/metadata';
import RecoilContextProvider from '@/context/RecoilContextProvider';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import './globals.css';

const archivo = Archivo({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
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
        <RecoilContextProvider>
          <Suspense fallback={<div>Loading content...</div>}>
            <Header />
            {children}
            <Footer />
          </Suspense>
        </RecoilContextProvider>
      </body>
    </html>
  );
}
