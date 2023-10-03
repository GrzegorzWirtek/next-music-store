import { Schema, model, models } from 'mongoose';

const productSchema = new Schema({
	category: String,
	title: String,
	price: String,
	descr: String,
	images: [String],
});

const Product = (models && models.Product) || model('Product', productSchema);

export default Product;
