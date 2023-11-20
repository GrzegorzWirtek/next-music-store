'use client';

import {
	Product as ProductProps,
	SearchValueProps,
	Sort as SortType,
} from '@/utils/types';
import Product from './Product';
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useEffect, useMemo, useState } from 'react';
import { getProducts } from '@/utils/getProducts';
import Sort from '@/components/filters/Sort';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import * as NProgress from 'nprogress';

export default function ProductsList({
	products,
	limit,
	searchByPhraze,
}: {
	products: ProductProps[];
	limit: number;
	searchByPhraze?: SearchValueProps;
}) {
	const [productsList, setProductsList] = useState(products);
	const [isThereMore, setIsThereMore] = useState(true);
	const pathName = usePathname();
	const param = useSearchParams();
	const priceParam = param.get('price');
	const limitParam = param.get('limit');
	const categoryParam = param.get('category');
	const searchParam = param.get('search');
	const sort = useMemo(() => {
		return { price: param.get('price') } as SortType;
	}, [param]);
	const router = useRouter();

	useEffect(() => {
		if (!priceParam) return setProductsList(products);

		const getSortProducts = async () => {
			const data = await getProducts({
				limit: parseInt(limitParam!),
				sort,
				searchByPhraze,
			});
			NProgress.done();

			setProductsList(data);
			if (limitParam! > data.length) return setIsThereMore(false);
		};

		getSortProducts();
	}, [sort, priceParam, limitParam, searchByPhraze, products]);

	const setlimitParam = () => {
		const newLimit = productsList.length + limit;
		const paramCategorySearch = categoryParam
			? `category=${categoryParam}&`
			: '';
		const paramSearch = searchParam ? `search=${searchParam}&` : '';
		router.push(
			`${pathName}?${paramCategorySearch}${paramSearch}price=${
				priceParam ? priceParam : 'default'
			}&limit=${newLimit}`,
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
				next={setlimitParam}
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
