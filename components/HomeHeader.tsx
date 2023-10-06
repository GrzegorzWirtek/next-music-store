import Image from 'next/image';
import { Playfair_Display } from 'next/font/google';
import Button from './Button';
import Product from '@/components/Product';
import { Product as ProductProps } from '@/utils/types';

const plaifairDisplay = Playfair_Display({
	subsets: ['latin'],
	weight: ['400'],
});

export default function HomeHeader({ products }: { products: ProductProps[] }) {
	const mainProductIndex = products.findIndex(
		(product: ProductProps) => product.main === true,
	);
	const mainProduct = products.splice(mainProductIndex, 1)[0];

	const baseImgUrl = process.env.UPLOADTHING_BASE_URL;
	return (
		<section className='sm:px-2 md:px-10 flex flex-row grow flex-wrap justify-center gap-4'>
			<div className='flex flex-col basis-[340px] sm:basis-[460px] xl:basis-[570px] my-10 lg:my-0 items-end justify-center'>
				<h2
					className={`${plaifairDisplay.className} mb-3 text-4xl sm:text-5xl md:text-5xl xl:text-6xl text-right text-[var(--blue)] leading-none`}>
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
					alt={mainProduct.title}
					src={`${baseImgUrl}${mainProduct.images[0]}`}
					width='0'
					height='0'
					sizes='100vw'
				/>
				<div className='text-center mr-3'>
					<h2>{mainProduct.title}</h2>
					<p>&#8364;{mainProduct.price}</p>
				</div>
				<Button textContent='Details' />
			</div>

			{products.map((product: ProductProps) => (
				<Product key={product._id} product={product} />
			))}
		</section>
	);
}
