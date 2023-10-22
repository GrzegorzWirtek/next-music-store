'use client';

import Image from 'next/image';
import cart from '@/public/shopping-cart.png';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useAppContext } from '@/app/context/AppContext';

export default function Cart() {
	const [isClient, setIsClient] = useState(false);
	const { products } = useAppContext();
	const productsInCart = products?.reduce(
		(acc, product) => acc + product.number,
		0,
	);

	useEffect(() => {
		setIsClient(true);
	}, []);

	return (
		<>
			<Link className='relative group' href='/cart'>
				<Image
					className='w-9 lg:w-7 mr-2 cursor-pointer transition-hover duration-200 md:group-hover:drop-shadow-hover'
					alt='Shopping cart'
					src={cart}
				/>
				{isClient && (
					<p className='absolute -top-1 right-0 flex justify-center items-center bg-[var(--blue)] text-white w-4 h-4 text-xs rounded-full p-0.5 box-content transition-hover duration-200 md:group-hover:drop-shadow-hover'>
						{productsInCart}
					</p>
				)}
			</Link>
		</>
	);
}
