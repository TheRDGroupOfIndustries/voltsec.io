-- AlterTable
ALTER TABLE "Certificates" ALTER COLUMN "issuedDate" DROP NOT NULL,
ALTER COLUMN "issuedDate" SET DEFAULT CURRENT_TIMESTAMP;
