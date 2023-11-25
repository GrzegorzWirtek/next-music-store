'use client';
import search from '@/public/search.svg';
import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import * as NProgress from 'nprogress';

export default function Search() {
	const [inputValue, setInputValue] = useState('');
	const [currentValue, setCurrentValue] = useState('');
	const router = useRouter();
	const inputRef = useRef<HTMLInputElement | null>(null);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		inputRef?.current?.blur();

		if (currentValue !== inputValue) {
			NProgress.start();
		}

		setCurrentValue(inputValue);
		router.push(`/search/${inputValue}`);
		setInputValue('');
	};

	return (
		<form className='relative max-w-[60%] z-2' onSubmit={handleSubmit}>
			<input
				ref={inputRef}
				type='text'
				className='w-full pl-4 border-inherit rounded-md outline-none transition-focus duration-100 focus:drop-shadow-hover text-xl lg:text-base'
				placeholder='Search'
				required
				onChange={(e) => setInputValue(e.target.value)}
				value={inputValue}
			/>
			<button
				className='absolute pl-[6px] top-1 right-2 bottom-1 h-[calc(100%-8px)] aspect-square rounded-r-md border-l-2'
				type='submit'>
				<svg
					className='group scale-150 lg:scale-[2]'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 50 50'>
					<path
						className={`fill-gray-400 group-hover:fill-gray-600 transition-hover duration-100`}
						d='M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z'
					/>
				</svg>
			</button>
		</form>
	);
}
