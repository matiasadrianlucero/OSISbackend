import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()


export async function queryUpdateEmail(updateEmail,currentEmail) {
  try {
    const updateUser = await prisma.user.update({
        where: {
          email: currentEmail,
        },
        data: {
          email: updateEmail,
        },
      })
} catch (error) {
    console.error('Error creating user:', error);
    throw error;
}
}