'use client';

import { Product as ProductProps } from '@/utils/types';
import Product from './product';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useState } from 'react';
import getProducts from '@/utils/getProducts';

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
		await new Promise((res) => setTimeout(res, 2000));
		const newLimit = productsList.length + limit;
		const data = await getProducts(newLimit);

		if (data.length === productsList.length) return setIsThereMore(false);
		setProductsList(data);
	};

	return (
		<InfiniteScroll
			className='flex flex-wrap justify-center'
			dataLength={productsList.length}
			next={getMoreProducts}
			hasMore={isThereMore}
			loader={<p className='bg-yellow-500 basis-full'>..Loading</p>}
			endMessage={<p className='basis-full'>Nothing more to show</p>}>
			{productsList.map((product) => (
				<Product key={product._id} product={product} />
			))}
		</InfiniteScroll>
	);
}
