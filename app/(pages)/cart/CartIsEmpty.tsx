import { plaifairDisplay } from '@/utils/fonts';
import cart from '@/public/shopping-cart-black.png';
import Image from 'next/image';

export default function CartIsEmpty() {
	return (
		<div className='flex justify-center w-[95vw] max-w-[400px] mx-auto'>
			<Image src={cart} alt='Shopping cart' className='w-9 h-9 mr-2' />
			<p className={`${plaifairDisplay.className} text-3xl mb-4 font-semibold`}>
				Cart is empty
			</p>
		</div>
	);
}
