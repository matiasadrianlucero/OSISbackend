/*
  Warnings:

  - You are about to drop the `File` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "File" DROP CONSTRAINT "File_userId_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "email" TEXT NOT NULL;

-- DropTable
DROP TABLE "File";

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
