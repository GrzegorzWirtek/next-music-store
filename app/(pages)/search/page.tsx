import { SearchParams } from '@/utils/types';

export default function Search({ searchParams }: SearchParams) {
	const searchValue = searchParams.v;
	console.log('search params: ', searchValue);
	return <p>This is search</p>;
}
