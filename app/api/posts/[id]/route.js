// http://localhost/api/posts/12345
import prisma from '@/app/lib/prismadb';
import { NextResponse } from 'next/server';

export const GET = async (_, { params }) => {
	try {
		const id = Number.parseInt(params.id, 10);

		const post = await prisma.post.findUnique({
			where: {
				id,
			},
		});

		if (!post) {
			return NextResponse.json(
				{ message: 'Post not found', err },
				{
					status: 404,
				},
			);
		}

		return NextResponse.json(post);
	} catch (err) {
		return NextResponse.json(
			{ messsage: 'GET Error', err },
			{ status: 500 },
		);
	}
};

export const PATCH = async (req, { params }) => {
	try {
		const body = await req.json();
		const { title, description } = body;

		const id = Number.parseInt(params.id, 10);

		const updatePost = await prisma.post.update({
			where: {
				id,
			},
			data: {
				title,
				description,
			},
		});

		if (!updatePost) {
			return NextResponse.json(
				{ message: 'Post not found', err },
				{ status: 404 },
			);
		}

		return NextResponse.json(updatePost);
	} catch (err) {
		return NextResponse.json(
			{ message: 'PATCH Error', err },
			{ status: 500 },
		);
	}
};

export const DELETE = async (_, { params }) => {
	try {
		const id = Number.parseInt(params.id, 10);

		await prisma.post.delete({
			where: {
				id,
			},
		});

		return NextResponse.json('Post has been deleted');
	} catch (err) {
		return NextResponse.json(
			{ message: 'DELETE Error', err },
			{ status: 500 },
		);
	}
};
