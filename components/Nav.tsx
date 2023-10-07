'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import disablingScroll from '@/utils/disablingScroll';
import Ham from './Ham';

export default function Nav() {
	const NAV_ITEMS = ['Products', 'Categories', 'Contact'];
	const MIN_WIDHT_DESKTOP = 1024;
	const [mobileNavActive, setMobileNavActive] = useState(false);

	const toggleMobileNav = () => {
		setMobileNavActive((prev) => !prev);
	};

	useEffect(() => {
		const media = window.matchMedia(`(min-width: ${MIN_WIDHT_DESKTOP}px)`);
		disablingScroll(mobileNavActive);
		if (mobileNavActive !== true) return;
		const listener = () => setMobileNavActive(!media.matches);
		window.addEventListener('resize', listener);
		return () => window.removeEventListener('resize', listener);
	}, [mobileNavActive]);

	return (
		<nav className='lg:grow max-w-[20%] lg:max-w-full'>
			<Ham
				mobileNavActive={mobileNavActive}
				toggleMobileNav={toggleMobileNav}
			/>
			<ul
				className={`fixed lg:static -left-full top-28 w-full min-h-[40vh] lg:min-h-min pb-10 pt-10 lg:p-0 lg:h-auto lg:-translate-x-0 lg:transition-none transition-transform lg:duration-0 lg:w-auto flex flex-col items-center justify-center lg:justify-start lg:flex-row lg:flex-wrap gap-4 bg-[var(--red)] blur-none ${
					mobileNavActive && 'translate-x-full'
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
