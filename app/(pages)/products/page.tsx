import getProducts from '@/utils/getProducts';
import Product from '@/components/product';
import { Product as ProductProps } from '@/utils/types';
import { plaifairDisplay } from '@/utils/fonts';

export default async function Products() {
	const products = await getProducts();

	return (
		<div className='max-w-7xl mx-auto mt-20 flex flex-wrap'>
			<h2
				className={`${plaifairDisplay.className} basis-full text-center text-3xl mb-4 font-semibold`}>
				All products
			</h2>
			{products.map((product: ProductProps) => (
				<Product key={product._id} product={product} />
			))}
		</div>
	);
}
