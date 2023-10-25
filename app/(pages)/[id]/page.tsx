import getProducts from '@/utils/getProducts';
import { notFound } from 'next/navigation';
import { IdParams } from '@/utils/types';
import Slider from '@/components/slider';
import AddToCartBtn from '@/components/addToCardBtn';

export default async function ProductId({ params }: IdParams) {
	const product = await getProducts({ search: { _id: params.id } });

	if (!product || !product.length) notFound();
	const { title, category, price, descr, images } = product[0];

	const imagesArr = images.map((image: string, index: number) => ({
		src: `${process.env.NEXT_PUBLIC_UPLOADTHING_BASE_URL}${image}`,
		alt: `${title} ${index + 1}`,
	}));

	return (
		<div className='flex flex-wrap lg:flex-nowrap justify-center lg:px-10 pb-10'>
			<div className='basis-full lg:basis-auto text-center'>
				<Slider images={imagesArr} />
			</div>
			<div className='flex flex-col flex-wrap w-full px-4 lg:px-10 lg:ml-5'>
				<h1 className='font-semibold text-4xl'>{title}</h1>
				<h2 className='mb-4 opacity-50 font-semibold'>{category}</h2>
				<p className='mb-4'>{descr}</p>
				<p className='font-semibold text-lg mb-8 lg:mb-4 text-[var(--red-price)]'>
					&#8364;{price}
				</p>

				<AddToCartBtn product={product[0]} style='lg:self-auto' />
			</div>
		</div>
	);
}
