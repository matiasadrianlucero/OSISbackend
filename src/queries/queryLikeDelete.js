import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

export async function queryLikeDelete(postId,userId,id) {
  try {
    await prisma.likes.delete({
        where: {
            userId: userId,
            postId: postId,
            id:id
        },
    });
    await prisma.post.updateMany({
        where:{
            id:postId
        },
        data: {
          likes: {
            decrement: 1,
          },
        },
      })
} catch (error) {
    console.error('Error creating user:', error);
    throw error;
}
}