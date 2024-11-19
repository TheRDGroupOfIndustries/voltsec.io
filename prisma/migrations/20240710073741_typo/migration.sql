/*
  Warnings:

  - You are about to drop the column `voltSecCharges` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "voltSecCharges",
ADD COLUMN     "voltsecCharges" INTEGER NOT NULL DEFAULT 0;
