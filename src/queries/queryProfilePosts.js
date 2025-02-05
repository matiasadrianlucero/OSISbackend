import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

export async function queryProfilePosts(userToQuery) {
    try {
        const checkUser = await prisma.post.findMany({
            where:{
                createdBy:userToQuery
            },
            orderBy:{
              dateOfCreation:'desc',
            },
            include:{
              user:{
                select:{
                  profilePic:true,
                  username:true
                }
              },
              postedIn:{
                include:{
                  commentRelation:{
                    select:{
                      profilePic:true,
                      username:true
                    },
                  },
                },
              },
            }
        });
        return checkUser
        
      } catch (error) {
        console.error('Login error:', error);
        throw error;
      }
}
