'use client';

import { Product as ProductProps, Sort } from '@/utils/types';
import Product from './Product';
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useEffect, useState } from 'react';
import { getProducts } from '@/utils/getProducts';

export default function ProductsList({
	products,
	limit,
	sort,
}: {
	products: ProductProps[];
	limit: number;
	sort: Sort;
}) {
	const [productsList, setProductsList] = useState(products);
	const [isThereMore, setIsThereMore] = useState(true);

	useEffect(() => {
		if (!isThereMore) return;
		setProductsList(products);
	}, [products, isThereMore]);

	const getMoreProducts = async () => {
		const newLimit = productsList.length + limit;
		const data = await getProducts({ limit: newLimit, sort });

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
