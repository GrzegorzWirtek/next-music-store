import HomeHeader from '../components/HomeHeader';
import getProducts from '@/utils/getProducts';
import Product from '@/components/Product';
import { ProductProps } from '@/utils/types';

export default async function Home() {
	const products = await getProducts();
	const mainIndex = products.findIndex(
		(product: ProductProps) => product.main === true,
	);
	const mainProduct = products.splice(mainIndex, 1);

	return (
		<main className='max-w-7xl m-auto'>
			<HomeHeader mainProduct={mainProduct[0]} />
			<section className='flex flex-wrap gap-10 justify-center mt-24 mb-60'>
				{products.map((product: ProductProps) => (
					<Product key={product._id} product={product} />
				))}
			</section>
		</main>
	);
}
