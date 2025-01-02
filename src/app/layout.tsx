import type { Metadata } from 'next';
import { Archivo } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import './globals.css';

const inter = Archivo({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Apply Digital Test',
  description: 'Frontend development test for Apply Digital',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
