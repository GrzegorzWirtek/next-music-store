import { isMobile } from 'react-device-detect';

export default function disableScroll() {
	const device = isMobile ? 'mobile' : 'desktop';

	document.body.classList.remove(`${device}-scroll-off`);
}
