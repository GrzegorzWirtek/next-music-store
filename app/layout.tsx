import './globals.css';
import type { Metadata } from 'next';
import Header from '../components/header/page';
import { Poppins } from 'next/font/google';
import { AppContextProvider } from './context/AppContext';
import Footer from '@/components/footer';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600'] });

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
				<AppContextProvider>
					<Header />
					<main className='flex flex-col justify-center max-w-7xl m-auto min-h-[calc(100vh-7rem)] lg:min-h-[calc(100vh-5rem)]'>
						{children}
					</main>
				</AppContextProvider>
				<Footer />
			</body>
		</html>
	);
}
