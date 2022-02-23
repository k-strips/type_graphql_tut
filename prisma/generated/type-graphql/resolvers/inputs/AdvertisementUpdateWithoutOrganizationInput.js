"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdvertisementUpdateWithoutOrganizationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const BoolFieldUpdateOperationsInput_1 = require("../inputs/BoolFieldUpdateOperationsInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const PriceUpdateOneWithoutAdvertisementInput_1 = require("../inputs/PriceUpdateOneWithoutAdvertisementInput");
const PropertyUpdateOneWithoutAdvertisementInput_1 = require("../inputs/PropertyUpdateOneWithoutAdvertisementInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateOneWithoutAdvertisementInput_1 = require("../inputs/UserUpdateOneWithoutAdvertisementInput");
let AdvertisementUpdateWithoutOrganizationInput = class AdvertisementUpdateWithoutOrganizationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], AdvertisementUpdateWithoutOrganizationInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PriceUpdateOneWithoutAdvertisementInput_1.PriceUpdateOneWithoutAdvertisementInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PriceUpdateOneWithoutAdvertisementInput_1.PriceUpdateOneWithoutAdvertisementInput)
], AdvertisementUpdateWithoutOrganizationInput.prototype, "price", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], AdvertisementUpdateWithoutOrganizationInput.prototype, "isExpired", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], AdvertisementUpdateWithoutOrganizationInput.prototype, "isPaused", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], AdvertisementUpdateWithoutOrganizationInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], AdvertisementUpdateWithoutOrganizationInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserUpdateOneWithoutAdvertisementInput_1.UserUpdateOneWithoutAdvertisementInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserUpdateOneWithoutAdvertisementInput_1.UserUpdateOneWithoutAdvertisementInput)
], AdvertisementUpdateWithoutOrganizationInput.prototype, "user", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyUpdateOneWithoutAdvertisementInput_1.PropertyUpdateOneWithoutAdvertisementInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyUpdateOneWithoutAdvertisementInput_1.PropertyUpdateOneWithoutAdvertisementInput)
], AdvertisementUpdateWithoutOrganizationInput.prototype, "property", void 0);
AdvertisementUpdateWithoutOrganizationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AdvertisementUpdateWithoutOrganizationInput", {
        isAbstract: true
    })
], AdvertisementUpdateWithoutOrganizationInput);
exports.AdvertisementUpdateWithoutOrganizationInput = AdvertisementUpdateWithoutOrganizationInput;
