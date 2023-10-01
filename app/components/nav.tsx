'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import useResize from '@/utils/useResize';

const HAM_ITEMS = Array(3).fill(null);
const NAV_ITEMS = ['Products', 'Categories', 'Contact'];

export default function Nav() {
	const [mobileNavActive, setMobileNavActive] = useState(false);
	const isDesktopSize = useResize();
	useEffect(() => {
		setMobileNavActive(isDesktopSize);
	}, [isDesktopSize]);

	return (
		<nav className='grow'>
			<div
				className='flex md:hidden w-8 h-5 flex-col justify-between cursor-pointer'
				onClick={() => setMobileNavActive((prev) => !prev)}>
				{HAM_ITEMS.map((_, index) => (
					<div key={index} className='h-0.5 w-full rounded-3xl bg-white'></div>
				))}
			</div>
			<ul
				className={`absolute md:static top-[150px] -left-full w-full md:-translate-x-0 md:transition-none transition-transform  md:duration-0 md:w-auto bg-blue-600 flex flex-col md:flex-row md:flex-wrap gap-4 ${
					mobileNavActive ? 'translate-x-full' : 'null'
				}`}>
				{NAV_ITEMS.map((item) => (
					<li key={item}>
						<Link
							href={`/${item.toLocaleLowerCase()}`}
							className='text-white transition-hover duration-200 md:hover:drop-shadow-hover'>
							{item}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}
