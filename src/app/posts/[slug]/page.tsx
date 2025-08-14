// 動的セグメント[slug]に応じて1記事を表示する
// 見つからなければ404を出す(Next.js標準のnotFoundを使用)

import { getAllPosts, getPostBySlug } from '@/lib/posts';
import { notFound } from 'next/navigation';

interface Props {
	params: { slug: string };
}

// 事前に静的生成させたいパス一覧(ビルド時)
// あとでMDXやDBに変えても、この仕組みはそのまま活かせる
export async function generateStaticParams() {
	const paths = getAllPosts().map((p) => ({ slug: p.slug }));
	return paths;
}

export default function PostPage({ params }: Props) {
	const post = getPostBySlug(params.slug);
	if (!post) return notFound();

	return (
		<article>
			<p>
				{post.date}・{post.tags.join(', ')}
			</p>
			<h1>{post.title}</h1>
			{/* 今はcontentをそのまま表示(あとでMDXに置換予定) */}
			<p>{post.content}</p>
		</article>
	);
}
