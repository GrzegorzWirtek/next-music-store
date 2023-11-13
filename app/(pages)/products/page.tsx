import { getProducts } from '@/utils/getProducts';
import ProductsList from '@/components/ProductsList';
import { plaifairDisplay } from '@/utils/fonts';

export default async function Products() {
	const limit = 12;
	const products = await getProducts({ limit });

	return (
		<div className='max-w-7xl'>
			<h2
				className={`${plaifairDisplay.className} text-center text-4xl my-10 font-semibold`}>
				All products
			</h2>
			<ProductsList products={products} limit={limit} />
		</div>
	);
}
