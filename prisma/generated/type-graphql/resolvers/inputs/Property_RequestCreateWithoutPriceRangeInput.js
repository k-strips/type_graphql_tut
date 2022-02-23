"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Property_RequestCreateWithoutPriceRangeInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LandSizeCreateNestedOneWithoutProperty_RequestInput_1 = require("../inputs/LandSizeCreateNestedOneWithoutProperty_RequestInput");
const Property_RequestCreateamenitiesInput_1 = require("../inputs/Property_RequestCreateamenitiesInput");
const UserCreateNestedOneWithoutRequestInput_1 = require("../inputs/UserCreateNestedOneWithoutRequestInput");
const AcquisitionType_1 = require("../../enums/AcquisitionType");
const PropertyState_1 = require("../../enums/PropertyState");
const PropertyType_1 = require("../../enums/PropertyType");
let Property_RequestCreateWithoutPriceRangeInput = class Property_RequestCreateWithoutPriceRangeInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Property_RequestCreateWithoutPriceRangeInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyType_1.PropertyType, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Property_RequestCreateWithoutPriceRangeInput.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AcquisitionType_1.AcquisitionType, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Property_RequestCreateWithoutPriceRangeInput.prototype, "acquisition", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyState_1.PropertyState, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Property_RequestCreateWithoutPriceRangeInput.prototype, "state", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestCreateamenitiesInput_1.Property_RequestCreateamenitiesInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestCreateamenitiesInput_1.Property_RequestCreateamenitiesInput)
], Property_RequestCreateWithoutPriceRangeInput.prototype, "amenities", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LandSizeCreateNestedOneWithoutProperty_RequestInput_1.LandSizeCreateNestedOneWithoutProperty_RequestInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LandSizeCreateNestedOneWithoutProperty_RequestInput_1.LandSizeCreateNestedOneWithoutProperty_RequestInput)
], Property_RequestCreateWithoutPriceRangeInput.prototype, "size", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Property_RequestCreateWithoutPriceRangeInput.prototype, "parkingCapacity", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Property_RequestCreateWithoutPriceRangeInput.prototype, "seating", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Property_RequestCreateWithoutPriceRangeInput.prototype, "bedrooms", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Property_RequestCreateWithoutPriceRangeInput.prototype, "bathrooms", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Property_RequestCreateWithoutPriceRangeInput.prototype, "additionalInfo", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Property_RequestCreateWithoutPriceRangeInput.prototype, "region", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Property_RequestCreateWithoutPriceRangeInput.prototype, "city", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Property_RequestCreateWithoutPriceRangeInput.prototype, "town", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], Property_RequestCreateWithoutPriceRangeInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], Property_RequestCreateWithoutPriceRangeInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutRequestInput_1.UserCreateNestedOneWithoutRequestInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateNestedOneWithoutRequestInput_1.UserCreateNestedOneWithoutRequestInput)
], Property_RequestCreateWithoutPriceRangeInput.prototype, "user", void 0);
Property_RequestCreateWithoutPriceRangeInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("Property_RequestCreateWithoutPriceRangeInput", {
        isAbstract: true
    })
], Property_RequestCreateWithoutPriceRangeInput);
exports.Property_RequestCreateWithoutPriceRangeInput = Property_RequestCreateWithoutPriceRangeInput;
