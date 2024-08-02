import { GeistSans } from 'geist/font/sans';
import config from '@/config';

import './globals.css' // tailwind CSS


export const metadata = {
  title: config.siteName,
  description: config.siteDescription,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={GeistSans.className} >
        <section className="antialiased">
        {children}
        </section>
      </body>
    </html>
  );
}
