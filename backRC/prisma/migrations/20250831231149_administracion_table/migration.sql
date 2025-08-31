/*
  Warnings:

  - You are about to drop the `Consignment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Driver` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ForHire` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `LoadOrder` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `OrderGuide` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Trailer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Transport` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TravelGuide` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Truck` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[tavelGuideId]` on the table `addressee` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `tavelGuideId` to the `addressee` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."addressee" ADD COLUMN     "tavelGuideId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "public"."Consignment";

-- DropTable
DROP TABLE "public"."Driver";

-- DropTable
DROP TABLE "public"."ForHire";

-- DropTable
DROP TABLE "public"."LoadOrder";

-- DropTable
DROP TABLE "public"."OrderGuide";

-- DropTable
DROP TABLE "public"."Trailer";

-- DropTable
DROP TABLE "public"."Transport";

-- DropTable
DROP TABLE "public"."TravelGuide";

-- DropTable
DROP TABLE "public"."Truck";

-- DropTable
DROP TABLE "public"."User";

-- CreateTable
CREATE TABLE "public"."user" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."travel_guide" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "travel_guide_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."load_order" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "load_order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."driver" (
    "id" SERIAL NOT NULL,
    "patent" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "numberChassis" TEXT NOT NULL,
    "trackerBrand" TEXT NOT NULL,
    "numberPermission" TEXT NOT NULL,
    "expirationPermission" TEXT NOT NULL,
    "policyNumber" TEXT NOT NULL,
    "policyExpiration" TEXT NOT NULL,
    "nameOwner" TEXT NOT NULL,
    "phoneOwner" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "driver_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."truck" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "truck_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."trailer" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "trailer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."transport" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "numberPemission" TEXT NOT NULL,
    "expirationPermission" TEXT NOT NULL,
    "numberPolicy" TEXT NOT NULL,
    "expirationPolicy" TEXT NOT NULL,
    "nameRepresentative" TEXT NOT NULL,
    "phoneRepresentative" TEXT NOT NULL,
    "emailRepresentative" TEXT NOT NULL,
    "nameResponsible" TEXT NOT NULL,
    "phoneResponsible" TEXT NOT NULL,
    "emailResponsible" TEXT NOT NULL,
    "proxy" TEXT NOT NULL,
    "referencePerson" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "transport_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."consignment" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "nacionality" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cuil" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "tavelGuideId" INTEGER NOT NULL,

    CONSTRAINT "consignment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."order_guide" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "order_guide_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."client" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "celular" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."presupuesto" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "cotizacion" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "presupuesto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."cliente_factura_cliente" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "clientId" INTEGER NOT NULL,
    "facturaClienteId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "cliente_factura_cliente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."factura_cliente" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "efectivo" DOUBLE PRECISION NOT NULL,
    "cheque" DOUBLE PRECISION NOT NULL,
    "dolar" DOUBLE PRECISION NOT NULL,
    "cotizacionDolar" DOUBLE PRECISION NOT NULL,
    "estado" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "factura_cliente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."factura_proveedor" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "factura_proveedor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."proveedor" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "valorViaje" DOUBLE PRECISION NOT NULL,
    "transportId" INTEGER NOT NULL,
    "estado" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "proveedor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."recibo_cobranza_proveedor" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "estado" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "recibo_cobranza_proveedor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."orden_pago_proveedor" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "estado" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "orden_pago_proveedor_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "consignment_tavelGuideId_key" ON "public"."consignment"("tavelGuideId");

-- CreateIndex
CREATE UNIQUE INDEX "addressee_tavelGuideId_key" ON "public"."addressee"("tavelGuideId");

-- AddForeignKey
ALTER TABLE "public"."addressee" ADD CONSTRAINT "addressee_tavelGuideId_fkey" FOREIGN KEY ("tavelGuideId") REFERENCES "public"."travel_guide"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."consignment" ADD CONSTRAINT "consignment_tavelGuideId_fkey" FOREIGN KEY ("tavelGuideId") REFERENCES "public"."travel_guide"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."cliente_factura_cliente" ADD CONSTRAINT "cliente_factura_cliente_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "public"."client"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."cliente_factura_cliente" ADD CONSTRAINT "cliente_factura_cliente_facturaClienteId_fkey" FOREIGN KEY ("facturaClienteId") REFERENCES "public"."factura_cliente"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."proveedor" ADD CONSTRAINT "proveedor_transportId_fkey" FOREIGN KEY ("transportId") REFERENCES "public"."transport"("id") ON DELETE CASCADE ON UPDATE CASCADE;
