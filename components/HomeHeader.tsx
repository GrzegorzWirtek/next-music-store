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
		<section className='flex flex-row grow flex-wrap justify-center'>
			<div className='flex flex-col sm:basis-1/2 items-end justify-center max-w-[320px] sm:max-w-full'>
				<h2
					className={`${plaifairDisplay.className} mb-3 pl-2 pr-2 pt-10 sm:p-0 sm:pl-[4vw] text-4xl sm:text-[4.7vw] xl:text-6xl text-center sm:text-right text-[var(--blue)] leading-none`}>
					If you want your music to be the best, you need the best instruments.
				</h2>
				<p className='text-center sm:text-right sm:pl-[5vw] leading-tight'>
					In our store you will get quality and inspiration, the rest is up to
					you.
				</p>
			</div>

			<div className='flex flex-wrap sm:basis-1/2 justify-center items-center py-4 mb-16'>
				<Image
					className='w-auto h-auto object-contain basis-full'
					alt={mainProduct.title}
					src={`${baseImgUrl}${mainProduct.images[0]}`}
					width='0'
					height='0'
					sizes='100vw'
				/>

				<div className='basis-auto smr-3 grid grid-cols-2 grid-rows-2'>
					<h2 className='row-start-1 row-end-2 text-center'>
						{mainProduct.title}
					</h2>
					<p className='row-start-2 row-end-3 text-center'>
						&#8364;{mainProduct.price}
					</p>
					<button className='bg-[var(--red)] transition-hover duration-200 hover:bg-[var(--red-lighter)] text-white py-2 px-4 rounded-lg row-start-1 row-end-3 self-center'>
						Details
					</button>
				</div>
			</div>

			{products.map((product: ProductProps) => (
				<Product key={product._id} product={product} />
			))}
		</section>
	);
}
