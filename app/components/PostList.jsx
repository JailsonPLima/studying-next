import Post from './Post';

const PostList = ({ posts }) => {
	return (
		<ul>
			{posts.map((post) => (
				<Post post={post} />
			))}
		</ul>
	);
};

export default PostList;
