export default function CategoriesLoading() {
	return (
		<div className='min-h-[calc(100vh-7rem)] lg:min-h-[calc(100vh-5rem)] flex flex-row flex-wrap justify-center content-center gap-3'>
			<div className='basis-full flex justify-center'>
				<div className='bg-gray-300 h-10 w-40 rounded-md animate-pulse'></div>
			</div>
			{[...new Array(5)].map((item, index) => (
				<div
					className='w-[150px] h-[185px] rounded-md bg-gray-300 animate-pulse'
					key={index}></div>
			))}
		</div>
	);
}
