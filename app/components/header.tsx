import piano from '@/public/piano.png';
import Image from 'next/image';
import { Playfair_Display, Bebas_Neue, Shrikhand } from 'next/font/google';

const plaifairDisplay = Playfair_Display({
	subsets: ['latin'],
	weight: ['400'],
});
const heebo = Shrikhand({ subsets: ['latin'], weight: ['400'] });

export default function Header() {
	return (
		<header className='min-h-[50vh] max-w-7xl m-auto px-10 flex flex-row grow flex-wrap justify-center'>
			<div className='flex flex-col basis-1/2 items-end justify-center'>
				<h2
					className={`${plaifairDisplay.className} mb-3 text-[4.6vw] xl:text-6xl text-right text-[var(--blue-color)] leading-none`}>
					If you want your music to be the best, you need the best instruments.
				</h2>
				<p className='text-right leading-tight'>
					In our store you will get quality and inspiration, the rest is up to
					you.
				</p>
			</div>

			<div className='flex flex-wrap basis-1/2 justify-center items-center px-10 py-4'>
				<Image alt='piano' src={piano} objectFit='contain' />
				<div className='text-center mr-3'>
					<p>Very good piano</p>
					<p>&#8364;4500</p>
				</div>
				<button className='bg-transparent hover:bg-red-500 text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded'>
					Details
				</button>
			</div>
		</header>
	);
}
