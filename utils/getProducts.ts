'use server';

import { cache } from 'react';
import { connectMongoDB } from '@/mongodb/MongoConnect';
import Product from '@/mongodb/ProductModel';
import { SearchParameters } from '@/utils/types';
import { SortOrder } from 'mongoose';

export const getProducts = cache(async (props?: SearchParameters) => {
	let sortParams = {} as {
		[key: string]: SortOrder | { $meta: any };
	};

	if (props?.sort?.price === 'desc' || props?.sort?.price === 'asc') {
		sortParams = {
			price: props.sort.price as SortOrder | { $meta: any },
			_id: 1,
		};
	}

	try {
		await connectMongoDB();
		const products = await Product.find(props?.search ? props?.search : {})
			.sort(sortParams)
			.limit(props?.limit ? props?.limit : 0);
		return JSON.parse(JSON.stringify(products));
	} catch (error) {
		console.log(error);
	}
});
