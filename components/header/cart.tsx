'use client';

import Image from 'next/image';
import cart from '@/public/shopping-cart.png';
import Link from 'next/link';

export default function Cart() {
	return (
		<>
			<Link className='relative group' href='/cart'>
				<Image
					className='w-9 lg:w-7 mr-2 cursor-pointer transition-hover duration-200 md:group-hover:drop-shadow-hover'
					alt='Shopping cart'
					src={cart}
				/>
				<p className='absolute -top-1 right-0 flex justify-center items-center bg-[var(--blue)] text-white w-4 h-4 text-xs rounded-full p-0.5 box-content transition-hover duration-200 md:group-hover:drop-shadow-hover'>
					3
				</p>
			</Link>
		</>
	);
}
