import piano from '@/public/piano.png';
import logo from '@/public/logo-min.png';
import cart from '@/public/shopping-cart.png';
import Image from 'next/image';
import { Playfair_Display, Bebas_Neue, Shrikhand } from 'next/font/google';

const plaifairDisplay = Playfair_Display({
	subsets: ['latin'],
	weight: ['400'],
});
const heebo = Shrikhand({ subsets: ['latin'], weight: ['400'] });

export default function Header() {
	return (
		<>
			<nav className='basis-full flex flex-wrap items-center gap-10 px-8 py-6'>
				<div className='flex items-center '>
					<Image alt='Store logo' src={logo} width={30} height={30} />
					<h1 className={`${heebo.className} text-2xl tracking-tight`}>
						Next Music Store
					</h1>
				</div>
				<p>Products</p>
				<p>Categories</p>
				<p>About</p>
				<input
					type='search'
					className='pl-10 ml-auto justify-self-end text-s text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500'
					placeholder='Search'
					required></input>

				<Image alt='Shopping cart' src={cart} width={25} height={25} />
			</nav>

			<header className='min-h-[50vh] max-w-7xl m-auto px-10 flex flex-row grow flex-wrap justify-center bg-gradient-to-b from-white to-transparent'>
				<div className='flex flex-col basis-1/2 items-end justify-center'>
					<h2
						className={`${plaifairDisplay.className} mb-3 text-[4.6vw] xl:text-6xl text-right text-[var(--blue-color)] leading-none`}>
						If you want your music to be the best, you need the best
						instruments.
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
		</>
	);
}
