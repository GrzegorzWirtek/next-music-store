import getProducts from '@/utils/getProducts';
import { notFound } from 'next/navigation';
import { IdParams } from '@/utils/types';
import Slider from '@/components/slider';

export default async function ProductId({ params }: IdParams) {
	const product = await getProducts({ search: { _id: params.id } });

	if (!product || !product.length) notFound();
	const { title, price, descr, images } = product[0];

	const imagesArr = images.map((image: string, index: number) => ({
		src: `${process.env.NEXT_PUBLIC_UPLOADTHING_BASE_URL}${image}`,
		alt: `${title} ${index + 1}`,
	}));

	return (
		<div className='flex flex-wrap lg:flex-nowrap justify-center lg:px-10'>
			<div className='basis-full lg:basis-auto text-center'>
				<Slider images={imagesArr} />
			</div>
			<div className='px-10'>
				<p>{title}</p>
				<p>{price}</p>
				<p>{descr}</p>
			</div>
		</div>
	);
}
