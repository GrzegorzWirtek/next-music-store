import Image from 'next/image';
import cart from '@/public/shopping-cart.png';

export default function Cart() {
	return (
		<Image
			className='cursor-pointer transition-hover duration-200 md:hover:drop-shadow-hover'
			alt='Shopping cart'
			src={cart}
			width={25}
			height={25}
		/>
	);
}
