import Image from 'next/image';
import Button from './button';
import { Product } from '@/utils/types';
import getBase64 from '@/utils/getBase64';

export default async function Product({
	product,
}: {
	key: string;
	product: Product;
}) {
	const baseImgUrl = process.env.UPLOADTHING_BASE_URL;
	const { title, price, images } = product;
	const img = `${baseImgUrl}${images[0]}`;
	const imgBlurData = await getBase64(img);

	return (
		<div className='max-w-[300px] flex flex-col basis-[calc(50%-18px)] sm:basis-full items-center m-1.5 sm:m-2 pb-10 bg-gradient-to-b from-[var(--white-transparent)] to-transparent rounded-md transition-hover duration-200 hover:shadow-hover'>
			<div className='text-center mr-3'>
				<Image
					alt={title}
					src={img}
					width='0'
					height='0'
					sizes='100vw'
					className='h-auto w-auto object-contain transition-hover ease-in-out duration-500 hover:scale-105 cursor-pointer p-10'
					priority
					placeholder='blur'
					blurDataURL={imgBlurData}
				/>
				<h2>{title}</h2>
				<p>&#8364;{price}</p>
			</div>
			<Button textContent='Add to cart' />
		</div>
	);
}
