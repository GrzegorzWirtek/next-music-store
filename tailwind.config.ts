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
			boxShadow: {
				hover: '0px 0px 5px 0px rgba(88, 43, 157, 1)',
			},
			keyframes: {
				rotate: {
					'100%': { transform: 'rotate(360deg)' },
				},
				dash: {
					'0%': { 'stroke-dasharray': '1, 150', 'stroke-dashoffset': '0' },
					'50%': { 'stroke-dasharray': '90, 150', 'stroke-dashoffset': '-35' },
					'100%': {
						'stroke-dasharray': '90, 150',
						'stroke-dashoffset': '-124',
					},
				},
			},
			animation: {
				rotate: 'rotate 2s linear infinite',
				dash: 'dash 1.5s ease-in-out infinite',
			},
		},
	},
	plugins: [],
};
export default config;
