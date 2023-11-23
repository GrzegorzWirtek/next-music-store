import { getProducts } from '@/utils/getProducts';
import { notFound } from 'next/navigation';
import { SearchParams } from '@/utils/types';
import ProductsList from '@/components/ProductsList';

export default async function Search({ params }: SearchParams) {
	const limit = parseInt(process.env.NEXT_PUBLIC_PAGES_LIMIT!);

	const products = await getProducts({
		searchByPhraze: { search: params.search },
	});

	if (!products || !products.length) notFound();

	return (
		<div className='flex flex-wrap lg:flex-nowrap justify-center lg:px-10 pb-10'>
			<ProductsList
				products={products}
				limit={limit}
				searchByPhraze={{ search: params.search }}
			/>
		</div>
	);
}
