import Image from 'next/image';
import cart from '@/public/shopping-cart.png';

export default function Cart() {
	return (
		<Image
			className='max-w-[20%] lg:max-w-full w-9 lg:w-7 cursor-pointer transition-hover duration-200 md:hover:drop-shadow-hover'
			alt='Shopping cart'
			src={cart}
		/>
	);
}
