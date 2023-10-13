'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Search() {
	const [inputValue, setInputValue] = useState('');
	const router = useRouter();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log('input', inputValue);
		router.push(`/search?v=${inputValue}`);
		setInputValue('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type='search'
				className='max-w-[60%] pl-6 border rounded-full outline-none transition-focus duration-100 focus:drop-shadow-hover text-xl lg:text-base'
				placeholder='Search'
				required
				onChange={(e) => setInputValue(e.target.value)}
				value={inputValue}></input>
			<button className='bg-yellow-200 px-2' type='submit'>
				{'->'}
			</button>
		</form>
	);
}
