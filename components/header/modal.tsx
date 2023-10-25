'use client';

import Link from 'next/link';
import disableScroll from '@/utils/disableScroll';
import enableScroll from '@/utils/enableScroll';
import { useEffect } from 'react';
import { useAppContext } from '@/app/context/AppContext';
import Image from 'next/image';

export default function Modal() {
	const { deactivateModal, modalContent } = useAppContext();
	const { text, title, price, imgUrl } = modalContent;

	useEffect(() => {
		disableScroll();
	}, []);

	const handleCloseModal = () => {
		enableScroll();
		deactivateModal();
	};

	return (
		<div className='fixed top-0 right-0 w-full h-full flex justify-center items-center bg-[var(--modal-background-color)] backdrop-blur-sm z-20'>
			<div
				className='relative grid grid-cols-2 w-full max-w-[400px] p-10 mx-4 bg-white z-20 rounded-md'
				onClick={handleCloseModal}>
				<h2 className='col-start-1 col-end-3 mb-6 pb-4 border-b-[1px] border-neutral-300 text-center text-xl font-medium'>
					{text}
				</h2>
				<Image
					className='col-start-1 col-end-2 row-start-2 row-end-5 mb-6 rounded-md'
					src={`${process.env.NEXT_PUBLIC_UPLOADTHING_BASE_URL}${imgUrl}`}
					alt={'Product added to cart'}
					width={96}
					height={96}
					priority
				/>
				<h3 className='self-start col-start-2 col-end-3 font-medium'>
					{title}
				</h3>
				<p className='col-start-2 col-end-3 text-[var(--red-price)] font-medium'>
					&#8364;{price}
				</p>
				<button className='col-start-1 col-end-3 mb-4 bg-[var(--blue)] transition-hover duration-200 hover:bg-[var(--blue-lighter)] text-white py-2 rounded-md'>
					Continue shopping
				</button>
				<Link
					className='col-start-1 col-end-3 text-center bg-[var(--red)] transition-hover duration-200 hover:bg-[var(--red-lighter)] text-white py-2 rounded-md'
					href='/cart'>
					Go to cart
				</Link>
			</div>
		</div>
	);
}
