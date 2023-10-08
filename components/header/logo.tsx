import Image from 'next/image';
import logo from '@/public/logo.svg';
import { Shrikhand } from 'next/font/google';
import Link from 'next/link';

const shrikhand = Shrikhand({ subsets: ['latin'], weight: ['400'] });

export default function Logo() {
	return (
		<Link
			href={'/'}
			as='/'
			className=' flex items-center basis-full justify-center lg:basis-auto cursor-pointer'>
			<Image
				className='drop-shadow-logo w-[25px] lg:w-[30px]'
				alt='Store logo'
				src={logo}
			/>
			<h1
				className={`${shrikhand.className} text-xl lg:text-2xl tracking-tight text-[var(--light-gray)] drop-shadow-logo`}>
				Next Music Store
			</h1>
		</Link>
	);
}
