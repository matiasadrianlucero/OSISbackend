-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "text" VARCHAR(255) NOT NULL,
    "img" VARCHAR(255),
    "dateOfCreation" VARCHAR(255) NOT NULL,
    "createdBy" INTEGER NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Post_text_key" ON "Post"("text");

-- CreateIndex
CREATE UNIQUE INDEX "Post_dateOfCreation_key" ON "Post"("dateOfCreation");

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
