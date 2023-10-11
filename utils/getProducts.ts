'use server';

import { connectMongoDB } from '@/mongodb/MongoConnect';
import Product from '@/mongodb/ProductModel';
import { SearchParameters } from '@/utils/types';

export default async function getProducts(
	limit?: number,
	search?: SearchParameters,
) {
	try {
		await connectMongoDB();
		const products = await Product.find(search ? search : {}).limit(
			limit ? limit : 3,
		);
		return JSON.parse(JSON.stringify(products));
	} catch (error) {
		console.log(error);
	}
}
