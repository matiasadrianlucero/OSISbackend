import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

export async function queryRetrievePosts(userToQuery, lastDate) {
    try {
        const findResults = await prisma.post.findMany({
            where: {
              createdBy: {
                in: userToQuery 
              },
              dateOfCreation: {
                gt:  new Date(lastDate)
              }

            },
            orderBy: {
                dateOfCreation: 'desc',
            },
              include: {
                user: {
                  select: {
                    username: true,
                    profilePic: true
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
