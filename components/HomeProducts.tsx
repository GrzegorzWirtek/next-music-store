import Image from 'next/image';
import img1 from '@/public/trumpet.png';
import img2 from '@/public/violin.png';
import img3 from '@/public/guitar.png';
import Button from './Button';

export default function HomeProducts() {
	return (
		<section className='flex flex-wrap gap-10 justify-center mt-24 mb-60'>
			<div className='max-w-[300px] flex flex-col items-center pb-10 bg-gradient-to-b from-[var(--white-transparent)] to-transparent rounded-lg transition-hover duration-200 hover:shadow-hover'>
				<Image
					className='h-auto w-auto object-contain transition-hover ease-in-out duration-500 hover:scale-105 cursor-pointer p-10'
					alt='a'
					src={img2}
				/>
				<div className='text-center mr-3'>
					<p>Very good piano</p>
					<p>&#8364;4500</p>
				</div>
				<Button textContent='Add to cart' />
			</div>
			<div className='max-w-[300px] flex flex-col items-center pb-10 bg-gradient-to-b from-[var(--white-transparent)] to-transparent rounded-lg transition-hover duration-200 hover:shadow-hover'>
				<Image
					className='h-auto w-auto object-contain transition-hover ease-in-out duration-500 hover:scale-105 cursor-pointer p-10'
					alt='a'
					src={img1}
				/>
				<div className='text-center mr-3'>
					<p>Very good piano</p>
					<p>&#8364;4500</p>
				</div>
				<Button textContent='Add to cart' />
			</div>
			<div className='max-w-[300px] flex flex-col items-center pb-10 bg-gradient-to-b from-[var(--white-transparent)] to-transparent rounded-lg transition-hover duration-200 hover:shadow-hover'>
				<Image
					className='h-auto w-auto object-contain transition-hover ease-in-out duration-500 hover:scale-105 cursor-pointer p-10'
					alt='a'
					src={img3}
				/>
				<div className='text-center mr-3'>
					<p>Very good piano</p>
					<p>&#8364;4500</p>
				</div>
				<Button textContent='Add to cart' />
			</div>
		</section>
	);
}
