import { Inter, Merriweather, Lato } from 'next/font/google';
 
export const inter = Inter({ subsets: ['latin'] });
export const lato = Lato({ 
  weight: ['100', '400', '300', '700', '900'],
  subsets: ['latin'],
 });
 
export const merriweather = Merriweather({
  weight: ['300','400','700','900'],
  subsets: ['latin'],
});