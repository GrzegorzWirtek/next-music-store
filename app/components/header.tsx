import Logo from './Logo';
import Nav from './Nav';

export default function Header() {
	return (
		<header className='sticky z-10 top-0 left-0 w-full basis-full flex flex-wrap items-center gap-8 px-8 py-5 bg-[var(--red)]'>
			<Logo />
			<Nav />
		</header>
	);
}
