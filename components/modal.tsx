'use client';

import Link from 'next/link';
import disableScroll from '@/utils/disableScroll';
import enableScroll from '@/utils/enableScroll';
import { useEffect } from 'react';
import { useAppContext } from '@/app/context/AppContext';

export default function Modal() {
	const { deactivateModal } = useAppContext();

	useEffect(() => {
		disableScroll();
	}, []);

	const handleCloseModal = () => {
		enableScroll();
		deactivateModal();
	};

	return (
		<div className='fixed top-0 right-0 w-full h-full flex justify-center items-center bg-[var(--black-transparent)] backdrop-blur-sm z-20'>
			<div
				className='relative flex flex-col justify-center items-center max-w-[400px] p-10 bg-white z-20'
				onClick={handleCloseModal}>
				<h3>This product is already added to cart</h3>
				<Link href='/cart'>Go to cart</Link>
				<button>Continue shopping</button>
			</div>
		</div>
	);
}
