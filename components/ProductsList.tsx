'use client';

import { Product as ProductProps, Sort as SortType } from '@/utils/types';
import Product from './Product';
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useEffect, useMemo, useState } from 'react';
import { getProducts } from '@/utils/getProducts';
import Sort from '@/components/filters/Sort';
import { useSearchParams, useRouter } from 'next/navigation';
import * as NProgress from 'nprogress';

export default function ProductsList({
	products,
	limit,
}: {
	products: ProductProps[];
	limit: number;
}) {
	const [productsList, setProductsList] = useState(products);
	const [isThereMore, setIsThereMore] = useState(true);
	const sortParam = useSearchParams();
	const paramPrice = sortParam.get('price');
	const paramLimit = sortParam.get('limit');
	const sort = useMemo(() => {
		return { price: sortParam.get('price') } as SortType;
	}, [sortParam]);
	const router = useRouter();

	useEffect(() => {
		if (!paramPrice) return;
		const getSortProducts = async () => {
			const data = await getProducts({ limit: parseInt(paramLimit!), sort });
			NProgress.done();
			setProductsList(data);
			if (paramLimit! > data.length) return setIsThereMore(false);
		};

		getSortProducts();
	}, [sortParam, sort, paramPrice, paramLimit]);

	const setparamLimit = () => {
		const newLimit = productsList.length + limit;
		router.push(
			`products?price=${paramPrice ? paramPrice : 'default'}&limit=${newLimit}`,
			{
				scroll: false,
			},
		);
	};

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
				next={setparamLimit}
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
