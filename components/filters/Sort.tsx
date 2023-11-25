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
	const paramLimit = searchParams.get('limit');
	const paramPrice = searchParams.get('price');
	const [selectValue, setSelectValue] = useState(sortOptions[0]);

	useEffect(() => {
		NProgress.start();
	}, [paramPrice]);

	const changeUrl = (sortValue: string) => {
		router.push(
			`${pathname}?price=${sortValue}&limit=${
				paramLimit ? paramLimit : process.env.NEXT_PUBLIC_PAGES_LIMIT
			}`,
		);
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
		<div className='flex basis-full justify-center my-6 lg:my-10'>
			<Select
				styles={{
					control: (base, state) => ({
						width: '95vw',
						maxWidth: '300px',
						display: 'flex',
						fontSize: '16px',
						border: '1px solid #D6D6D6',
						borderRadius: '6px',
						backgroundColor: 'white',
						boxShadow: state.isFocused
							? '0px 0px 5px 0px rgba(205, 205, 205, 1)'
							: 'none',
					}),
				}}
				value={selectValue}
				getOptionValue={(sortOptions) => sortOptions.label}
				options={sortOptions}
				onChange={handleSelectChange}
			/>
		</div>
	);
}
