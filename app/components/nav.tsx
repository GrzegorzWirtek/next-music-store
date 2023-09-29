import Image from 'next/image';
import Link from 'next/link';
import cart from '@/public/shopping-cart.png';

export default function Nav() {
	return (
		<nav className='flex flex-wrap grow gap-4'>
			<Link
				href={'/products'}
				className='text-white transition-hover duration-200 hover:drop-shadow-hover'>
				Products
			</Link>
			<Link
				href={'/categories'}
				className='text-white transition-hover duration-200 hover:drop-shadow-hover'>
				Categories
			</Link>
			<Link
				href={'/about'}
				className='text-white transition-hover duration-200 hover:drop-shadow-hover'>
				About
			</Link>
			<input
				type='search'
				className='pl-10 ml-auto justify-self-end border rounded-full outline-none transition-focus duration-100 focus:drop-shadow-hover'
				placeholder='Search'
				required></input>

			<Image
				className='cursor-pointer transition-hover duration-200 hover:drop-shadow-hover'
				alt='Shopping cart'
				src={cart}
				width={25}
				height={25}
			/>
		</nav>
	);
}
