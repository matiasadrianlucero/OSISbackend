import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

export async function queryCreatePost(postText, fileName,id,visib) {
  try {
    await prisma.post.create({
        data: {
            text: postText,
            img: fileName,
            createdBy: id,
            visibility: visib
        },
    });
} catch (error) {
    console.error('Error creating user:', error);
    throw error;
}
}