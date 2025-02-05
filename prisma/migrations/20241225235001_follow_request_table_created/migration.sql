-- CreateTable
CREATE TABLE "FollowRequest" (
    "id" SERIAL NOT NULL,
    "sentById" INTEGER NOT NULL,
    "sentToId" INTEGER NOT NULL,
    "response" VARCHAR(255) DEFAULT 'pending',
    "date_of_creation" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FollowRequest_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "FollowRequest_sentToId_key" ON "FollowRequest"("sentToId");

-- AddForeignKey
ALTER TABLE "FollowRequest" ADD CONSTRAINT "FollowRequest_sentById_fkey" FOREIGN KEY ("sentById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FollowRequest" ADD CONSTRAINT "FollowRequest_sentToId_fkey" FOREIGN KEY ("sentToId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
