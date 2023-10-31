import './globals.css';

import { Footer, NavBar } from '@/components';

export const metadata = {
  title: 'True Value',
  description:
    'online platform that ensures transparent and reliable transactions for users looking to purchase used vehicles by Aaditya Mishra',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="relative">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
