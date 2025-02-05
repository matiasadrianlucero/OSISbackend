import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

export async function queryRetrieveFollowList(userToQuery) {
    try {
        const findResults = await prisma.followRequest.findMany({
          where: {
            OR: [
              { response: 'accepted' },
              { response: 'pending' }
            ],
            sentById: userToQuery
          },
          include: {
            recieverRelation: true            
          }
        });
        return findResults
        
      } catch (error) {
        console.error('Error finding users:', error);
        throw error;
      }
}
