import { CartItem } from '@/app/context/types';
import Image from 'next/image';
import add from '@/public/add.svg';
import remove from '@/public/remove.svg';
import deleteImg from '@/public/delete.svg';
import { useAppContext } from '@/app/context/AppContext';

export default function CartContent() {
	const { products, deleteById, increaseNr, decreaseNr } = useAppContext();
	return (
		<>
			{products?.map((product) => (
				<div
					className='grid grid-cols-2 grid-rows-[auto_1fr_auto] mb-1 p-4 bg-white rounded-md'
					key={product.id}>
					<div className='relative col-start-1 col-end-2 row-start-1 row-end-3 h-28 w-28'>
						<Image
							className='object-contain'
							src={`${process.env.NEXT_PUBLIC_UPLOADTHING_BASE_URL}${product.imgUrl}`}
							alt={product.title}
							fill
						/>
					</div>
					<h2 className='col-start-2 col-end-3 self-start font-medium'>
						{product.title}
					</h2>
					<p className='col-start-2 col-end-3 text-[var(--red-price)] font-medium'>
						&#8364;{product.price * product.number}
					</p>
					<div className='flex items-center col-start-1 col-end-3 mt-3 pt-3 border-t border-neutral-300'>
						<button className='px-2' onClick={() => increaseNr(product.id)}>
							<Image src={add} alt='Add' />
						</button>
						<p className='text-xl w-10 text-center'>{product.number}</p>
						<button className='px-2' onClick={() => decreaseNr(product.id)}>
							<Image src={remove} alt='Remove' />
						</button>
						<button
							className='px-2 ml-auto'
							onClick={() => deleteById(product.id)}>
							<Image src={deleteImg} alt='Delete' />
						</button>
					</div>
				</div>
			))}
		</>
	);
}
