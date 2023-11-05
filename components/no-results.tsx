'use client';
import noResults from '@/public/no-search-results.png';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import * as NProgress from 'nprogress';

export default function NoResults({ value }: { value: string }) {
	useEffect(() => {
		NProgress.done();
	}, []);

	return (
		<div className='flex flex-col justify-center items-center z-20 bg-[var(--yellow)]'>
			<Image className='w-16' alt='Page not found' src={noResults} />
			<h2 className='min-w-[300px] mt-2 mb-16 pl-4 pr-4 text-lg text-center'>
				Sorry, no product matches <strong>{`"${value}"`}</strong>
			</h2>
			<Link
				className={`bg-[var(--blue)] hover:bg-[var(--blue-lighter)] transition-hover duration-200 text-white py-2 px-4 rounded-lg`}
				href='/'>
				Go back to Home page
			</Link>
		</div>
	);
}
