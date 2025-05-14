import type { Metadata } from 'next'
import './globals.css';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'AFTL Shipping - Your Trusted Tanker Charterer',
  metadataBase: new URL('https://aftlweb.vercel.app'),
  icons: {
    icon: [
      { url: '/images/logo.png', sizes: '32x32' },
      { url: '/images/logo.png', sizes: '192x192' },
      { url: '/images/logo.png', sizes: '512x512' }
    ],
    apple: [
      { url: '/images/logo.png', sizes: '180x180' }
    ]
  },
  openGraph: {
    title: 'AFTL Shipping - Your Trusted Tanker Charterer',
    url: 'https://aftlweb.vercel.app',
    siteName: 'AFTL Shipping',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'AFTL Shipping',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AFTL Shipping - Your Trusted Tanker Charterer',
    images: ['/images/logo.png'],
    site: '@aftlshipping',
    creator: '@aftlshipping',
  },
  alternates: {
    canonical: 'https://aftlweb.vercel.app',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800">
        {children}
      </body>
    </html>
  );
}