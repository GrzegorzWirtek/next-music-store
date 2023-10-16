'use client';
import search from '@/public/search.svg';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Search() {
	const [inputValue, setInputValue] = useState('');
	const router = useRouter();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		router.push(`/search?search=${inputValue}`);
		setInputValue('');
	};

	return (
		<form className='relative max-w-[60%]' onSubmit={handleSubmit}>
			<input
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
