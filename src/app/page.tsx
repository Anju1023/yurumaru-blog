import PostCard from '@/components/PostCard';
import { getLatestPosts } from '@/lib/posts';

export default function Homepage() {
	const latest = getLatestPosts(3);
	return (
		<div className="space-y-8">
			<section>
				<h1 className="text-2xl font-bold">ようこそ🫶</h1>
				<p className="text-neutral-600 mt-1">
					学習ログと暮しのレビューをゆるっと書いていくサイト！
				</p>
			</section>

			<section>
				<h2 className="text-xl font-semibold mb-3">新着記事</h2>
				<div className="grid gap-4 sm:grid-cols-2">
					{latest.map((p) => (
						<PostCard key={p.slug} post={p} />
					))}
				</div>
			</section>
		</div>
	);
}
