import { getProducts } from '@/utils/getProducts';
import ProductsList from '@/components/ProductsList';
import { plaifairDisplay } from '@/utils/fonts';
import { SortParams } from '@/utils/types';
import Sort from '@/components/filters/Sort';

export default async function Products({ searchParams }: SortParams) {
	const limit = 4;
	const sort = searchParams;

	const products = await getProducts({ limit, sort });

	return (
		<div className='max-w-7xl'>
			<h2
				className={`${plaifairDisplay.className} text-center text-4xl my-10 font-semibold`}>
				All products
			</h2>
			<Sort />
			<ProductsList products={products} limit={limit} sort={sort} />
		</div>
	);
}
