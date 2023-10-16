'use client';

import { Product as ProductProps } from '@/utils/types';
import Product from './product';
import Spinner from './spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useState } from 'react';
import getProducts from '@/utils/getProducts';

export default function ProductsList({
	products,
	limit,
}: {
	products: ProductProps[];
	limit?: number;
}) {
	// const [productsList, setProductsList] = useState(products);
	const [productsList, setProductsList] = useState(products.slice(0, limit));
	const [isThereMore, setIsThereMore] = useState(true);

	const getMoreProducts = async () => {
		const productsLimit = limit ? limit : 0;
		const newProductsLimit = productsList.length + productsLimit;
		const addedProducts = products.slice(productsList.length, newProductsLimit);
		const data = productsList.concat(addedProducts);
		// const data = await getProducts(newLimit);

		if (data.length === productsList.length) return setIsThereMore(false);
		setProductsList(data);
	};

	const loaderComponent = (
		<div className='basis-full flex justify-center my-10'>
			<Spinner />
		</div>
	);

	return (
		<InfiniteScroll
			className='flex flex-wrap justify-center min-h-full'
			dataLength={productsList.length}
			next={getMoreProducts}
			hasMore={isThereMore}
			loader={loaderComponent}
			endMessage={
				<p className='basis-full flex justify-center my-10 font-bold'>
					Nothing more to show
				</p>
			}>
			{productsList.map((product) => (
				<Product key={product._id} product={product} />
			))}
		</InfiniteScroll>
	);
}
