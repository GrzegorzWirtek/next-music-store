'use client';

import Image from 'next/image';
import { Product } from '@/utils/types';
import { useRouter, redirect } from 'next/navigation';
import { SyntheticEvent } from 'react';
import AddToCartBtn from './AddToCardBtn';
import * as NProgress from 'nprogress';

export default function Product({
	product,
}: {
	key: string;
	product: Product;
}) {
	const baseImgUrl = process.env.NEXT_PUBLIC_UPLOADTHING_BASE_URL;
	const { title, price, images, _id } = product;
	const img = `${baseImgUrl}${images[0]}`;
	const router = useRouter();

	const handleShowDetails = (e: SyntheticEvent) => {
		const target = e.target as HTMLElement;
		if (target.id === 'button') return;
		NProgress.start();
		router.push(`/products/${_id}`);
	};

	return (
		<div
			className='max-w-[280px] flex flex-col basis-[calc(50%-18px)] sm:basis-full m-1.5 sm:m-2 pb-6 bg-gradient-to-b from-[var(--white-transparent)] to-transparent rounded-md transition-hover duration-200 hover:shadow-hover'
			onClick={handleShowDetails}>
			<div className='text-center'>
				<div className='relative self-stretch aspect-square'>
					<Image
						alt={title}
						src={img}
						fill
						className='object-contain transition-hover ease-in-out duration-500 hover:scale-105 cursor-pointer p-3'
						priority
					/>
				</div>
				<h2 className='font-semibold text-xl mt-3'>{title}</h2>
				<p className='font-semibold mb-6 text-[var(--red-price)]'>
					&#8364;{price}
				</p>
			</div>

			<AddToCartBtn product={product} />
		</div>
	);
}
