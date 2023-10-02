interface Button {
	textContent: string;
}

export default function Button({ textContent }: Button) {
	return (
		<button className='bg-[var(--red)] transition-hover duration-200 hover:bg-[var(--red-lighter)] text-white py-2 px-4 rounded-lg'>
			{textContent}
		</button>
	);
}
