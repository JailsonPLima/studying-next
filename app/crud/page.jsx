import AddPost from '../components/AddPost';
import PostList from '../components/PostList';

async function getData() {
	const data = await fetch('http://localhost:3000/api/posts', {
		cache: 'no-store',
	});
	const res = await data.json();

	return res;
}

const Crud = async () => {
	const posts = await getData();

	return (
		<div>
			<div className="mx-auto mt-4 max-w-4xl">
				<h1 className="text-3xl font-bold">Todo List App</h1>
				<AddPost />
			</div>

			<PostList posts={posts} />
		</div>
	);
};

export default Crud;
