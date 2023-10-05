import Image from 'next/image';
import { Playfair_Display } from 'next/font/google';
import Button from './Button';
import { Product } from '@/utils/types';

const plaifairDisplay = Playfair_Display({
	subsets: ['latin'],
	weight: ['400'],
});

export default function HomeHeader({ mainProduct }: { mainProduct: Product }) {
	const { title, price, images } = mainProduct;
	const baseImgUrl = process.env.UPLOADTHING_BASE_URL;
	return (
		<section className='px-10 flex flex-row grow flex-wrap justify-center'>
			<div className='flex flex-col basis-1/2 items-end justify-center'>
				<h2
					className={`${plaifairDisplay.className} mb-3 text-[4.7vw] xl:text-6xl text-right text-[var(--blue)] leading-none`}>
					If you want your music to be the best, you need the best instruments.
				</h2>
				<p className='text-right leading-tight'>
					In our store you will get quality and inspiration, the rest is up to
					you.
				</p>
			</div>

			<div className='flex flex-wrap basis-1/2 justify-center items-center px-10 py-4'>
				<Image
					className='w-auto h-auto object-contain'
					alt={title}
					src={`${baseImgUrl}${images[0]}`}
					width='0'
					height='0'
					sizes='100vw'
				/>
				<div className='text-center mr-3'>
					<h2>{title}</h2>
					<p>&#8364;{price}</p>
				</div>
				<Button textContent='Details' />
			</div>
		</section>
	);
}
