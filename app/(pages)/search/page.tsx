import NoResults from '@/components/no-results';
import { Product as ProductProps } from '@/utils/types';
import Product from '@/components/product';
import getProducts from '@/utils/getProducts';

import { SearchParams } from '@/utils/types';

export default async function Search({ searchParams }: SearchParams) {
	const searchValue = searchParams.v;
	const products: ProductProps[] = await getProducts(10, {
		search: searchValue,
	});

	if (!products.length) return <NoResults />;

	return (
		<div className='flex flex-wrap justify-center min-h-full'>
			{products.map((product) => (
				<Product key={product._id} product={product} />
			))}
		</div>
	);
}
