'use client';
import { createContext, useContext, useReducer } from 'react';
import useLocalStorage from '@/hooks/useLocalStorage';
import { initialState, ContextProps, CartItem } from './types';

const AppContext = createContext<ContextProps>(initialState);

export const AppContextProvider = ({
	children,
}: React.PropsWithChildren<{}>) => {
	const [value, setValue] = useLocalStorage('cart', []);

	const addToCart = (item: CartItem) => {
		setValue([...value, item]);
	};

	const deleteById = (id: string) => {
		setValue(value.filter((product: CartItem) => product.id !== id));
	};

	const matchOperation = (id: string, operator: number) => {
		const index = value.findIndex((product: CartItem) => product.id === id);
		const productsCopy = [...value];
		const newNumber = productsCopy[index].number + operator;
		if (newNumber <= 0) return;

		productsCopy[index] = { ...productsCopy[index], number: newNumber };
		setValue(productsCopy);
	};

	const increaseNr = (id: string) => {
		matchOperation(id, 1);
	};

	const decreaseNr = (id: string) => {
		matchOperation(id, -1);
	};

	return (
		<AppContext.Provider
			value={{
				products: value,
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
