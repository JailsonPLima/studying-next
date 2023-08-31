'use client';

import { useState } from 'react';
import Modal from './Modal';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const AddPost = () => {
	const [modalOpen, setModalOpen] = useState();
	const [inputs, setInputs] = useState({});

	const router = useRouter();

	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.post('api/posts', inputs)
			.then((res) => {
				console.log(res);
			})
			.catch((err) => console.log(err))
			.finally(() => {
				setInputs({});
				setModalOpen(false);
				router.refresh();
			});
	};

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;

		setInputs((prevState) => ({ ...prevState, [name]: value }));
	};

	return (
		<div>
			<button
				onClick={() => setModalOpen(true)}
				className="mt-4 cursor-pointer bg-blue-700 p-3 text-white"
			>
				Add New Post
			</button>

			<Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
				<form onSubmit={handleSubmit} className="w-full">
					<h1 className="pb-3 text-2xl">Add New Post</h1>

					<input
						type="text"
						name="title"
						placeholder="title"
						className="w-full p-2"
						onChange={handleChange}
						value={inputs.title || ''}
					/>

					<input
						type="text"
						name="description"
						placeholder="description"
						className="my-3 w-full p-2"
						onChange={handleChange}
						value={inputs.description || ''}
					/>

					<button
						type="submit"
						className="bg-blue-700 px-5 py-2 text-white"
					>
						Submit
					</button>
				</form>
			</Modal>
		</div>
	);
};

export default AddPost;
