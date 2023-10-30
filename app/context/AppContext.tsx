'use client';
import { createContext, useContext, useState } from 'react';
import useLocalStorage from '@/hooks/useLocalStorage';
import {
	initialState,
	ContextProps,
	CartItem,
	ModalContent,
} from '@/utils/types';

const AppContext = createContext<ContextProps>(initialState);

export const AppContextProvider = ({
	children,
}: React.PropsWithChildren<{}>) => {
	const [value, setValue] = useLocalStorage('cart', []);
	const [isModalActive, setIsModalActive] = useState(false);
	const [modalContent, setModalContent] = useState({} as ModalContent);

	const addToCart = (item: CartItem) => {
		setValue([...value, item]);
	};

	const deleteById = (id: string) => {
		setValue(value.filter((product: CartItem) => product.id !== id));
	};

	const matchOperation = (id: string, operator: number) => {
		const index = value.findIndex((product: CartItem) => product.id === id);
		const productsCopy = [...value];
		const newQuantity = productsCopy[index].quantity + operator;
		if (newQuantity <= 0) return;

		productsCopy[index] = { ...productsCopy[index], quantity: newQuantity };
		setValue(productsCopy);
	};

	const increaseNr = (id: string) => {
		matchOperation(id, 1);
	};

	const decreaseNr = (id: string) => {
		matchOperation(id, -1);
	};

	const activateModal = () => {
		setIsModalActive(true);
	};

	const deactivateModal = () => {
		setIsModalActive(false);
	};

	return (
		<AppContext.Provider
			value={{
				products: value,
				isModalActive,
				activateModal,
				deactivateModal,
				modalContent,
				setModalContent,
				addToCart,
				deleteById,
				increaseNr,
				decreaseNr,
			}}>
			{children}
		</AppContext.Provider>
	);
};
export const useAppContext = () => useContext(AppContext);
