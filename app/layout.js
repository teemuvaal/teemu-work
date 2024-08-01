import { GeistSans } from 'geist/font/sans';

import './globals.css' // tailwind CSS


export const metadata = {
  title: "teemu.work",
  description: "Teemu's personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={GeistSans.className} >{children}</body>
    </html>
  );
}
