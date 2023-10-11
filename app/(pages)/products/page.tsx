import getProducts from '@/utils/getProducts';
import ProductsList from '@/components/productsList';
import { plaifairDisplay } from '@/utils/fonts';

export default async function Products() {
	const limit = 8;
	const products = await getProducts(limit);

	return (
		<div className='mx-auto max-w-7xl'>
			<h2
				className={`${plaifairDisplay.className} text-center text-3xl mb-4 font-semibold`}>
				All products
			</h2>
			<ProductsList products={products} limit={limit} />
		</div>
	);
}
