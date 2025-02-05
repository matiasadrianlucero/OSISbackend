-- DropIndex
DROP INDEX "Post_text_key";

-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "text" DROP NOT NULL;
