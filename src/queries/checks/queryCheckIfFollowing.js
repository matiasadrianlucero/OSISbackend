import { PrismaClient } from '@prisma/client';
import { check } from 'express-validator';
const prisma = new PrismaClient()
export async function queryCheckIfFollowing(selfId,idToCheck){
    try {
        let checkLike = await prisma.followRequest.findFirst({
            orderBy:{
                dateOfCreation: 'desc',
            },
            where: {
                sentById:selfId,
                sentToId: idToCheck,
            },
        });
        
        if (checkLike==null) {
            return checkLike={response:"none"}
        }
        
        return checkLike
    } catch(error){
        console.error('Login error:', error);
        throw error;
    }
}