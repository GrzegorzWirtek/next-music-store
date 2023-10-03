import { connectMongoDB } from '@/mongodb/MongoConnect';
import Product from '@/mongodb/ProductModel';

export default async function getProducts() {
	try {
		await connectMongoDB();
		const products = await Product.find();
		return JSON.parse(JSON.stringify(products));
		// return products;
	} catch (error) {
		console.log(error);
	}
}
