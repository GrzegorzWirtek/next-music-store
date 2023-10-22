'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useAppContext } from '@/app/context/AppContext';

export default function Cart() {
	const { products, deleteById, increaseNr, decreaseNr } = useAppContext();
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	return (
		<div>
			{isClient &&
				products?.map((product) => (
					<div
						className='flex flex-col bg-blue-200 border w-[600px] mx-auto'
						key={product.id}>
						<div className='relative h-20 w-20'>
							<Image
								className='object-contain'
								src={`${process.env.NEXT_PUBLIC_UPLOADTHING_BASE_URL}${product.imgUrl}`}
								alt={product.title}
								fill
							/>
						</div>
						<h2>{product.title}</h2>
						<p>{product.price}</p>
						<div className='flex'>
							<button
								className='p-5 bg-green-400'
								onClick={() => increaseNr(product.id)}>
								+
							</button>
							<p>{product.number}</p>
							<button
								className='p-5 bg-green-400'
								onClick={() => decreaseNr(product.id)}>
								-
							</button>
							<button
								className='p-5 bg-red-400'
								onClick={() => deleteById(product.id)}>
								DELETE
							</button>
						</div>
					</div>
				))}
		</div>
	);
}
