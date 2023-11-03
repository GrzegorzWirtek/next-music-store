'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import disableScroll from '@/utils/disableScroll';
import enableScroll from '@/utils/enableScroll';
import addBodyBlur from '@/utils/addBodyBlur';
import removeBodyBlur from '@/utils/removeBodyBlur';
import Ham from './Ham';
import Logo from './Logo';
import Modal from './Modal';
import { useAppContext } from '@/app/context/AppContext';

export default function Nav() {
	const NAV_ITEMS = ['Products', 'Categories', 'Contact'];
	const MIN_WIDHT_DESKTOP = 1024;
	const [mobileNavActive, setMobileNavActive] = useState(false);
	const { isModalActive } = useAppContext();

	const openMobileNav = () => {
		setMobileNavActive((prev) => !prev);
	};

	const closeMobileNav = () => {
		if (!mobileNavActive) return;
		setMobileNavActive(false);
	};

	useEffect(() => {
		const media = window.matchMedia(`(min-width: ${MIN_WIDHT_DESKTOP}px)`);
		if (mobileNavActive) {
			disableScroll();
			addBodyBlur();
		} else {
			enableScroll();
			removeBodyBlur();
			return;
		}

		const listener = () => setMobileNavActive(!media.matches);
		window.addEventListener('resize', listener);
		return () => window.removeEventListener('resize', listener);
	}, [mobileNavActive]);

	return (
		<>
			{isModalActive && <Modal />}
			<nav
				className='lg:grow max-w-[20%] lg:max-w-full'
				onClick={closeMobileNav}>
				<Ham
					mobileNavActive={mobileNavActive}
					toggleMobileNav={openMobileNav}
				/>
				<ul
					className={`fixed lg:static -left-full top-0 w-full min-h-[50vh] lg:min-h-min pb-10 pt-10 lg:p-0 lg:h-auto lg:-translate-x-0 lg:transition-none transition-transform lg:duration-0 lg:w-auto flex flex-col items-center justify-center lg:justify-start lg:flex-row lg:flex-wrap gap-4 bg-[var(--red)] blur-none z-10 ${
						mobileNavActive && 'translate-x-full'
					}`}>
					{mobileNavActive && (
						<li className='mb-5 pb-10 border-b-[1px]'>{<Logo />}</li>
					)}
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
		</>
	);
}
