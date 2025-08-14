// 画面の共通レイアウト。ヘッダー/フッターなどをここに入れる
// 子ページは{children}に差し込まれる！

import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layouts/header/Header';
import Footer from '@/components/layouts/footer/Footer';

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
