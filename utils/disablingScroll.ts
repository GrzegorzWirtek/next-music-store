import { isMobile } from 'react-device-detect';

export default function disablingScroll(mobileNavActive: boolean) {
	const device = isMobile ? 'mobile' : 'desktop';

	mobileNavActive
		? document.body.classList.add(`${device}-scroll-off`, 'body-blur')
		: document.body.classList.remove(`${device}-scroll-off`, 'body-blur');
}
