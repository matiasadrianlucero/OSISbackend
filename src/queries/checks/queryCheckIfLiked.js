import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()
export async function queryCheckIfLiked(postIdCheck,userIdCheck){
    try {
        const checkLike = await prisma.likes.findMany({
            where: {
                postId:postIdCheck,
                userId: userIdCheck,
            },
        });
        if (checkLike.length==0) {
            return false
        }
        
        return checkLike
    } catch(error){
        console.error('Login error:', error);
        throw error;
    }
}