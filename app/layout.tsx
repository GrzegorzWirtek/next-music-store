import './globals.css';
import type { Metadata } from 'next';
import Header from './components/header';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['400'] });

export const metadata: Metadata = {
	title: 'Next Music Store',
	description: 'Music store created with Next.js',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={poppins.className}>
				<Header />
				{children}
			</body>
		</html>
	);
}
