'use client';

import Link from 'next/link';
import type { Post } from '@/lib/posts';

export default function PostCard({ post }: { post: Post }) {
	return (
		<article>
			<h3>
				<Link href={`/posts/${post.slug}`}>{post.title}</Link>
			</h3>

			<p>
				{post.date}・{post.tags.join(', ')}
			</p>

			<p>{post.excerpt}</p>

			<div>
				<Link href={`/posts/${post.slug}`}>続きを読む →</Link>
			</div>
		</article>
	);
}
