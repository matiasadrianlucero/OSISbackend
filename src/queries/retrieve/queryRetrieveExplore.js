import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

export async function queryRetrieveExplore() {
    try {
        const findResults = await prisma.post.findMany({
            where: {
              visibility: false,
              dateOfCreation: {
                lt: new Date()
              }
            },
            orderBy: {
                dateOfCreation: 'desc',
            },
            take: 20,
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
