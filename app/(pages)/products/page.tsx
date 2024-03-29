import { getProducts } from '@/utils/getProducts';
import ProductsList from '@/components/ProductsList';
import { plaifairDisplay } from '@/utils/fonts';

export default async function Products() {
	const limit = parseInt(process.env.NEXT_PUBLIC_PAGES_LIMIT!);

	const products = await getProducts({ limit });

	return (
		<div className='max-w-7xl'>
			<ProductsList products={products} limit={limit} />
		</div>
	);
}
