'use client';

import { Product as ProductProps, Sort as SortType } from '@/utils/types';
import Product from './Product';
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { getProducts } from '@/utils/getProducts';
import Sort from '@/components/filters/Sort';
import { useSearchParams } from 'next/navigation';

export default function ProductsList({
	products,
	limit,
}: {
	products: ProductProps[];
	limit: number;
}) {
	const [productsList, setProductsList] = useState(products);
	const [isThereMore, setIsThereMore] = useState(true);
	const [currentLimit, setCurrentLimit] = useState(limit);
	const sortParam = useSearchParams();
	const sortValue = sortParam.get('price');
	const sort = useMemo(() => {
		return { price: sortParam.get('price') } as SortType;
	}, [sortParam]);

	useEffect(() => {
		if (!sortValue) return;
		const getSortProducts = async () => {
			const data = await getProducts({ limit: currentLimit, sort });
			setProductsList(data);
		};

		getSortProducts();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [sortParam, sortValue, sort]);

	const getMoreProducts = useCallback(async () => {
		const newLimit = productsList.length + limit;
		setCurrentLimit(newLimit);
		const data = await getProducts({ limit: newLimit, sort });

		if (data.length === productsList.length) return setIsThereMore(false);
		setProductsList(data);
	}, [limit, productsList.length, sort]);

	const loaderComponent = (
		<div className='basis-full flex justify-center my-10'>
			<Spinner />
		</div>
	);

	return (
		<>
			<Sort />
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
		</>
	);
}
