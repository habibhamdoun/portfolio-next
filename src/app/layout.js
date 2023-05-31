import Head from 'next/head';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Habib Hamdoun',
  description:
    "Welcome to my portfolio, i'm Habib Hamdoun a front-end developer and a second year computer engineering student.Hope you enjoy! ",
  icons: {
    icon: { url: '/favicon.png', type: 'image/png' },
    shortcut: { url: '/favicon.png', type: 'image/png' },
  },
};

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <link rel='icon' type='image/x-icon' href='/favicon.ico' />{' '}
      </Head>
      <html lang='en'>
        <body className={inter.className}>{children}</body>
      </html>
    </>
  );
}
