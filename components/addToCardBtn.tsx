'use client';

import { Product } from '@/utils/types';
import { useAppContext } from '@/app/context/AppContext';

export default function AddToCartBtn({
	product,
	style,
}: {
	product: Product;
	style?: string;
}) {
	const { products, addToCart, activateModal } = useAppContext();

	const { _id, title, price, images } = product;

	const handleAddToCart = () => {
		const productToAdd = {
			id: _id,
			title,
			price,
			number: 1,
			imgUrl: images[0],
		};
		const isAlreadyAdded = products.find(
			(product) => product.id === productToAdd.id,
		);
		if (isAlreadyAdded) return activateModal();
		addToCart(productToAdd);
	};

	return (
		<button
			id='button'
			className={`${style} relative self-center px-8 mt-auto bg-[var(--red)] transition-hover duration-200 hover:bg-[var(--red-lighter)] text-white py-2 rounded-md`}
			onClick={handleAddToCart}>
			Add to card
		</button>
	);
}