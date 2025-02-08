-- AlterTable
ALTER TABLE "members" ALTER COLUMN "Balance" SET DEFAULT '0.00';

-- CreateTable
CREATE TABLE "admin" (
    "id" SERIAL NOT NULL,
    "AdminName" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "admin_pkey" PRIMARY KEY ("id")
);
