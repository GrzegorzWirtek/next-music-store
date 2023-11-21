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

	const search = function () {
		if (props?.searchByLandingPage) return props.searchByLandingPage;
		else if (props?.searchById) return props?.searchById;
		else if (props?.searchByPhraze)
			return {
				search: {
					$regex: new RegExp(props.searchByPhraze.value),
					$options: 'i',
				},
			};
		else if (props?.searchByCategory)
			return {
				category:
					props?.searchByCategory.value[0].toUpperCase() +
					props?.searchByCategory.value.slice(1),
			};
		else return {};
	};

	try {
		await connectMongoDB();
		const products = await Product.find(search())
			.sort(sortParams)
			.limit(props?.limit ? props?.limit : 0);
		return JSON.parse(JSON.stringify(products));
	} catch (error) {
		console.log(error);
	}
});
