const Spinner = () => {
	return (
		<svg className='w-10 h-10 animate-rotate' viewBox='0 0 50 50'>
			<circle
				className='stroke-[var(--blue-spinner)] animate-dash'
				cx='25'
				cy='25'
				r='20'
				fill='none'
				strokeWidth='5'
				strokeLinecap='round'></circle>
		</svg>
	);
};

export default Spinner;
