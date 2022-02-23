"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateWithoutOrganizationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AddressUpdateOneWithoutUserInput_1 = require("../inputs/AddressUpdateOneWithoutUserInput");
const AdvertisementUpdateManyWithoutUserInput_1 = require("../inputs/AdvertisementUpdateManyWithoutUserInput");
const BoolFieldUpdateOperationsInput_1 = require("../inputs/BoolFieldUpdateOperationsInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumUserStatusFieldUpdateOperationsInput_1 = require("../inputs/EnumUserStatusFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const PropertyUpdateManyWithoutOwnerInput_1 = require("../inputs/PropertyUpdateManyWithoutOwnerInput");
const Property_RequestUpdateManyWithoutUserInput_1 = require("../inputs/Property_RequestUpdateManyWithoutUserInput");
const SaveUpdateManyWithoutUserInput_1 = require("../inputs/SaveUpdateManyWithoutUserInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let UserUpdateWithoutOrganizationInput = class UserUpdateWithoutOrganizationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserUpdateWithoutOrganizationInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserUpdateWithoutOrganizationInput.prototype, "firstName", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserUpdateWithoutOrganizationInput.prototype, "lastName", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutOrganizationInput.prototype, "middleName", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumUserStatusFieldUpdateOperationsInput_1.EnumUserStatusFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumUserStatusFieldUpdateOperationsInput_1.EnumUserStatusFieldUpdateOperationsInput)
], UserUpdateWithoutOrganizationInput.prototype, "status", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AddressUpdateOneWithoutUserInput_1.AddressUpdateOneWithoutUserInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AddressUpdateOneWithoutUserInput_1.AddressUpdateOneWithoutUserInput)
], UserUpdateWithoutOrganizationInput.prototype, "address", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyUpdateManyWithoutOwnerInput_1.PropertyUpdateManyWithoutOwnerInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyUpdateManyWithoutOwnerInput_1.PropertyUpdateManyWithoutOwnerInput)
], UserUpdateWithoutOrganizationInput.prototype, "property", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SaveUpdateManyWithoutUserInput_1.SaveUpdateManyWithoutUserInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SaveUpdateManyWithoutUserInput_1.SaveUpdateManyWithoutUserInput)
], UserUpdateWithoutOrganizationInput.prototype, "saves", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementUpdateManyWithoutUserInput_1.AdvertisementUpdateManyWithoutUserInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementUpdateManyWithoutUserInput_1.AdvertisementUpdateManyWithoutUserInput)
], UserUpdateWithoutOrganizationInput.prototype, "advertisement", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestUpdateManyWithoutUserInput_1.Property_RequestUpdateManyWithoutUserInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestUpdateManyWithoutUserInput_1.Property_RequestUpdateManyWithoutUserInput)
], UserUpdateWithoutOrganizationInput.prototype, "request", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], UserUpdateWithoutOrganizationInput.prototype, "isVerified", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], UserUpdateWithoutOrganizationInput.prototype, "isRegistrated", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], UserUpdateWithoutOrganizationInput.prototype, "isDeleted", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], UserUpdateWithoutOrganizationInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], UserUpdateWithoutOrganizationInput.prototype, "updatedAt", void 0);
UserUpdateWithoutOrganizationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserUpdateWithoutOrganizationInput", {
        isAbstract: true
    })
], UserUpdateWithoutOrganizationInput);
exports.UserUpdateWithoutOrganizationInput = UserUpdateWithoutOrganizationInput;
