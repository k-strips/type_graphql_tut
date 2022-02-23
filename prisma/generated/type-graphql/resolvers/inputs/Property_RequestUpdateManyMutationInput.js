"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Property_RequestUpdateManyMutationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumAcquisitionTypeFieldUpdateOperationsInput_1 = require("../inputs/EnumAcquisitionTypeFieldUpdateOperationsInput");
const EnumPropertyTypeFieldUpdateOperationsInput_1 = require("../inputs/EnumPropertyTypeFieldUpdateOperationsInput");
const NullableEnumPropertyStateFieldUpdateOperationsInput_1 = require("../inputs/NullableEnumPropertyStateFieldUpdateOperationsInput");
const NullableIntFieldUpdateOperationsInput_1 = require("../inputs/NullableIntFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const Property_RequestUpdateamenitiesInput_1 = require("../inputs/Property_RequestUpdateamenitiesInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let Property_RequestUpdateManyMutationInput = class Property_RequestUpdateManyMutationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], Property_RequestUpdateManyMutationInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumPropertyTypeFieldUpdateOperationsInput_1.EnumPropertyTypeFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumPropertyTypeFieldUpdateOperationsInput_1.EnumPropertyTypeFieldUpdateOperationsInput)
], Property_RequestUpdateManyMutationInput.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumAcquisitionTypeFieldUpdateOperationsInput_1.EnumAcquisitionTypeFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumAcquisitionTypeFieldUpdateOperationsInput_1.EnumAcquisitionTypeFieldUpdateOperationsInput)
], Property_RequestUpdateManyMutationInput.prototype, "acquisition", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableEnumPropertyStateFieldUpdateOperationsInput_1.NullableEnumPropertyStateFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableEnumPropertyStateFieldUpdateOperationsInput_1.NullableEnumPropertyStateFieldUpdateOperationsInput)
], Property_RequestUpdateManyMutationInput.prototype, "state", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestUpdateamenitiesInput_1.Property_RequestUpdateamenitiesInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestUpdateamenitiesInput_1.Property_RequestUpdateamenitiesInput)
], Property_RequestUpdateManyMutationInput.prototype, "amenities", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput)
], Property_RequestUpdateManyMutationInput.prototype, "parkingCapacity", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput)
], Property_RequestUpdateManyMutationInput.prototype, "seating", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput)
], Property_RequestUpdateManyMutationInput.prototype, "bedrooms", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput)
], Property_RequestUpdateManyMutationInput.prototype, "bathrooms", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], Property_RequestUpdateManyMutationInput.prototype, "additionalInfo", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], Property_RequestUpdateManyMutationInput.prototype, "region", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], Property_RequestUpdateManyMutationInput.prototype, "city", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], Property_RequestUpdateManyMutationInput.prototype, "town", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], Property_RequestUpdateManyMutationInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], Property_RequestUpdateManyMutationInput.prototype, "updatedAt", void 0);
Property_RequestUpdateManyMutationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("Property_RequestUpdateManyMutationInput", {
        isAbstract: true
    })
], Property_RequestUpdateManyMutationInput);
exports.Property_RequestUpdateManyMutationInput = Property_RequestUpdateManyMutationInput;
