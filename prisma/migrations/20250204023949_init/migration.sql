/*
  Warnings:

  - Made the column `img` on table `Post` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "visibility" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "img" SET NOT NULL;
