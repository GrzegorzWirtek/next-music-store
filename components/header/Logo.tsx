import Image from 'next/image';
import logo from '@/public/logo.svg';
import { shrikhand } from '@/utils/fonts';
import Link from 'next/link';

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
