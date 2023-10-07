interface Props {
	mobileNavActive: boolean;
	toggleMobileNav: () => void;
}

export default function ham({ mobileNavActive, toggleMobileNav }: Props) {
	return (
		<div
			className='flex lg:hidden w-8 h-5 p-2 box-content flex-col justify-between cursor-pointer group'
			onClick={toggleMobileNav}>
			<div
				className={`h-0.5 w-full rounded-3xl bg-white transition-transform ${
					mobileNavActive && 'rotate-45 translate-y-[calc((20px/2)-1px)]'
				}`}></div>
			<div
				className={`h-0.5 w-full rounded-3xl bg-white transition-transform ${
					mobileNavActive && 'rotate-45'
				}`}></div>
			<div
				className={`h-0.5 w-full rounded-3xl bg-white transition-transform ${
					mobileNavActive && '-rotate-45 -translate-y-[calc((20px/2)-1px)]'
				}`}></div>
		</div>
	);
}
