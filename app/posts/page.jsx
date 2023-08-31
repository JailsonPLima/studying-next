import Link from 'next/link';
import Post from '../components/Post';

async function getPostsData() {
	const data = await fetch('http://localhost:3000/api/posts');
	const res = await data.json();

	return res;
}

const Posts = async () => {
	const posts = await getPostsData();

	return (
		<section>
			<h2 className="mt-4 text-3xl font-bold">Posts page</h2>
			<ul>
				{posts.map((post, index) => (
					<Link href={`/posts/${post.id}`}>
						<Post post={post} />
					</Link>
				))}
			</ul>
		</section>
	);
};

export default Posts;
