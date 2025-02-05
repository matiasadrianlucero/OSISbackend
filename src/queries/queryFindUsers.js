import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

export async function queryFindUsers(userToQuery) {
    try {
        const findResults = await prisma.user.findMany({
            where: {
              username: {
                startsWith: userToQuery,
              },
            },
            select: {
             
              id: true,
              username: true,
              profilePic: true,
             
            }
        });
        return findResults
        
      } catch (error) {
        console.error('Error finding users:', error);
        throw error;
      }
}
