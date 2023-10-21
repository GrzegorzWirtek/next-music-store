import './globals.css';
import type { Metadata } from 'next';
import Header from '../components/header';
import { Poppins } from 'next/font/google';
import { GlobalContextProvider } from './context/store';

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
			<body className={poppins.className} suppressHydrationWarning={true}>
				<GlobalContextProvider>
					<Header />
					<main className='flex flex-col justify-center max-w-7xl m-auto min-h-[calc(100vh-7rem)] lg:min-h-[calc(100vh-5rem)]'>
						{children}
					</main>
				</GlobalContextProvider>
			</body>
		</html>
	);
}
