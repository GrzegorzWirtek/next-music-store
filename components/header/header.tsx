import Cart from './cart';
import Logo from './logo';
import Nav from './nav';
import Search from './search';

export default function Header() {
	return (
		<header
			className='h-28 lg:h-auto sticky z-10 top-0 left-0 w-full basis-full flex flex-wrap items-center justify-between lg:gap-8 px-2 lg:px-8 py-2 lg:py-5 bg-[var(--red)]'
			id='yo'>
			<Logo />
			<Nav />
			<Search />
			<Cart />
		</header>
	);
}