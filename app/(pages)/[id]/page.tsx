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
		<div>
			<p>{title}</p>
			<p>{price}</p>
			<p>{descr}</p>
			<div className='relative max-w-[300px] aspect-square'>
				<Slider images={imagesArr} />
			</div>
		</div>
	);
}
