"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Property_RequestCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LandSizeCreateNestedOneWithoutProperty_RequestInput_1 = require("../inputs/LandSizeCreateNestedOneWithoutProperty_RequestInput");
const PriceCreateNestedManyWithoutProperty_RequestInput_1 = require("../inputs/PriceCreateNestedManyWithoutProperty_RequestInput");
const Property_RequestCreateamenitiesInput_1 = require("../inputs/Property_RequestCreateamenitiesInput");
const UserCreateNestedOneWithoutRequestInput_1 = require("../inputs/UserCreateNestedOneWithoutRequestInput");
const AcquisitionType_1 = require("../../enums/AcquisitionType");
const PropertyState_1 = require("../../enums/PropertyState");
const PropertyType_1 = require("../../enums/PropertyType");
let Property_RequestCreateInput = class Property_RequestCreateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Property_RequestCreateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyType_1.PropertyType, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Property_RequestCreateInput.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AcquisitionType_1.AcquisitionType, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Property_RequestCreateInput.prototype, "acquisition", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyState_1.PropertyState, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Property_RequestCreateInput.prototype, "state", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PriceCreateNestedManyWithoutProperty_RequestInput_1.PriceCreateNestedManyWithoutProperty_RequestInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PriceCreateNestedManyWithoutProperty_RequestInput_1.PriceCreateNestedManyWithoutProperty_RequestInput)
], Property_RequestCreateInput.prototype, "priceRange", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestCreateamenitiesInput_1.Property_RequestCreateamenitiesInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestCreateamenitiesInput_1.Property_RequestCreateamenitiesInput)
], Property_RequestCreateInput.prototype, "amenities", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LandSizeCreateNestedOneWithoutProperty_RequestInput_1.LandSizeCreateNestedOneWithoutProperty_RequestInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LandSizeCreateNestedOneWithoutProperty_RequestInput_1.LandSizeCreateNestedOneWithoutProperty_RequestInput)
], Property_RequestCreateInput.prototype, "size", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Property_RequestCreateInput.prototype, "parkingCapacity", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Property_RequestCreateInput.prototype, "seating", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Property_RequestCreateInput.prototype, "bedrooms", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Property_RequestCreateInput.prototype, "bathrooms", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Property_RequestCreateInput.prototype, "additionalInfo", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Property_RequestCreateInput.prototype, "region", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Property_RequestCreateInput.prototype, "city", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Property_RequestCreateInput.prototype, "town", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], Property_RequestCreateInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], Property_RequestCreateInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutRequestInput_1.UserCreateNestedOneWithoutRequestInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateNestedOneWithoutRequestInput_1.UserCreateNestedOneWithoutRequestInput)
], Property_RequestCreateInput.prototype, "user", void 0);
Property_RequestCreateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("Property_RequestCreateInput", {
        isAbstract: true
    })
], Property_RequestCreateInput);
exports.Property_RequestCreateInput = Property_RequestCreateInput;
