export interface Product {
	_id: string;
	category: string;
	images: string[];
	descr: string;
	price: number;
	title: string;
	main?: boolean;
	landingPage?: boolean;
	search: string[];
}

export type SearchParameters =
	| { landingPage: boolean }
	| { _id: string }
	| { search: string };

export interface SearchParams {
	searchParams: { v: string };
}
