import { getProducts } from '@/utils/getProducts';
import { SearchParams } from '@/utils/types';
import ProductsList from '@/components/ProductsList';
import NoResults from '@/components/no-results';

export default async function Search({ params }: SearchParams) {
	const limit = parseInt(process.env.NEXT_PUBLIC_PAGES_LIMIT!);

	const search = params.search.replace(/%20/g, ' ');

	const products = await getProducts({
		searchByPhraze: { search },
	});

	if (!products || !products.length) return <NoResults value={search} />;

	return (
		<div className='flex flex-wrap lg:flex-nowrap justify-center lg:px-10 pb-10'>
			<ProductsList
				products={products}
				limit={limit}
				searchByPhraze={{ search }}
			/>
		</div>
	);
}
