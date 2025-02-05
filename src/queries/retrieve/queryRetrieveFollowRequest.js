import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

export async function queryRetrieveFollowRequest(userToQuery) {
    try {
        const findResults = await prisma.followRequest.findMany({
            where: {
                sentToId: userToQuery,
                response: "pending"
            },

            include: {
              sendingRelation: {
                select: {
                  username: true,
                  profilePic: true,
                  id: true
                }
              }
            }
        });
        return findResults
        
      } catch (error) {
        console.error('Error finding users:', error);
        throw error;
      }
}
