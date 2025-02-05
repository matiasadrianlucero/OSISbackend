/*
  Warnings:

  - You are about to drop the column `dateOfCreation` on the `Post` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Post_dateOfCreation_key";

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "dateOfCreation",
ADD COLUMN     "date_of_creation" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
