import { Dispatch, SetStateAction } from 'react';

export interface Product {
	_id: string;
	category: string;
	images: string[];
	descr: string;
	price: number;
	priceStripe: string;
	title: string;
	main?: boolean;
	landingPage?: boolean;
	search?: string[];
}

export type Sort = { price: 'desc' | 'asc' | 'default' };

export interface SearchParameters {
	search?:
		| { landingPage: boolean }
		| { _id: string }
		| { [x: string]: { $regex: RegExp; $options: string } };
	limit?: number | null;
	sort?: Sort;
}

export interface SearchParams {
	searchParams: { search: string; category: string; price: string };
}

export interface IdParams {
	params: { id: string };
}

export interface SortParams {
	searchParams: Sort;
}

export interface Images {
	images: { src: string; alt: string }[];
}

export type CartItem = {
	id: string;
	title: string;
	price: number;
	priceStripe: string;
	quantity: number;
	imgUrl: string;
};

export type ModalContent = {
	text: string;
	title: string;
	price: number;
	imgUrl: string;
};

export interface ContextProps {
	products: CartItem[];
	isModalActive: boolean;
	activateModal: () => void;
	deactivateModal: () => void;
	modalContent: ModalContent;
	setModalContent: Dispatch<SetStateAction<ModalContent>>;
	addToCart: (item: CartItem) => void;
	deleteById: (id: string) => void;
	increaseNr: (id: string) => void;
	decreaseNr: (id: string) => void;
}

export const initialState = {
	products: [],
	isModalActive: false,
	activateModal: () => {},
	deactivateModal: () => {},
	modalContent: {} as ModalContent,
	setModalContent: () => {},
	addToCart: () => {},
	deleteById: () => {},
	increaseNr: () => {},
	decreaseNr: () => {},
};
