import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

export async function queryLikePost(postId,userId) {
  try {
    await prisma.likes.create({
        data: {
            userId: userId,
            postId: postId,

        },
    });
    await prisma.post.updateMany({
        where:{
            id:postId
        },
        data: {
          likes: {
            increment: 1,
          },
        },
      })
} catch (error) {
    console.error('Error creating user:', error);
    throw error;
}
}