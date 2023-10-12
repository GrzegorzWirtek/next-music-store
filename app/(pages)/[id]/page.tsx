import getProducts from '@/utils/getProducts';
import { notFound } from 'next/navigation';
import Image from 'next/image';

export default async function ProductId({ params }: any) {
	const product = await getProducts(1, { _id: params.id });
	if (!product || !product.length) notFound();
	const { title, price, descr, images } = product[0];

	const imgUrl = `${process.env.NEXT_PUBLIC_UPLOADTHING_BASE_URL}${images[0]}`;

	return (
		<div>
			<p>{title}</p>
			<p>{price}</p>
			<p>{descr}</p>
			<div className='relative max-w-[300px] aspect-square'>
				<Image className='object-contain' alt={title} src={imgUrl} fill />
			</div>
		</div>
	);
}
