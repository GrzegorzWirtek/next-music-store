import getProducts from '@/utils/getProducts';
import Product from './Product';
import { ProductProps } from '@/utils/types';

export default async function HomeProducts() {
	const products = await getProducts();

	return (
		<section className='flex flex-wrap gap-10 justify-center mt-24 mb-60'>
			{products.map((product: ProductProps) => (
				<Product key={product._id} product={product} />
			))}
		</section>
	);
}
