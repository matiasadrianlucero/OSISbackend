import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()


export async function queryUpdateBio(bioUpdate,idUpdate,emailUser) {
  try {
    const updateBio = await prisma.user.update({
        where: {
          email:emailUser,
          id: idUpdate
        },
        data:{
            bio:bioUpdate
        },
      })
      return "Bio Updated"
} catch (error) {
    console.error('Error creating user:', error);
    throw error;
}
}