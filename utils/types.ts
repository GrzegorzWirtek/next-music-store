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
		| { [x: string]: { $regex: RegExp; $options: string } };
	limit?: number | null;
}

export interface SearchParams {
	searchParams: { search: string; category: string };
}

export interface IdParams {
	params: { id: string };
}

export interface Images {
	images: { src: string; alt: string }[];
}

export type ModalProps = {
	handleClose: () => void;
};
