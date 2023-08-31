import styles from '@/app/pages.module.css';

const getSinglePostData = async (postId) => {
	const data = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${postId}`
	);
	const res = await data.json();

	return res;
};

const SinglePost = async ({ params }) => {
	const post = await getSinglePostData(params.id);

	return (
		<section>
			<h2 className={styles.title}>{post.title}</h2>
			<p>{post.body}</p>
		</section>
	);
};

export default SinglePost;
