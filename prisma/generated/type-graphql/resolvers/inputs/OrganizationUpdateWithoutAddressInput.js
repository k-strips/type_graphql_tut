"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationUpdateWithoutAddressInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AdvertisementUpdateManyWithoutOrganizationInput_1 = require("../inputs/AdvertisementUpdateManyWithoutOrganizationInput");
const BoolFieldUpdateOperationsInput_1 = require("../inputs/BoolFieldUpdateOperationsInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const PropertyUpdateManyWithoutOrganizationInput_1 = require("../inputs/PropertyUpdateManyWithoutOrganizationInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateManyWithoutOrganizationInput_1 = require("../inputs/UserUpdateManyWithoutOrganizationInput");
let OrganizationUpdateWithoutAddressInput = class OrganizationUpdateWithoutAddressInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], OrganizationUpdateWithoutAddressInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], OrganizationUpdateWithoutAddressInput.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserUpdateManyWithoutOrganizationInput_1.UserUpdateManyWithoutOrganizationInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserUpdateManyWithoutOrganizationInput_1.UserUpdateManyWithoutOrganizationInput)
], OrganizationUpdateWithoutAddressInput.prototype, "members", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyUpdateManyWithoutOrganizationInput_1.PropertyUpdateManyWithoutOrganizationInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyUpdateManyWithoutOrganizationInput_1.PropertyUpdateManyWithoutOrganizationInput)
], OrganizationUpdateWithoutAddressInput.prototype, "properties", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementUpdateManyWithoutOrganizationInput_1.AdvertisementUpdateManyWithoutOrganizationInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementUpdateManyWithoutOrganizationInput_1.AdvertisementUpdateManyWithoutOrganizationInput)
], OrganizationUpdateWithoutAddressInput.prototype, "advertisement", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], OrganizationUpdateWithoutAddressInput.prototype, "isVerified", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], OrganizationUpdateWithoutAddressInput.prototype, "isRegistrated", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], OrganizationUpdateWithoutAddressInput.prototype, "isDeleted", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], OrganizationUpdateWithoutAddressInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], OrganizationUpdateWithoutAddressInput.prototype, "updatedAt", void 0);
OrganizationUpdateWithoutAddressInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("OrganizationUpdateWithoutAddressInput", {
        isAbstract: true
    })
], OrganizationUpdateWithoutAddressInput);
exports.OrganizationUpdateWithoutAddressInput = OrganizationUpdateWithoutAddressInput;
