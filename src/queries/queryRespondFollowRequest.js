import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()


export async function queryRespondFollowRequest(requestId,response,userId) {
  try {
    const updateRequest = await prisma.followRequest.update({
        where: {
            id: requestId,
            sentToId: userId,
            response: 'pending'
        },
        data: {
          response: response,
        },
      })
} catch (error) {
    console.error('Error creating user:', error);
    throw error;
}
}