"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyCreateWithoutOrganizationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AdvertisementCreateNestedManyWithoutPropertyInput_1 = require("../inputs/AdvertisementCreateNestedManyWithoutPropertyInput");
const LandSizeCreateNestedOneWithoutPropertyInput_1 = require("../inputs/LandSizeCreateNestedOneWithoutPropertyInput");
const PriceCreateNestedOneWithoutPropertyInput_1 = require("../inputs/PriceCreateNestedOneWithoutPropertyInput");
const PropertyCreateamenitiesInput_1 = require("../inputs/PropertyCreateamenitiesInput");
const PropertyCreateimagesInput_1 = require("../inputs/PropertyCreateimagesInput");
const SaveCreateNestedManyWithoutPropertyInput_1 = require("../inputs/SaveCreateNestedManyWithoutPropertyInput");
const UserCreateNestedOneWithoutPropertyInput_1 = require("../inputs/UserCreateNestedOneWithoutPropertyInput");
const AcquisitionType_1 = require("../../enums/AcquisitionType");
const PropertyState_1 = require("../../enums/PropertyState");
const PropertyType_1 = require("../../enums/PropertyType");
let PropertyCreateWithoutOrganizationInput = class PropertyCreateWithoutOrganizationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PropertyCreateWithoutOrganizationInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyType_1.PropertyType, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PropertyCreateWithoutOrganizationInput.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AcquisitionType_1.AcquisitionType, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PropertyCreateWithoutOrganizationInput.prototype, "acquisition", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyState_1.PropertyState, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PropertyCreateWithoutOrganizationInput.prototype, "state", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LandSizeCreateNestedOneWithoutPropertyInput_1.LandSizeCreateNestedOneWithoutPropertyInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LandSizeCreateNestedOneWithoutPropertyInput_1.LandSizeCreateNestedOneWithoutPropertyInput)
], PropertyCreateWithoutOrganizationInput.prototype, "size", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PriceCreateNestedOneWithoutPropertyInput_1.PriceCreateNestedOneWithoutPropertyInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PriceCreateNestedOneWithoutPropertyInput_1.PriceCreateNestedOneWithoutPropertyInput)
], PropertyCreateWithoutOrganizationInput.prototype, "price", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyCreateimagesInput_1.PropertyCreateimagesInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyCreateimagesInput_1.PropertyCreateimagesInput)
], PropertyCreateWithoutOrganizationInput.prototype, "images", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyCreateamenitiesInput_1.PropertyCreateamenitiesInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyCreateamenitiesInput_1.PropertyCreateamenitiesInput)
], PropertyCreateWithoutOrganizationInput.prototype, "amenities", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PropertyCreateWithoutOrganizationInput.prototype, "parkingCapacity", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PropertyCreateWithoutOrganizationInput.prototype, "seating", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PropertyCreateWithoutOrganizationInput.prototype, "bedrooms", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PropertyCreateWithoutOrganizationInput.prototype, "bathrooms", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PropertyCreateWithoutOrganizationInput.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PropertyCreateWithoutOrganizationInput.prototype, "views", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SaveCreateNestedManyWithoutPropertyInput_1.SaveCreateNestedManyWithoutPropertyInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SaveCreateNestedManyWithoutPropertyInput_1.SaveCreateNestedManyWithoutPropertyInput)
], PropertyCreateWithoutOrganizationInput.prototype, "likes", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PropertyCreateWithoutOrganizationInput.prototype, "source", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PropertyCreateWithoutOrganizationInput.prototype, "region", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PropertyCreateWithoutOrganizationInput.prototype, "city", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PropertyCreateWithoutOrganizationInput.prototype, "town", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PropertyCreateWithoutOrganizationInput.prototype, "streetName", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PropertyCreateWithoutOrganizationInput.prototype, "digitalAddress", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PropertyCreateWithoutOrganizationInput.prototype, "locationDesc", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PropertyCreateWithoutOrganizationInput.prototype, "lat", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PropertyCreateWithoutOrganizationInput.prototype, "lon", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], PropertyCreateWithoutOrganizationInput.prototype, "isDeleted", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], PropertyCreateWithoutOrganizationInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], PropertyCreateWithoutOrganizationInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutPropertyInput_1.UserCreateNestedOneWithoutPropertyInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateNestedOneWithoutPropertyInput_1.UserCreateNestedOneWithoutPropertyInput)
], PropertyCreateWithoutOrganizationInput.prototype, "owner", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementCreateNestedManyWithoutPropertyInput_1.AdvertisementCreateNestedManyWithoutPropertyInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementCreateNestedManyWithoutPropertyInput_1.AdvertisementCreateNestedManyWithoutPropertyInput)
], PropertyCreateWithoutOrganizationInput.prototype, "advertisement", void 0);
PropertyCreateWithoutOrganizationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PropertyCreateWithoutOrganizationInput", {
        isAbstract: true
    })
], PropertyCreateWithoutOrganizationInput);
exports.PropertyCreateWithoutOrganizationInput = PropertyCreateWithoutOrganizationInput;
