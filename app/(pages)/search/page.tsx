import NoResults from '@/components/no-results';
import { Product as ProductProps } from '@/utils/types';
import { getProducts } from '@/utils/getProducts';

import { SearchParams } from '@/utils/types';
import ProductsList from '@/components/ProductsList';

export default async function Search({ searchParams }: SearchParams) {
	const { search, category } = searchParams;
	const searchValue = search ? search : category;
	const limit = parseInt(process.env.NEXT_PUBLIC_PAGES_LIMIT!);

	const searchKeys = [];

	for (const key in searchParams) {
		searchKeys.push(key);
	}

	const searchByPhraze = { key: searchKeys[0], param: searchValue };

	const products: ProductProps[] = await getProducts({
		searchByPhraze,
	});

	if (!products.length) return <NoResults value={searchValue} />;

	return (
		<div className='flex flex-wrap justify-center min-h-full'>
			<ProductsList
				products={products}
				limit={limit}
				searchByPhraze={searchByPhraze}
			/>
		</div>
	);
}
