import { useState } from 'react';

export type InitialValue = { id: string }[];

const useLocalStorage = (key: string, initialValue: InitialValue) => {
	const [state, setState] = useState(() => {
		if (typeof window === 'undefined') return;
		try {
			const value = window.localStorage.getItem(key);
			return value ? JSON.parse(value) : initialValue;
		} catch (error) {
			console.log(error);
		}
	});

	const setValue = (value: InitialValue) => {
		try {
			const valueToStore = value instanceof Function ? value(state) : value;
			window.localStorage.setItem(key, JSON.stringify(valueToStore));
			setState(value);
		} catch (error) {
			console.log(error);
		}
	};

	return [state, setValue];
};

export default useLocalStorage;
