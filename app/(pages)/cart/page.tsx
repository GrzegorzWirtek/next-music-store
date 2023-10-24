'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useAppContext } from '@/app/context/AppContext';
import add from '@/public/add.svg';
import remove from '@/public/remove.svg';
import deleteImg from '@/public/delete.svg';

export default function Cart() {
	const { products, deleteById, increaseNr, decreaseNr } = useAppContext();
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	return (
		<div className='flex flex-col justify-center items-center'>
			{products.length ? <p>Your Cart</p> : <p>Cart is empty</p>}
			{isClient &&
				products?.map((product) => (
					<div
						className='grid grid-cols-2 grid-rows-[auto_1fr_auto] w-[90vw] max-w-[400px] mx-auto p-10 bg-white rounded-md border-b'
						key={product.id}>
						<div className='relative col-start-1 col-end-2 row-start-1 row-end-3 h-28 w-28'>
							<Image
								className='object-contain'
								src={`${process.env.NEXT_PUBLIC_UPLOADTHING_BASE_URL}${product.imgUrl}`}
								alt={product.title}
								fill
							/>
						</div>
						<h2 className='col-start-2 col-end-3 self-start font-medium'>
							{product.title}
						</h2>
						<p className='col-start-2 col-end-3 text-[var(--red-price)] font-medium'>
							&#8364;{product.price}
						</p>
						<div className='flex items-center col-start-1 col-end-3 mt-8 pt-4 border-t'>
							<button className='p-2' onClick={() => increaseNr(product.id)}>
								<Image src={add} alt='Add' />
							</button>
							<p className='text-xl w-10 text-center'>{product.number}</p>
							<button className='p-2' onClick={() => decreaseNr(product.id)}>
								<Image src={remove} alt='Remove' />
							</button>
							<button
								className='p-2 ml-auto'
								onClick={() => deleteById(product.id)}>
								<Image src={deleteImg} alt='Delete' />
							</button>
						</div>
					</div>
				))}
		</div>
	);
}
