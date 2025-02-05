import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

export async function queryCreateFollowRequest(idSender,idReciever) {
  try {
    await prisma.followRequest.create({
        data: {
            sentById: idSender,
            sentToId: idReciever,
        },
    });
} catch (error) {
    console.error('Error creating user:', error);
    return error
}
}