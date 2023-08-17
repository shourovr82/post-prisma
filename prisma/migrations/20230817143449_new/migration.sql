/*
  Warnings:

  - You are about to drop the column `authorId` on the `posts` table. All the data in the column will be lost.
  - You are about to drop the column `cateogoryId` on the `posts` table. All the data in the column will be lost.
  - Added the required column `categoryId` to the `posts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shafinId` to the `posts` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "posts" DROP CONSTRAINT "posts_authorId_fkey";

-- DropForeignKey
ALTER TABLE "posts" DROP CONSTRAINT "posts_cateogoryId_fkey";

-- AlterTable
ALTER TABLE "posts" DROP COLUMN "authorId",
DROP COLUMN "cateogoryId",
ADD COLUMN     "categoryId" INTEGER NOT NULL,
ADD COLUMN     "shafinId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "posts" ADD CONSTRAINT "posts_shafinId_fkey" FOREIGN KEY ("shafinId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "posts" ADD CONSTRAINT "posts_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
