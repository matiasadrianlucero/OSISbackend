/*
  Warnings:

  - You are about to drop the column `loginToken` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "loginToken",
ADD COLUMN     "profilePic" VARCHAR(255);
