/*
  Warnings:

  - You are about to drop the column `certificateId` on the `Certificates` table. All the data in the column will be lost.
  - You are about to drop the `Partnership` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `eId` to the `Certificates` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Partnership" DROP CONSTRAINT "Partnership_userId_fkey";

-- AlterTable
ALTER TABLE "Certificates" DROP COLUMN "certificateId",
ADD COLUMN     "eId" TEXT NOT NULL;

-- DropTable
DROP TABLE "Partnership";
