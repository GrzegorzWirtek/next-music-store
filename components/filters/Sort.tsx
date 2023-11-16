'use client';

import { usePathname, useSearchParams, useRouter } from 'next/navigation';

export default function Sort() {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const paramSearch = searchParams.get('search');
	const paramCategory = searchParams.get('category');

	const handleClick = () => {
		if (pathname === '/products') {
			router.push(`/products?&price=asc`);
		} else if (paramSearch) {
			router.push(`/search?search=${paramSearch}&price=asc`);
		} else if (paramCategory) {
			router.push(`/search?category=${paramCategory}&price=asc`);
		}
	};

	const handleClickDesc = () => {
		if (pathname === '/products') {
			router.push(`/products?price=desc`);
		} else if (paramSearch) {
			router.push(`/search?search=${paramSearch}&price=desc`);
		} else if (paramCategory) {
			router.push(`/search?category=${paramCategory}&price=desc`);
		}
	};

	return (
		<div className='text-center basis-full cursor pointer'>
			<button
				className='bg-[var(--blue)] text-white px-8 py-2'
				onClick={handleClick}>
				SORT
			</button>
			<button
				className='bg-[var(--blue)] text-white px-8 py-2'
				onClick={handleClickDesc}>
				SORT desc
			</button>
		</div>
	);
}
