import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/layouts/header/Header';
import Footer from '@/components/layouts/footer/Footer';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'ゆるまる暮しの学びログ',
	description: 'プログラミング初心者の備忘録と暮しの便利アイテムレビュー',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ja">
			<body className="min-h-dvh bg-white text-neutral-900">
				<Header />
				<main className="mx-auto max-w-5xl px-4 py-8">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
