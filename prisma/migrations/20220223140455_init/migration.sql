-- CreateEnum
CREATE TYPE "Currency" AS ENUM ('GHS', 'USD');

-- CreateEnum
CREATE TYPE "OwnerType" AS ENUM ('INDIVIDUAL', 'AGENT', 'DEVELOPER');

-- CreateEnum
CREATE TYPE "PropertyCategory" AS ENUM ('AGRICULTURAL_FARMLAND', 'COMMERCIAL', 'PARTIES_EVENT', 'RESIDENTIAL');

-- CreateEnum
CREATE TYPE "PropertyState" AS ENUM ('FURNISHED', 'NOT_FURNISHED', 'PARTLY_FURNISHED');

-- CreateEnum
CREATE TYPE "PropertyType" AS ENUM ('FISH_FARM', 'CROP_FARM', 'LIVESTOCK_FARM', 'RETAIL', 'OFFICE', 'BANKING', 'LEISURE', 'HEALTHCARE', 'HOTEL', 'SHOP', 'SHIPPING_CONTAINER', 'INDOOR', 'BANQUET_HALL', 'BALLROOM', 'COMMUNITY_CENTER', 'CONFERENCE_ROOMS', 'hOTELS', 'NIGHT_CLUBS', 'GARDENS', 'CHURCH', 'STADIA', 'THEATERS', 'HOUSE', 'NEW_DEVELOPMENT', 'BUNGALOW', 'APARTMENT', 'STUDION', 'PENTHOUSE', 'BUILDING_PLOT');

-- CreateEnum
CREATE TYPE "UserStatus" AS ENUM ('SEEKER', 'PROPERTYOWNER', 'INVESTORS');

-- CreateEnum
CREATE TYPE "AcquisitionType" AS ENUM ('BUY', 'RENT', 'SHORT_STAY', 'LONG_STAY');

-- CreateEnum
CREATE TYPE "Duration" AS ENUM ('DAILY', 'WEEKLY', 'MONTHLY', 'YEARLY');

-- CreateEnum
CREATE TYPE "LandSizeUnit" AS ENUM ('ACRE', 'PLOT', 'HECTARE', 'SQUAREMETER');

-- CreateTable
CREATE TABLE "Organization" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(128) NOT NULL,
    "isVerified" BOOLEAN NOT NULL DEFAULT false,
    "isRegistrated" BOOLEAN NOT NULL DEFAULT false,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Organization_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "firstName" VARCHAR(32) NOT NULL,
    "lastName" VARCHAR(32) NOT NULL,
    "middleName" VARCHAR(32),
    "status" "UserStatus" NOT NULL DEFAULT E'SEEKER',
    "isVerified" BOOLEAN NOT NULL DEFAULT false,
    "isRegistrated" BOOLEAN NOT NULL DEFAULT false,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "organizationId" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Save" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT,
    "propertyId" TEXT,

    CONSTRAINT "Save_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Address" (
    "id" TEXT NOT NULL,
    "email" VARCHAR(128) NOT NULL,
    "mobile" VARCHAR(16),
    "work" VARCHAR(16),
    "office" VARCHAR(16),
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "organizationId" TEXT,
    "userId" TEXT,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Property" (
    "id" TEXT NOT NULL,
    "type" "PropertyType" NOT NULL,
    "acquisition" "AcquisitionType" NOT NULL,
    "state" "PropertyState",
    "images" TEXT[],
    "amenities" TEXT[],
    "parkingCapacity" INTEGER,
    "seating" INTEGER,
    "bedrooms" INTEGER,
    "bathrooms" INTEGER,
    "description" TEXT,
    "views" INTEGER NOT NULL DEFAULT 0,
    "source" VARCHAR(32) NOT NULL,
    "region" VARCHAR(16) NOT NULL,
    "city" VARCHAR(32) NOT NULL,
    "town" VARCHAR(32) NOT NULL,
    "streetName" VARCHAR(32),
    "digitalAddress" VARCHAR(16),
    "locationDesc" TEXT,
    "lat" DOUBLE PRECISION,
    "lon" DOUBLE PRECISION,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "organizationId" TEXT,
    "userId" TEXT,

    CONSTRAINT "Property_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Property_Request" (
    "id" TEXT NOT NULL,
    "type" "PropertyType" NOT NULL,
    "acquisition" "AcquisitionType" NOT NULL,
    "state" "PropertyState",
    "amenities" TEXT[],
    "parkingCapacity" INTEGER,
    "seating" INTEGER,
    "bedrooms" INTEGER,
    "bathrooms" INTEGER,
    "additionalInfo" VARCHAR(512),
    "region" VARCHAR(16),
    "city" VARCHAR(32),
    "town" VARCHAR(32),
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT,

    CONSTRAINT "Property_Request_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Location" (
    "id" TEXT NOT NULL,
    "region" VARCHAR(16) NOT NULL,
    "city" VARCHAR(16) NOT NULL,
    "locationInfo" VARCHAR(512),
    "electricitySupplyRating" INTEGER,
    "waterSupplyRating" INTEGER,
    "noiseLevelSupplyRating" INTEGER,
    "crimeSupplpyRating" INTEGER,
    "recreationalRating" INTEGER,
    "trafficRating" INTEGER,
    "lat" DOUBLE PRECISION,
    "lon" DOUBLE PRECISION,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Advertisement" (
    "id" TEXT NOT NULL,
    "isExpired" BOOLEAN NOT NULL DEFAULT false,
    "isPaused" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT,
    "organizationId" TEXT,
    "propertyId" TEXT,

    CONSTRAINT "Advertisement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Price" (
    "id" TEXT NOT NULL,
    "figure" DOUBLE PRECISION NOT NULL,
    "currency" "Currency" NOT NULL,
    "duration" "Duration",
    "propertyId" TEXT,
    "advertisementId" TEXT,
    "property_RequestId" TEXT,

    CONSTRAINT "Price_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LandSize" (
    "id" TEXT NOT NULL,
    "measurement" DOUBLE PRECISION NOT NULL,
    "unit" "LandSizeUnit" NOT NULL,
    "propertyId" TEXT,
    "property_RequestId" TEXT,

    CONSTRAINT "LandSize_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Search" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "category" "PropertyCategory" NOT NULL,
    "type" "PropertyType",
    "acquisition" "AcquisitionType",
    "seating" INTEGER,
    "state" "PropertyState",
    "bedrooms" INTEGER,
    "bathrooms" INTEGER,
    "parkingCapacity" INTEGER,
    "location" TEXT,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Search_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Organization_title_key" ON "Organization"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Address_email_key" ON "Address"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Address_organizationId_key" ON "Address"("organizationId");

-- CreateIndex
CREATE UNIQUE INDEX "Address_userId_key" ON "Address"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Location_region_city_key" ON "Location"("region", "city");

-- CreateIndex
CREATE UNIQUE INDEX "Price_propertyId_key" ON "Price"("propertyId");

-- CreateIndex
CREATE UNIQUE INDEX "Price_advertisementId_key" ON "Price"("advertisementId");

-- CreateIndex
CREATE UNIQUE INDEX "LandSize_propertyId_key" ON "LandSize"("propertyId");

-- CreateIndex
CREATE UNIQUE INDEX "LandSize_property_RequestId_key" ON "LandSize"("property_RequestId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Save" ADD CONSTRAINT "Save_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Save" ADD CONSTRAINT "Save_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Property" ADD CONSTRAINT "Property_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Property" ADD CONSTRAINT "Property_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Property_Request" ADD CONSTRAINT "Property_Request_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Advertisement" ADD CONSTRAINT "Advertisement_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Advertisement" ADD CONSTRAINT "Advertisement_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Advertisement" ADD CONSTRAINT "Advertisement_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Price" ADD CONSTRAINT "Price_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Price" ADD CONSTRAINT "Price_property_RequestId_fkey" FOREIGN KEY ("property_RequestId") REFERENCES "Property_Request"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Price" ADD CONSTRAINT "Price_advertisementId_fkey" FOREIGN KEY ("advertisementId") REFERENCES "Advertisement"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LandSize" ADD CONSTRAINT "LandSize_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LandSize" ADD CONSTRAINT "LandSize_property_RequestId_fkey" FOREIGN KEY ("property_RequestId") REFERENCES "Property_Request"("id") ON DELETE SET NULL ON UPDATE CASCADE;
