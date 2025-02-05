import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()


export async function queryUpdateUsername(updateUsername,currentUsername) {
  try {
    const updateUser = await prisma.user.update({
        where: {
          username: currentUsername,
        },
        data: {
          username: updateUsername,
        },
      })
} catch (error) {
    console.error('Error creating user:', error);
    throw error;
}
}