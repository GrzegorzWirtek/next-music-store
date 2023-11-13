'use server';

import { cache } from 'react';
import { connectMongoDB } from '@/mongodb/MongoConnect';
import Product from '@/mongodb/ProductModel';
import { SearchParameters } from '@/utils/types';

export const getProducts = cache(async (props?: SearchParameters) => {
	try {
		await connectMongoDB();
		const products = await Product.find(
			props?.search ? props?.search : {},
		).limit(props?.limit ? props?.limit : 0);
		return JSON.parse(JSON.stringify(products));
	} catch (error) {
		console.log(error);
	}
});
