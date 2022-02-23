"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyCreateWithoutSizeInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AdvertisementCreateNestedManyWithoutPropertyInput_1 = require("../inputs/AdvertisementCreateNestedManyWithoutPropertyInput");
const OrganizationCreateNestedOneWithoutPropertiesInput_1 = require("../inputs/OrganizationCreateNestedOneWithoutPropertiesInput");
const PriceCreateNestedOneWithoutPropertyInput_1 = require("../inputs/PriceCreateNestedOneWithoutPropertyInput");
const PropertyCreateamenitiesInput_1 = require("../inputs/PropertyCreateamenitiesInput");
const PropertyCreateimagesInput_1 = require("../inputs/PropertyCreateimagesInput");
const SaveCreateNestedManyWithoutPropertyInput_1 = require("../inputs/SaveCreateNestedManyWithoutPropertyInput");
const UserCreateNestedOneWithoutPropertyInput_1 = require("../inputs/UserCreateNestedOneWithoutPropertyInput");
const AcquisitionType_1 = require("../../enums/AcquisitionType");
const PropertyState_1 = require("../../enums/PropertyState");
const PropertyType_1 = require("../../enums/PropertyType");
let PropertyCreateWithoutSizeInput = class PropertyCreateWithoutSizeInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PropertyCreateWithoutSizeInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyType_1.PropertyType, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PropertyCreateWithoutSizeInput.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AcquisitionType_1.AcquisitionType, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PropertyCreateWithoutSizeInput.prototype, "acquisition", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyState_1.PropertyState, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PropertyCreateWithoutSizeInput.prototype, "state", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PriceCreateNestedOneWithoutPropertyInput_1.PriceCreateNestedOneWithoutPropertyInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PriceCreateNestedOneWithoutPropertyInput_1.PriceCreateNestedOneWithoutPropertyInput)
], PropertyCreateWithoutSizeInput.prototype, "price", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyCreateimagesInput_1.PropertyCreateimagesInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyCreateimagesInput_1.PropertyCreateimagesInput)
], PropertyCreateWithoutSizeInput.prototype, "images", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyCreateamenitiesInput_1.PropertyCreateamenitiesInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyCreateamenitiesInput_1.PropertyCreateamenitiesInput)
], PropertyCreateWithoutSizeInput.prototype, "amenities", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PropertyCreateWithoutSizeInput.prototype, "parkingCapacity", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PropertyCreateWithoutSizeInput.prototype, "seating", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PropertyCreateWithoutSizeInput.prototype, "bedrooms", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PropertyCreateWithoutSizeInput.prototype, "bathrooms", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PropertyCreateWithoutSizeInput.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PropertyCreateWithoutSizeInput.prototype, "views", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SaveCreateNestedManyWithoutPropertyInput_1.SaveCreateNestedManyWithoutPropertyInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SaveCreateNestedManyWithoutPropertyInput_1.SaveCreateNestedManyWithoutPropertyInput)
], PropertyCreateWithoutSizeInput.prototype, "likes", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PropertyCreateWithoutSizeInput.prototype, "source", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PropertyCreateWithoutSizeInput.prototype, "region", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PropertyCreateWithoutSizeInput.prototype, "city", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PropertyCreateWithoutSizeInput.prototype, "town", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PropertyCreateWithoutSizeInput.prototype, "streetName", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PropertyCreateWithoutSizeInput.prototype, "digitalAddress", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PropertyCreateWithoutSizeInput.prototype, "locationDesc", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PropertyCreateWithoutSizeInput.prototype, "lat", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PropertyCreateWithoutSizeInput.prototype, "lon", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], PropertyCreateWithoutSizeInput.prototype, "isDeleted", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], PropertyCreateWithoutSizeInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], PropertyCreateWithoutSizeInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutPropertyInput_1.UserCreateNestedOneWithoutPropertyInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateNestedOneWithoutPropertyInput_1.UserCreateNestedOneWithoutPropertyInput)
], PropertyCreateWithoutSizeInput.prototype, "owner", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => OrganizationCreateNestedOneWithoutPropertiesInput_1.OrganizationCreateNestedOneWithoutPropertiesInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", OrganizationCreateNestedOneWithoutPropertiesInput_1.OrganizationCreateNestedOneWithoutPropertiesInput)
], PropertyCreateWithoutSizeInput.prototype, "organization", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementCreateNestedManyWithoutPropertyInput_1.AdvertisementCreateNestedManyWithoutPropertyInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementCreateNestedManyWithoutPropertyInput_1.AdvertisementCreateNestedManyWithoutPropertyInput)
], PropertyCreateWithoutSizeInput.prototype, "advertisement", void 0);
PropertyCreateWithoutSizeInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PropertyCreateWithoutSizeInput", {
        isAbstract: true
    })
], PropertyCreateWithoutSizeInput);
exports.PropertyCreateWithoutSizeInput = PropertyCreateWithoutSizeInput;
