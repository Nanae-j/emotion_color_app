-- CreateTable
CREATE TABLE "CommentColor" (
    "id" TEXT NOT NULL,
    "commentId" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CommentColor_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CommentColor_commentId_color_key" ON "CommentColor"("commentId", "color");

-- AddForeignKey
ALTER TABLE "CommentColor" ADD CONSTRAINT "CommentColor_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "Comment"("id") ON DELETE CASCADE ON UPDATE CASCADE;
