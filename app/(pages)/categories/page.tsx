import Image from 'next/image';
import { plaifairDisplay } from '@/utils/fonts';

const categories = ['string', 'brass', 'woodwind', 'percussion', 'keyboard'];

export default function Categories() {
	return (
		<div className='flex flex-row flex-wrap justify-center items-center gap-3'>
			<h2
				className={`${plaifairDisplay.className} basis-full text-center text-3xl mb-4 font-semibold`}>
				Categories
			</h2>
			{categories.map((category) => (
				<div
					className='w-[150px] h-[185px] flex flex-wrap items-end justify-center p-3 rounded-md transition-hover duration-200 bg-gradient-to-b from-[var(--white-transparent)] to-transparent bg-[var(--black-transparent)] cursor-pointer group hover:shadow-hover'
					key={category}>
					<Image
						className='p-2 transition-transform duration-300 w-full h-auto group-hover:scale-105'
						alt={category}
						src={`/${category}.png`}
						height={0}
						width={0}
						sizes='100vw'
						priority
					/>
					<h3 className='text-center font-semibold'>{`${category
						.charAt(0)
						.toUpperCase()}${category.slice(1)}`}</h3>
				</div>
			))}
		</div>
	);
}
