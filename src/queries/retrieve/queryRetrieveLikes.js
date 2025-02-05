import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

export async function queryRetrieveLikes(postToQuery) {
    try {
        const findResults = await prisma.likes.findMany({
            where: {
                postId: postToQuery
              },
        });
        if(findResults!=null){
            return findResults
        } else {
            return {no:"nocomments"}
        }
        
        
      } catch (error) {
        console.error('Error finding users:', error);
        throw error;
      }
}
