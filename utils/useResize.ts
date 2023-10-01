import { useState, useEffect } from 'react';

const useResize = () => {
	const [matches, setMatches] = useState(false);

	useEffect(() => {
		const media = window.matchMedia('(min-width: 768px)');
		const listener = () => setMatches(media.matches);
		window.addEventListener('resize', listener);
		return () => window.removeEventListener('resize', listener);
	}, [matches]);

	return matches;
};

export default useResize;
