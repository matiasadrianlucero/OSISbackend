/*
  Warnings:

  - Made the column `response` on table `Comment` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Comment" ALTER COLUMN "response" SET NOT NULL,
ALTER COLUMN "response" DROP DEFAULT;
