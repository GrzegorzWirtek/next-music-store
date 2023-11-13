'use client';

import { Product as ProductProps } from '@/utils/types';
import Product from './Product';
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useState } from 'react';
import { getProducts } from '@/utils/getProducts';

export default function ProductsList({
	products,
	limit,
}: {
	products: ProductProps[];
	limit: number;
}) {
	const [productsList, setProductsList] = useState(products);
	const [isThereMore, setIsThereMore] = useState(true);

	const getMoreProducts = async () => {
		const newLimit = productsList.length + limit;
		const data = await getProducts({ limit: newLimit });

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
