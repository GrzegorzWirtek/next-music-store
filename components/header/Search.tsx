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
				className='absolute top-0 right-0 h-full aspect-square border-l-2 rounded-r-md box-content hover:bg-gray-200'
				type='submit'>
				<Image className='p-1' alt='Search' src={search} fill />
			</button>
		</form>
	);
}
