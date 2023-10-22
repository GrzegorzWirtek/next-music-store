'use client';

import Link from 'next/link';
import { ModalProps } from '@/utils/types';
import disableScroll from '@/utils/disableScroll';
import enableScroll from '@/utils/enableScroll';
import { useEffect } from 'react';

export default function Modal({ handleClose }: ModalProps) {
	useEffect(() => {
		disableScroll();
	}, []);

	return (
		<div
			className='fixed top-0 right-0 w-full h-full flex justify-center items-center bg-[var(--black-transparent)] backdrop-blur-sm z-20'
			onClick={() => enableScroll()}>
			<div className='flex flex-col justify-center items-center max-w-[400px] p-10 bg-white '>
				<h3>This product is already added to cart</h3>
				<Link href='/cart'>Go to cart</Link>
				<button onClick={handleClose}>Continue shopping</button>
			</div>
		</div>
	);
}
