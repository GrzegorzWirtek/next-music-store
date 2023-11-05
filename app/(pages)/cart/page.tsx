'use client';

import { useEffect, useState } from 'react';
import { useAppContext } from '@/app/context/AppContext';
import { plaifairDisplay } from '@/utils/fonts';
import CartIsEmpty from './CartIsEmpty';
import CartContent from './CartContent';
import { useRouter } from 'next/navigation';
import * as NProgress from 'nprogress';

export default function Cart() {
	const { products, deleteById, increaseNr, decreaseNr } = useAppContext();
	const [isClient, setIsClient] = useState(false);
	const router = useRouter();

	const handleOrder = async () => {
		NProgress.start();
		const stripeProducts = products.map((product) => {
			return { price: product.priceStripe, quantity: product.quantity };
		});

		const response = await fetch(`/api/order`, {
			method: 'POST',
			mode: 'cors',
			cache: 'no-cache',
			credentials: 'same-origin',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(stripeProducts),
		});
		const data = await response.json();
		router.push(data);
	};

	useEffect(() => {
		setIsClient(true);
	}, []);

	if (!isClient) return;
	if (!products.length) return <CartIsEmpty />;

	return (
		<div className='flex flex-col bg-[var(--black-transparent)] w-[95vw] max-w-[400px] mx-auto py-4 px-2 rounded-md shadow-md'>
			<p
				className={`${plaifairDisplay.className} text-3xl mb-4 font-semibold text-center`}>
				Your cart
			</p>
			<CartContent />
			<div className='flex flex-wrap justify-between p-4 bg-white rounded-md'>
				<p className='text-xl font-semibold'>Total</p>
				<p className='text-xl font-semibold text-[var(--red-price)]'>
					&#8364;
					{products.reduce(
						(acc, product) => acc + product.price * product.quantity,
						0,
					)}
				</p>
			</div>
			<button
				onClick={handleOrder}
				className='px-8 mt-4 bg-[var(--blue)] transition-hover duration-200 hover:bg-[var(--blue-lighter)] text-white py-2 rounded-md'>
				BUY NOW
			</button>
		</div>
	);
}
