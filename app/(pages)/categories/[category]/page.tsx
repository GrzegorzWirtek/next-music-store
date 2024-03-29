import { getProducts } from '@/utils/getProducts';
import { notFound } from 'next/navigation';
import { CategoryParams } from '@/utils/types';
import ProductsList from '@/components/ProductsList';

export default async function Category({ params }: CategoryParams) {
	const limit = parseInt(process.env.NEXT_PUBLIC_PAGES_LIMIT!);

	const products = await getProducts({
		searchByCategory: { category: params.category },
	});

	if (!products || !products.length) notFound();

	return (
		<ProductsList
			products={products}
			limit={limit}
			searchByCategory={{ category: params.category }}
		/>
	);
}
