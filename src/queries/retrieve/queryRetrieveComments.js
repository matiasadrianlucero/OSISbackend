import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

export async function queryRetrieveComments(postToQuery) {
    try {
        const findResults = await prisma.comment.findMany({
            where: {
                postId: postToQuery
              },
            include:{
                commentRelation:{
                    select:{
                        username:true,
                        profilePic:true
                    }
                }
            }
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
