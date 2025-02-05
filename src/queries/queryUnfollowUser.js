import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()


export async function queryUnfollowUser(selfId,userId,requestId) {
  try {
    const unfollowedUser = await prisma.followRequest.update({
        where: {
          sentById:selfId,
          sentToId: userId,
          id:requestId
        },
        data:{
            response:"denied"
        },
      })
      return "User unfollowed."
} catch (error) {
    console.error('Error creating user:', error);
    throw error;
}
}