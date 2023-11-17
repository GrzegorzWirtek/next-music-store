'use client';

import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import * as NProgress from 'nprogress';
import { useEffect, useState } from 'react';
import Select, { ActionMeta, SingleValue } from 'react-select';

type ChandleSelectChange = (
	newValue: SingleValue<{ value: string; label: string }>,
	actionMeta: ActionMeta<{ value: string; label: string }>,
) => void;

const sortOptions = [
	{
		value: 'default',
		label: 'Sort by default',
	},
	{
		value: 'asc',
		label: 'Price ascending',
	},
	{
		value: 'desc',
		label: 'Price descending',
	},
];

export default function Sort() {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const paramSearch = searchParams.get('search');
	const paramCategory = searchParams.get('category');
	const paramLimit = searchParams.get('limit');
	const paramPrice = searchParams.get('price');
	const [selectValue, setSelectValue] = useState(sortOptions[0]);

	useEffect(() => {
		NProgress.start();
	}, [paramPrice]);

	const changeUrl = (sortValue: string) => {
		if (pathname === '/products') {
			router.push(
				`/products?price=${sortValue}&limit=${
					paramLimit ? paramLimit : process.env.NEXT_PUBLIC_PAGES_LIMIT
				}`,
			);
		} else if (paramSearch) {
			router.push(`/search?search=${paramSearch}&price=${sortValue}`);
		} else if (paramCategory) {
			router.push(`/search?category=${paramCategory}&price=${sortValue}`);
		}
	};

	const handleSelectChange: ChandleSelectChange = (selectedOption) => {
		const sortValue = selectedOption!.value;
		const selectedObj = sortOptions.filter(
			(obj: any) => obj.label === selectedOption?.label,
		)[0];

		setSelectValue(selectedObj);
		changeUrl(sortValue);
	};

	return (
		<div className='w-[95vw] max-w-[300px] mx-auto'>
			<Select
				value={selectValue}
				getOptionValue={(sortOptions) => sortOptions.label}
				options={sortOptions}
				onChange={handleSelectChange}
			/>
		</div>
	);
}
