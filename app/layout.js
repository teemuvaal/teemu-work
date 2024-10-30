import { GeistSans } from 'geist/font/sans';
import config from '@/config';
import { GeistMono } from 'geist/font/mono';
import './globals.css' // tailwind CSS

export const metadata = {
  title: config.siteName,
  description: config.siteDescription,
};

// Define the font used in the app

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${GeistMono.className}`}>
        <section className="antialiased">
        {children}
        </section>
      </body>
    </html>
  );
}
