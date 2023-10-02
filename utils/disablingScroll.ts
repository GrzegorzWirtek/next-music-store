import { isMobile } from 'react-device-detect';

export default function disablingScroll(mobileNavActive: boolean) {
	if (isMobile)
		return mobileNavActive
			? (document.body.style.overflowY = 'hidden')
			: (document.body.style.overflowY = 'visible');

	mobileNavActive
		? ((document.body.style.position = 'fixed'),
		  (document.body.style.overflowY = 'scroll'))
		: ((document.body.style.position = 'static'),
		  (document.body.style.overflowY = 'auto'));
}
