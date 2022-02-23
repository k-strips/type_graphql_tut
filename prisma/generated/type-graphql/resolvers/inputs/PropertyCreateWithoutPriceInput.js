"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyCreateWithoutPriceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AdvertisementCreateNestedManyWithoutPropertyInput_1 = require("../inputs/AdvertisementCreateNestedManyWithoutPropertyInput");
const LandSizeCreateNestedOneWithoutPropertyInput_1 = require("../inputs/LandSizeCreateNestedOneWithoutPropertyInput");
const OrganizationCreateNestedOneWithoutPropertiesInput_1 = require("../inputs/OrganizationCreateNestedOneWithoutPropertiesInput");
const PropertyCreateamenitiesInput_1 = require("../inputs/PropertyCreateamenitiesInput");
const PropertyCreateimagesInput_1 = require("../inputs/PropertyCreateimagesInput");
const SaveCreateNestedManyWithoutPropertyInput_1 = require("../inputs/SaveCreateNestedManyWithoutPropertyInput");
const UserCreateNestedOneWithoutPropertyInput_1 = require("../inputs/UserCreateNestedOneWithoutPropertyInput");
const AcquisitionType_1 = require("../../enums/AcquisitionType");
const PropertyState_1 = require("../../enums/PropertyState");
const PropertyType_1 = require("../../enums/PropertyType");
let PropertyCreateWithoutPriceInput = class PropertyCreateWithoutPriceInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PropertyCreateWithoutPriceInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyType_1.PropertyType, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PropertyCreateWithoutPriceInput.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AcquisitionType_1.AcquisitionType, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PropertyCreateWithoutPriceInput.prototype, "acquisition", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyState_1.PropertyState, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PropertyCreateWithoutPriceInput.prototype, "state", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LandSizeCreateNestedOneWithoutPropertyInput_1.LandSizeCreateNestedOneWithoutPropertyInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LandSizeCreateNestedOneWithoutPropertyInput_1.LandSizeCreateNestedOneWithoutPropertyInput)
], PropertyCreateWithoutPriceInput.prototype, "size", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyCreateimagesInput_1.PropertyCreateimagesInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyCreateimagesInput_1.PropertyCreateimagesInput)
], PropertyCreateWithoutPriceInput.prototype, "images", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyCreateamenitiesInput_1.PropertyCreateamenitiesInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyCreateamenitiesInput_1.PropertyCreateamenitiesInput)
], PropertyCreateWithoutPriceInput.prototype, "amenities", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PropertyCreateWithoutPriceInput.prototype, "parkingCapacity", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PropertyCreateWithoutPriceInput.prototype, "seating", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PropertyCreateWithoutPriceInput.prototype, "bedrooms", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PropertyCreateWithoutPriceInput.prototype, "bathrooms", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PropertyCreateWithoutPriceInput.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PropertyCreateWithoutPriceInput.prototype, "views", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SaveCreateNestedManyWithoutPropertyInput_1.SaveCreateNestedManyWithoutPropertyInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SaveCreateNestedManyWithoutPropertyInput_1.SaveCreateNestedManyWithoutPropertyInput)
], PropertyCreateWithoutPriceInput.prototype, "likes", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PropertyCreateWithoutPriceInput.prototype, "source", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PropertyCreateWithoutPriceInput.prototype, "region", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PropertyCreateWithoutPriceInput.prototype, "city", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PropertyCreateWithoutPriceInput.prototype, "town", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PropertyCreateWithoutPriceInput.prototype, "streetName", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PropertyCreateWithoutPriceInput.prototype, "digitalAddress", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PropertyCreateWithoutPriceInput.prototype, "locationDesc", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PropertyCreateWithoutPriceInput.prototype, "lat", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PropertyCreateWithoutPriceInput.prototype, "lon", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], PropertyCreateWithoutPriceInput.prototype, "isDeleted", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], PropertyCreateWithoutPriceInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], PropertyCreateWithoutPriceInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutPropertyInput_1.UserCreateNestedOneWithoutPropertyInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateNestedOneWithoutPropertyInput_1.UserCreateNestedOneWithoutPropertyInput)
], PropertyCreateWithoutPriceInput.prototype, "owner", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => OrganizationCreateNestedOneWithoutPropertiesInput_1.OrganizationCreateNestedOneWithoutPropertiesInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", OrganizationCreateNestedOneWithoutPropertiesInput_1.OrganizationCreateNestedOneWithoutPropertiesInput)
], PropertyCreateWithoutPriceInput.prototype, "organization", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementCreateNestedManyWithoutPropertyInput_1.AdvertisementCreateNestedManyWithoutPropertyInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementCreateNestedManyWithoutPropertyInput_1.AdvertisementCreateNestedManyWithoutPropertyInput)
], PropertyCreateWithoutPriceInput.prototype, "advertisement", void 0);
PropertyCreateWithoutPriceInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PropertyCreateWithoutPriceInput", {
        isAbstract: true
    })
], PropertyCreateWithoutPriceInput);
exports.PropertyCreateWithoutPriceInput = PropertyCreateWithoutPriceInput;
