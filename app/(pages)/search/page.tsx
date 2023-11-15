import NoResults from '@/components/no-results';
import { Product as ProductProps, Sort as SortType } from '@/utils/types';
import Product from '@/components/Product';
import { getProducts } from '@/utils/getProducts';

import { SearchParams } from '@/utils/types';
import Sort from '@/components/filters/Sort';

export default async function Search({ searchParams }: SearchParams) {
	const { search, category, price: priceValue } = searchParams;
	const searchValue = search ? search : category;

	const searchKeys = [];

	for (const key in searchParams) {
		searchKeys.push(key);
	}

	const searchValueRegex = {
		[searchKeys[0]]: { $regex: new RegExp(searchValue), $options: 'i' },
	};

	const sortValue = {
		price: priceValue,
	} as SortType;

	const products: ProductProps[] = await getProducts({
		search: searchValueRegex,
		sort: sortValue,
	});

	if (!products.length) return <NoResults value={searchValue} />;

	return (
		<div className='flex flex-wrap justify-center min-h-full'>
			<Sort />
			{products.map((product) => (
				<Product key={product._id} product={product} />
			))}
		</div>
	);
}
