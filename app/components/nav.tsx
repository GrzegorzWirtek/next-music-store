import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/logo.svg';
import cart from '@/public/shopping-cart.png';
import { Shrikhand } from 'next/font/google';

const shrikhand = Shrikhand({ subsets: ['latin'], weight: ['400'] });

export default function Nav() {
	return (
		<nav className='sticky top-0 left-0 w-full basis-full flex flex-wrap items-center gap-8 px-8 py-5 bg-[var(--red-color)]'>
			<div className='flex items-center cursor-pointer'>
				<Image alt='Store logo' src={logo} width={30} height={30} />
				<h1
					className={`${shrikhand.className} text-2xl tracking-tight text-[var(--light-blue-color)] drop-shadow`}>
					Next Music Store
				</h1>
			</div>
			<Link href={'/products'} className='text-white'>
				Products
			</Link>
			<Link href={'/categories'} className='text-white'>
				Categories
			</Link>
			<Link href={'/about'} className='text-white'>
				About
			</Link>
			<input
				type='search'
				className='pl-10 ml-auto justify-self-end border rounded-full outline-none focus:ring-2 ring-[var(--light-blue-color)]'
				placeholder='Search'
				required></input>

			<Image
				className='cursor-pointer'
				alt='Shopping cart'
				src={cart}
				width={25}
				height={25}
			/>
		</nav>
	);
}
