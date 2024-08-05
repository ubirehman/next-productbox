import { PrismaClient } from '@prisma/client';
import { redirect } from 'next/navigation';

interface createPostProps {
  title: string;
  content: string;
}

export const createPost = async ({ title, content }: createPostProps) => {
  const prisma = new PrismaClient();

  try {
    const post = await prisma.post.create({
      data: {
        title,
        content,
        published: true,
        authorId: 1,
      },
    });
    
    return {
      success: true,
      message: 'Post created successfully',
      post,
    };

  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};

export const getAllPosts = async () => {
  const prisma = new PrismaClient();

  try {
    const posts = await prisma.post.findMany();
    if(posts.length <= 0)
    {
      redirect('/blog/create')
    }

    return {
      success: true,
      message: 'All posts fetched successfully',
      posts,
    };
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};

export const getPostById = async (id: string) => {
  const prisma = new PrismaClient();
  const integerID = parseInt(id[0]);
  try {
    const post = await prisma.post.findFirst({
      where: {
        id: integerID,
      },
    });

    return {
      success: true,
      message: 'Posts fetched successfully',
      post,
    };
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};
