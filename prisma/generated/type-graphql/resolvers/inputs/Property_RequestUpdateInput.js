"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Property_RequestUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumAcquisitionTypeFieldUpdateOperationsInput_1 = require("../inputs/EnumAcquisitionTypeFieldUpdateOperationsInput");
const EnumPropertyTypeFieldUpdateOperationsInput_1 = require("../inputs/EnumPropertyTypeFieldUpdateOperationsInput");
const LandSizeUpdateOneWithoutProperty_RequestInput_1 = require("../inputs/LandSizeUpdateOneWithoutProperty_RequestInput");
const NullableEnumPropertyStateFieldUpdateOperationsInput_1 = require("../inputs/NullableEnumPropertyStateFieldUpdateOperationsInput");
const NullableIntFieldUpdateOperationsInput_1 = require("../inputs/NullableIntFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const PriceUpdateManyWithoutProperty_RequestInput_1 = require("../inputs/PriceUpdateManyWithoutProperty_RequestInput");
const Property_RequestUpdateamenitiesInput_1 = require("../inputs/Property_RequestUpdateamenitiesInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateOneWithoutRequestInput_1 = require("../inputs/UserUpdateOneWithoutRequestInput");
let Property_RequestUpdateInput = class Property_RequestUpdateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], Property_RequestUpdateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumPropertyTypeFieldUpdateOperationsInput_1.EnumPropertyTypeFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumPropertyTypeFieldUpdateOperationsInput_1.EnumPropertyTypeFieldUpdateOperationsInput)
], Property_RequestUpdateInput.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumAcquisitionTypeFieldUpdateOperationsInput_1.EnumAcquisitionTypeFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumAcquisitionTypeFieldUpdateOperationsInput_1.EnumAcquisitionTypeFieldUpdateOperationsInput)
], Property_RequestUpdateInput.prototype, "acquisition", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableEnumPropertyStateFieldUpdateOperationsInput_1.NullableEnumPropertyStateFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableEnumPropertyStateFieldUpdateOperationsInput_1.NullableEnumPropertyStateFieldUpdateOperationsInput)
], Property_RequestUpdateInput.prototype, "state", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PriceUpdateManyWithoutProperty_RequestInput_1.PriceUpdateManyWithoutProperty_RequestInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PriceUpdateManyWithoutProperty_RequestInput_1.PriceUpdateManyWithoutProperty_RequestInput)
], Property_RequestUpdateInput.prototype, "priceRange", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestUpdateamenitiesInput_1.Property_RequestUpdateamenitiesInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestUpdateamenitiesInput_1.Property_RequestUpdateamenitiesInput)
], Property_RequestUpdateInput.prototype, "amenities", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LandSizeUpdateOneWithoutProperty_RequestInput_1.LandSizeUpdateOneWithoutProperty_RequestInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LandSizeUpdateOneWithoutProperty_RequestInput_1.LandSizeUpdateOneWithoutProperty_RequestInput)
], Property_RequestUpdateInput.prototype, "size", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput)
], Property_RequestUpdateInput.prototype, "parkingCapacity", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput)
], Property_RequestUpdateInput.prototype, "seating", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput)
], Property_RequestUpdateInput.prototype, "bedrooms", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput)
], Property_RequestUpdateInput.prototype, "bathrooms", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], Property_RequestUpdateInput.prototype, "additionalInfo", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], Property_RequestUpdateInput.prototype, "region", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], Property_RequestUpdateInput.prototype, "city", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], Property_RequestUpdateInput.prototype, "town", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], Property_RequestUpdateInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], Property_RequestUpdateInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserUpdateOneWithoutRequestInput_1.UserUpdateOneWithoutRequestInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserUpdateOneWithoutRequestInput_1.UserUpdateOneWithoutRequestInput)
], Property_RequestUpdateInput.prototype, "user", void 0);
Property_RequestUpdateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("Property_RequestUpdateInput", {
        isAbstract: true
    })
], Property_RequestUpdateInput);
exports.Property_RequestUpdateInput = Property_RequestUpdateInput;
