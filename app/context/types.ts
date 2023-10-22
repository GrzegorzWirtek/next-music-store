export type CartItem = {
	id: string;
	title: string;
	price: number;
	number: number;
	imgUrl: string;
};

export interface ContextProps {
	products: CartItem[];
	isModalActive: boolean;
	activateModal: () => void;
	deactivateModal: () => void;
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
	addToCart: () => {},
	deleteById: () => {},
	increaseNr: () => {},
	decreaseNr: () => {},
};
