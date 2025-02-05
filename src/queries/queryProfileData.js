import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

export async function queryProfileData(userToQuery) {
    try {
        const checkUser = await prisma.user.findUnique({
            where:{
                username:userToQuery
            },
            select:{
              id:true,
              username:true,
              bio:true,
              profilePic:true
            }
        });
        return checkUser
        
      } catch (error) {
        console.error('Login error:', error);
        throw error;
      }
}
