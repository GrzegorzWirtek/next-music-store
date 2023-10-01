'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Nav() {
	const HAM_ITEMS = Array(3).fill(null);
	const NAV_ITEMS = ['Products', 'Categories', 'Contact'];
	const MIN_WIDHT_DESKTOP = 1024;
	const [mobileNavActive, setMobileNavActive] = useState(false);

	useEffect(() => {
		const media = window.matchMedia(`(min-width: ${MIN_WIDHT_DESKTOP}px)`);
		if (mobileNavActive !== true) return;
		const listener = () => setMobileNavActive(!media.matches);
		window.addEventListener('resize', listener);
		return () => window.removeEventListener('resize', listener);
	}, [mobileNavActive]);

	return (
		<nav className='lg:grow max-w-[20%] lg:max-w-full'>
			<div
				className='flex lg:hidden w-8 h-5 p-2 box-content flex-col justify-between cursor-pointer'
				onClick={() => setMobileNavActive((prev) => !prev)}>
				{HAM_ITEMS.map((_, index) => (
					<div key={index} className='h-0.5 w-full rounded-3xl bg-white'></div>
				))}
			</div>
			<ul
				className={`absolute lg:static -left-full top-32 w-full h-[40vh] pb-10 lg:p-0 lg:h-auto lg:-translate-x-0 lg:transition-none transition-transform lg:duration-0 lg:w-auto flex flex-col items-center justify-center lg:justify-start lg:flex-row lg:flex-wrap gap-4 bg-[var(--red)] ${
					mobileNavActive ? 'translate-x-full' : 'null'
				}`}>
				{NAV_ITEMS.map((item) => (
					<li className='mb-3 lg:mb-auto' key={item}>
						<Link
							href={`/${item.toLocaleLowerCase()}`}
							className='text-white transition-hover duration-200 text-xl lg:text-base lg:hover:drop-shadow-hover'>
							{item}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}
