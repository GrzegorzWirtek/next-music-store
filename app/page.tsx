import HomeHeader from './components/HomeHeader';
import HomeProducts from './components/HomeProducts';

export default function Home() {
	return (
		<main className='max-w-7xl m-auto'>
			<HomeHeader />
			<HomeProducts />
		</main>
	);
}
