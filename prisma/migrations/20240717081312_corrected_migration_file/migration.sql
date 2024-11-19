/*
  Warnings:

  - The `time` column on the `ShedulePentest` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `emailReportToggle` on the `ShedulePentest` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "ShedulePentest" DROP COLUMN "time",
ADD COLUMN     "time" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
DROP COLUMN "emailReportToggle",
ADD COLUMN     "emailReportToggle" BOOLEAN NOT NULL;
