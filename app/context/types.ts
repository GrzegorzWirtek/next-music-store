import { Dispatch, SetStateAction } from 'react';

export type CartItem = {
	id: string;
	title: string;
	price: number;
	number: number;
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
