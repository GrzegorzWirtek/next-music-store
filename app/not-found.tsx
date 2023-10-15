import Image from 'next/image';
import err404 from '@/public/error-404.png';
import Link from 'next/link';

export default function NotFound() {
	return (
		<div className='fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center z-20 bg-[var(--yellow)]'>
			<Image className='w-16' alt='Page not found' src={err404} />
			<h2 className='min-w-[300px] mt-2 mb-16 pl-4 pr-4 text-lg text-center'>{`Sorry, that page doesn't exist`}</h2>
			<Link
				className={`bg-[var(--blue)] hover:bg-[var(--blue-lighter)] transition-hover duration-200 text-white py-2 px-4 rounded-lg`}
				href='/'>
				Home page
			</Link>
		</div>
	);
}
