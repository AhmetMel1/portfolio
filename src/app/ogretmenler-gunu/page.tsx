import type { Metadata } from 'next';
import { Caveat } from 'next/font/google';

import { TeachersDay } from './teachers-day';

const caveat = Caveat({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '700'],
  variable: '--font-hand',
});

export const metadata: Metadata = {
  title: 'Öğretmenler Günün Kutlu Olsun',
  robots: { index: false, follow: false },
};

const Page = () => {
  return (
    <div className={caveat.variable}>
      <TeachersDay />
    </div>
  );
};

export default Page;
