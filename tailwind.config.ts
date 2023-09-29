import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			dropShadow: {
				logo: '2px 1px 1px rgb(70,70,70)',
				hover: '0px 0px 4px rgba(255, 255, 255, 1)',
			},
		},
	},
	plugins: [],
};
export default config;
