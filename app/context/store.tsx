'use client';
import useLocalStorage from '@/hooks/useLocalStorage';

import { createContext, useContext, Dispatch, SetStateAction } from 'react';

type CartItem = {
	id: string;
	title: string;
	price: number;
	number: number;
	imgUrl: string;
};

interface ContextProps {
	products: CartItem[];
	setProducts: Dispatch<SetStateAction<CartItem[]>>;
}

const GlobalContext = createContext<ContextProps>({
	products: [],
	setProducts: (): CartItem[] => [],
});

export const GlobalContextProvider = ({
	children,
}: React.PropsWithChildren<{}>) => {
	const [value, setValue] = useLocalStorage('cart', []);

	return (
		<GlobalContext.Provider value={{ products: value, setProducts: setValue }}>
			{children}
		</GlobalContext.Provider>
	);
};

export const useGlobalContext = () => useContext(GlobalContext);
