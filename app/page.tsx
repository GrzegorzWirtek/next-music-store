import HomeHeader from '../components/HomeHeader';
import getProducts from '@/utils/getProducts';

export default async function Home() {
	const products = await getProducts();

	return (
		<main className='max-w-7xl m-auto'>
			<HomeHeader products={products} />
		</main>
	);
}
