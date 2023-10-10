import { connectMongoDB } from '@/mongodb/MongoConnect';
import Product from '@/mongodb/ProductModel';
import { SearchParameters } from '@/utils/types';

export default async function getProducts(searchParameters?: SearchParameters) {
	try {
		await connectMongoDB();
		const products = await Product.find(
			searchParameters ? searchParameters : {},
		);
		return JSON.parse(JSON.stringify(products));
	} catch (error) {
		console.log(error);
	}
}
