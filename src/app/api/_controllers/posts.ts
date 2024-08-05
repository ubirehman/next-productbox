import { PrismaClient } from '@prisma/client';

interface createPostProps {
  title: string;
  content: string;
}

export const getAllPosts = async () => {
  const prisma = new PrismaClient();

  try {
    const posts = await prisma.post.findMany();

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
