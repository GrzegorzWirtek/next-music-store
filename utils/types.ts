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

export interface SearchParameters {
	search?:
		| { landingPage: boolean }
		| { _id: string }
		| { search: { $regex: RegExp; $options: string } };
	limit?: number | null;
}

export interface SearchParams {
	searchParams: { v: string };
}
