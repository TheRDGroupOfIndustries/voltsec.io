/*
  Warnings:

  - Added the required column `email` to the `Enhances` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Enhances" ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "userId" TEXT;

-- AddForeignKey
ALTER TABLE "Enhances" ADD CONSTRAINT "Enhances_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
