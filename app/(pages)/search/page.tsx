import NoResults from '@/components/no-results';
import { Product as ProductProps } from '@/utils/types';
import Product from '@/components/product';
import getProducts from '@/utils/getProducts';

import { SearchParams } from '@/utils/types';

export default async function Search({ searchParams }: SearchParams) {
	const { search, category } = searchParams;
	const searchValue = search ? search : category;

	let searchKey = '';
	for (const key in searchParams) {
		searchKey = key;
	}
	const searchValueRegex = {
		[searchKey]: { $regex: new RegExp(searchValue), $options: 'i' },
	};

	const products: ProductProps[] = await getProducts({
		search: searchValueRegex,
	});

	if (!products.length) return <NoResults value={searchValue} />;

	return (
		<div className='flex flex-wrap justify-center min-h-full'>
			{products.map((product) => (
				<Product key={product._id} product={product} />
			))}
		</div>
	);
}