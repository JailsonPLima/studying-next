'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Modal from './Modal';
import axios from 'axios';

const Post = ({ post }) => {
	const [modalOpenEdit, setModalOpenEdit] = useState(false);
	const [modalOpenDelete, setModalOpenDelete] = useState(false);
	const [inputsEdit, setInputsEdit] = useState(post);

	const router = useRouter();

	const handleEditSubmit = (e) => {
		e.preventDefault();
		axios
			.patch(`api/posts/${post.id}`, inputsEdit)
			.then((res) => console.log(res))
			.catch((err) => console.log(err))
			.finally(() => {
				setModalOpenEdit(false);
				setInputsEdit({});
				router.refresh();
			});
	};

	const handleEditChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;

		setInputsEdit((prevState) => ({ ...prevState, [name]: value }));
	};

	const handleDeleteSubmit = (e) => {
		e.preventDefault();
		axios
			.delete(`api/posts/${post.id}`)
			.then((res) => console.log(res))
			.catch((err) => console.log(err))
			.finally(() => {
				setModalOpenDelete(false);
				router.refresh();
			});
	};

	return (
		<li className="my-5 bg-slate-200 p-3">
			<h2 className="text-2xl font-bold">{post.title}</h2>
			<p>{post.description}</p>
			<div className="mt-4">
				<button
					onClick={() => setModalOpenEdit(true)}
					className="mr-3 text-blue-700"
				>
					Edit
				</button>

				<Modal
					modalOpen={modalOpenEdit}
					setModalOpen={setModalOpenEdit}
				>
					<form onSubmit={handleEditSubmit} className="w-full">
						<h1 className="pb-3 text-2xl">Edit Post</h1>

						<input
							type="text"
							name="title"
							placeholder="title"
							className="w-full p-2"
							value={inputsEdit.title || ''}
							onChange={handleEditChange}
						/>

						<input
							type="text"
							name="description"
							placeholder="description"
							className="my-3 w-full p-2"
							value={inputsEdit.description || ''}
							onChange={handleEditChange}
						/>

						<button
							type="submit"
							className="bg-blue-700 px-5 py-2 text-white"
						>
							Submit
						</button>
					</form>
				</Modal>

				<button
					onClick={() => setModalOpenDelete(true)}
					className="mr-3 text-red-700"
				>
					Delete
				</button>

				<Modal
					modalOpen={modalOpenDelete}
					setModalOpen={setModalOpenDelete}
				>
					<form onSubmit={handleDeleteSubmit} className="w-full">
						<h1 className="pb-3 font-bold">
							Are you sure, you want delete this post?
						</h1>
						<div className="flex gap-x-3">
							<button
								type="submit"
								className="w-1/2 bg-blue-700 p-2 text-white"
							>
								YES
							</button>
							<button
								onClick={() => setModalOpenDelete(false)}
								className="w-1/2 bg-red-700 p-2 text-white"
							>
								NO
							</button>
						</div>
					</form>
				</Modal>
			</div>
		</li>
	);
};

export default Post;
