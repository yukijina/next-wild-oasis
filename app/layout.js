import Logo from '@/app/_components/Logo';
import Navigation from '@/app/_components/Navigation';

// Google Font
import { Josefin_Sans } from 'next/font/google';

// In English, use "latin". display is for fallback
const josefin = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
});

// check class name
//console.log(josefin);

import '@/app/_styles/globals.css';
import Header from './_components/Header';

// setup title. No need to add in the RootLayout
// We do not add manually in html
export const metadata = {
  // title: 'The Wild Oasis',
  title: {
    // %s added other page placeholder. it display like Cabins The Wild Oasis
    template: '%s | The Wild Oasis',
    default: 'Welcome | The Wild Oasis',
  },
  description:
    'Luxurious cabins hotel, located in the heart of the Italian Dolomites, surrounded by beautifull mountains and dark forests.',
};

// children is replaced to correspondent pages
export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        // relative is for Home page image fill (image occupy entire body)
        className={`${josefin.className} antialiased relative bg-primary-950 text-primary-100 min-h-screen flex flex-col`}
      >
        <Header />
        <div className='flex-1 px-8 py-12 grid'>
          <main className='max-w-7xl mx-auto w-full'>{children}</main>
        </div>
      </body>
    </html>
  );
}
