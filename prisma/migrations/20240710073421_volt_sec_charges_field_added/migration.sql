/*
  Warnings:

  - You are about to drop the column `countofnw` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `countofws` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "countofnw",
DROP COLUMN "countofws",
ADD COLUMN     "voltSecCharges" INTEGER NOT NULL DEFAULT 0;
