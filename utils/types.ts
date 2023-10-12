export interface Product {
	_id: string;
	category: string;
	images: string[];
	descr: string;
	price: number;
	title: string;
	main?: boolean;
	landingPage?: boolean;
}

export type SearchParameters = { landingPage: boolean } | { _id: string };
