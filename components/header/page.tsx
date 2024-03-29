import Cart from './Cart';
import Logo from './Logo';
import Nav from './Nav';
import Search from './Search';

export default function Header() {
	return (
		<header
			id='nav'
			className='h-28 lg:h-20 sticky z-10 top-0 left-0 w-full basis-full flex flex-wrap items-center justify-between lg:gap-8 px-2 lg:px-8 py-2 lg:py-5 bg-[var(--red)]'>
			<Logo />
			<Nav />
			<Search />
			<Cart />
		</header>
	);
}
