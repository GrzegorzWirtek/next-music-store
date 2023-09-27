import piano from '@/public/piano.png';
import Image from 'next/image';
import { Playfair_Display, Poppins } from 'next/font/google';

const plaifairDisplay = Playfair_Display({
	subsets: ['latin'],
	weight: ['400'],
});
const poppins = Poppins({ subsets: ['latin'], weight: ['400'] });

export default function Header() {
	return (
		<header className='min-h-[50vh] max-w-7xl m-auto flex flex-row grow flex-wrap my-10 bg-gradient-to-b from-gray-300 to-transparent'>
			<div className='basis-1/2 flex flex-col items-end justify-center'>
				<h1
					className={`${plaifairDisplay.className} mb-2 text-8xl text-right w-[300px] tracking-tight leading-none`}>
					Next Music Store
				</h1>
				<p className='w-[200px] text-right leading-snug'>
					If you want your music to be the best, you need the best instruments.
					Welcome to our store!
				</p>
			</div>
		</header>
	);
}
