import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()
import bcrypt from 'bcrypt'

export async function queryCheckPassword(email,password) {
    try {
        const selectedUser = await prisma.user.findUnique({
            where: {
            email: email,
            },
        });
        const passwordCompare=await bcrypt.compare(password, selectedUser.password);
        
        if(passwordCompare){
            return true
        } else {
            return false
        }

    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
}