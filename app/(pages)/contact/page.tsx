import Image from 'next/image';
import logo from '@/public/logo-black.svg';
import { shrikhand } from '@/utils/fonts';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faPhone, faEnvelope);

export default function Contact() {
	return (
		<div className='flex flex-col items-center gap-y-2'>
			<div className='text-center'>
				<div className='flex justify-center mb-4'>
					<Image className='w-[28px] lg:w-[36px]' alt='Store logo' src={logo} />
					<h2
						className={`${shrikhand.className} text-2xl lg:text-3xl tracking-tight`}>
						Next Music Store
					</h2>
				</div>
				<p className='text-lg lg:text-xl'>ul. Sklepowa 3/14</p>
				<p className='text-lg lg:text-xl mb-4'>00-123 Warszawa</p>
				<a
					className='text-lg lg:text-xl font-bold flex justify-center transition-hover duration-200 hover:text-[var(--black-hover)]'
					href='mailto:'>
					<FontAwesomeIcon icon={faEnvelope} className='w-3 lg:w-4 mr-2' />
					nextmusicstore@.ggg.com
				</a>
				<a
					className='text-lg lg:text-xl font-bold flex justify-center transition-hover duration-200 hover:text-[var(--black-hover)]'
					href='tel:+000'>
					<FontAwesomeIcon icon={faPhone} className='w-3 lg:w-4 mr-2' />
					000-000-000
				</a>
			</div>
			<div className='border-2 w-full max-w-[700px] h-[400px] mt-4 bg-gray-200 rounded-md overflow-hidden'>
				<iframe
					className='w-full h-full border-none'
					src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13824.94565282042!2d21.009902416932206!3d52.22652216704632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1698768762823!5m2!1spl!2spl'></iframe>
			</div>
		</div>
	);
}
