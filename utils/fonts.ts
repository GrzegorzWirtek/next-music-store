import { Playfair_Display, Shrikhand } from 'next/font/google';

export const plaifairDisplay = Playfair_Display({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
});

export const shrikhand = Shrikhand({ subsets: ['latin'], weight: ['400'] });
