import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()
export async function queryCheckFollowRequestsExists(idSender,idReciever){
    try {
        const checkRequest = await prisma.followRequest.findMany({
            where: {
                sentById: idSender,
                sentToId: idReciever,
                response: "pending"
            },
        });
        if (checkRequest.length==0) {
            return false
        }

        return true
    } catch(error){
        console.error('Login error:', error);
        throw error;
    }
}