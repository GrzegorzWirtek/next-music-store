import NoResults from '@/components/no-results';
import { Product as ProductProps } from '@/utils/types';
import { getProducts } from '@/utils/getProducts';

import { SearchParams } from '@/utils/types';
import ProductsList from '@/components/ProductsList';

export default async function Search({ searchParams }: SearchParams) {
	const { search, category } = searchParams;
	const searchValue = search ? search : category;
	const limit = parseInt(process.env.NEXT_PUBLIC_PAGES_LIMIT!);

	const searchByPhraze = { value: searchValue };
	const searchByCategory = { value: searchValue };
	const searchObj = search ? { searchByPhraze } : { searchByCategory };

	const products: ProductProps[] = await getProducts(searchObj);

	if (!products.length) return <NoResults value={searchValue} />;

	return (
		<div className='flex flex-wrap justify-center min-h-full'>
			<ProductsList
				products={products}
				limit={limit}
				searchByPhraze={searchByPhraze}
				searchByCategory={searchByCategory}
			/>
		</div>
	);
}
