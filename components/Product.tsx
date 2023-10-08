import Image from 'next/image';
import Button from './button';
import { Product } from '@/utils/types';

export default function Product({
	product,
}: {
	key: string;
	product: Product;
}) {
	const baseImgUrl = process.env.UPLOADTHING_BASE_URL;
	const { title, price, images } = product;
	return (
		<div className='max-w-[300px] flex flex-col basis-[calc(50%-18px)] sm:basis-full items-center m-1.5 sm:m-2 pb-10 bg-gradient-to-b from-[var(--white-transparent)] to-transparent rounded-md transition-hover duration-200 hover:shadow-hover'>
			<div className='text-center mr-3'>
				<Image
					alt={title}
					src={`${baseImgUrl}${images[0]}`}
					width='0'
					height='0'
					sizes='100vw'
					className='h-auto w-auto object-contain transition-hover ease-in-out duration-500 hover:scale-105 cursor-pointer p-10'
					priority
				/>
				<h2>{title}</h2>
				<p>&#8364;{price}</p>
			</div>
			<Button textContent='Add to cart' />
		</div>
	);
}
