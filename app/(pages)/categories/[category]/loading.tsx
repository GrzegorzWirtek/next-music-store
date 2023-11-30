export default function CategoriesLoading() {
	return (
		<div className='flex flex-col w-full'>
			<div className='my-6 lg:my-10 mx-auto h-[38px] w-[95vw] max-w-[300px] rounded-md animate-pulse bg-gray-300'></div>
			<div className='flex flex-wrap justify-center w-full'>
				{[...new Array(3)].map((_, index) => (
					<div
						className='max-w-[280px] flex flex-col basis-[calc(50%-18px)] sm:basis-full m-1.5 sm:m-2 pb-6 rounded-md animate-pulse bg-gray-300 aspect-[35/54]'
						key={index}
					/>
				))}
			</div>
		</div>
	);
}
