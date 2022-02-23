"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AdvertisementCreateNestedManyWithoutPropertyInput_1 = require("../inputs/AdvertisementCreateNestedManyWithoutPropertyInput");
const LandSizeCreateNestedOneWithoutPropertyInput_1 = require("../inputs/LandSizeCreateNestedOneWithoutPropertyInput");
const OrganizationCreateNestedOneWithoutPropertiesInput_1 = require("../inputs/OrganizationCreateNestedOneWithoutPropertiesInput");
const PriceCreateNestedOneWithoutPropertyInput_1 = require("../inputs/PriceCreateNestedOneWithoutPropertyInput");
const PropertyCreateamenitiesInput_1 = require("../inputs/PropertyCreateamenitiesInput");
const PropertyCreateimagesInput_1 = require("../inputs/PropertyCreateimagesInput");
const SaveCreateNestedManyWithoutPropertyInput_1 = require("../inputs/SaveCreateNestedManyWithoutPropertyInput");
const UserCreateNestedOneWithoutPropertyInput_1 = require("../inputs/UserCreateNestedOneWithoutPropertyInput");
const AcquisitionType_1 = require("../../enums/AcquisitionType");
const PropertyState_1 = require("../../enums/PropertyState");
const PropertyType_1 = require("../../enums/PropertyType");
let PropertyCreateInput = class PropertyCreateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PropertyCreateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyType_1.PropertyType, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PropertyCreateInput.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AcquisitionType_1.AcquisitionType, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PropertyCreateInput.prototype, "acquisition", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyState_1.PropertyState, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PropertyCreateInput.prototype, "state", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LandSizeCreateNestedOneWithoutPropertyInput_1.LandSizeCreateNestedOneWithoutPropertyInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LandSizeCreateNestedOneWithoutPropertyInput_1.LandSizeCreateNestedOneWithoutPropertyInput)
], PropertyCreateInput.prototype, "size", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PriceCreateNestedOneWithoutPropertyInput_1.PriceCreateNestedOneWithoutPropertyInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PriceCreateNestedOneWithoutPropertyInput_1.PriceCreateNestedOneWithoutPropertyInput)
], PropertyCreateInput.prototype, "price", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyCreateimagesInput_1.PropertyCreateimagesInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyCreateimagesInput_1.PropertyCreateimagesInput)
], PropertyCreateInput.prototype, "images", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyCreateamenitiesInput_1.PropertyCreateamenitiesInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyCreateamenitiesInput_1.PropertyCreateamenitiesInput)
], PropertyCreateInput.prototype, "amenities", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PropertyCreateInput.prototype, "parkingCapacity", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PropertyCreateInput.prototype, "seating", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PropertyCreateInput.prototype, "bedrooms", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PropertyCreateInput.prototype, "bathrooms", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PropertyCreateInput.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PropertyCreateInput.prototype, "views", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SaveCreateNestedManyWithoutPropertyInput_1.SaveCreateNestedManyWithoutPropertyInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SaveCreateNestedManyWithoutPropertyInput_1.SaveCreateNestedManyWithoutPropertyInput)
], PropertyCreateInput.prototype, "likes", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PropertyCreateInput.prototype, "source", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PropertyCreateInput.prototype, "region", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PropertyCreateInput.prototype, "city", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PropertyCreateInput.prototype, "town", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PropertyCreateInput.prototype, "streetName", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PropertyCreateInput.prototype, "digitalAddress", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PropertyCreateInput.prototype, "locationDesc", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PropertyCreateInput.prototype, "lat", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PropertyCreateInput.prototype, "lon", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], PropertyCreateInput.prototype, "isDeleted", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], PropertyCreateInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], PropertyCreateInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutPropertyInput_1.UserCreateNestedOneWithoutPropertyInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateNestedOneWithoutPropertyInput_1.UserCreateNestedOneWithoutPropertyInput)
], PropertyCreateInput.prototype, "owner", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => OrganizationCreateNestedOneWithoutPropertiesInput_1.OrganizationCreateNestedOneWithoutPropertiesInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", OrganizationCreateNestedOneWithoutPropertiesInput_1.OrganizationCreateNestedOneWithoutPropertiesInput)
], PropertyCreateInput.prototype, "organization", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementCreateNestedManyWithoutPropertyInput_1.AdvertisementCreateNestedManyWithoutPropertyInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementCreateNestedManyWithoutPropertyInput_1.AdvertisementCreateNestedManyWithoutPropertyInput)
], PropertyCreateInput.prototype, "advertisement", void 0);
PropertyCreateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PropertyCreateInput", {
        isAbstract: true
    })
], PropertyCreateInput);
exports.PropertyCreateInput = PropertyCreateInput;
