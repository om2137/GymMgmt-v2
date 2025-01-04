-- CreateTable
CREATE TABLE "members" (
    "id" SERIAL NOT NULL,
    "Firstname" TEXT NOT NULL,
    "Middlename" TEXT NOT NULL,
    "Lastname" TEXT NOT NULL,
    "Address" TEXT,
    "Contact" INTEGER NOT NULL,
    "DoB" TIMESTAMP(3) NOT NULL,
    "Gender" TEXT NOT NULL,
    "Mstat" BOOLEAN NOT NULL DEFAULT false,
    "Avatar" TEXT,
    "admissionDate" TIMESTAMP(3),
    "cardNumber" TEXT,
    "Balance" TEXT,

    CONSTRAINT "members_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "invoice" (
    "id" SERIAL NOT NULL,
    "member_id" INTEGER NOT NULL,
    "paidDate" TIMESTAMP(3),
    "dueDate" TIMESTAMP(3),
    "paidOn" TIMESTAMP(3),
    "facility" TEXT,
    "fees" DOUBLE PRECISION,
    "admFee" DOUBLE PRECISION,
    "PaymentType" TEXT,

    CONSTRAINT "invoice_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "members_Contact_key" ON "members"("Contact");

-- AddForeignKey
ALTER TABLE "invoice" ADD CONSTRAINT "invoice_member_id_fkey" FOREIGN KEY ("member_id") REFERENCES "members"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
