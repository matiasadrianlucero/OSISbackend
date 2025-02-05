import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()
export async function queryCheckUsernameExists(username){
    try {
        const checkUser = await prisma.user.findUnique({
          where: {
            username: username,
          },
        });
        if (checkUser==null) {
            return false
        }
        return true
    } catch(error){
        console.error('Login error:', error);
        throw error;
    }
}