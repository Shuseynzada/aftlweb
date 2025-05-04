import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'AFTL Shipping',
  description: 'Leading charterers of tanker vessels in the Mediterranean and beyond',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800">
        {children}
      </body>
    </html>
  );
}