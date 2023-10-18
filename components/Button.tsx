interface Button {
	textContent: string;
	style?: string;
}

export default function Button({ textContent, style }: Button) {
	return (
		<button
			id='button'
			className={`${style} mt-auto bg-[var(--red)] transition-hover duration-200 hover:bg-[var(--red-lighter)] text-white py-2 rounded-md`}>
			{textContent}
		</button>
	);
}
