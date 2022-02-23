"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdvertisementUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const BoolFieldUpdateOperationsInput_1 = require("../inputs/BoolFieldUpdateOperationsInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const OrganizationUpdateOneWithoutAdvertisementInput_1 = require("../inputs/OrganizationUpdateOneWithoutAdvertisementInput");
const PriceUpdateOneWithoutAdvertisementInput_1 = require("../inputs/PriceUpdateOneWithoutAdvertisementInput");
const PropertyUpdateOneWithoutAdvertisementInput_1 = require("../inputs/PropertyUpdateOneWithoutAdvertisementInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateOneWithoutAdvertisementInput_1 = require("../inputs/UserUpdateOneWithoutAdvertisementInput");
let AdvertisementUpdateInput = class AdvertisementUpdateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], AdvertisementUpdateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PriceUpdateOneWithoutAdvertisementInput_1.PriceUpdateOneWithoutAdvertisementInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PriceUpdateOneWithoutAdvertisementInput_1.PriceUpdateOneWithoutAdvertisementInput)
], AdvertisementUpdateInput.prototype, "price", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], AdvertisementUpdateInput.prototype, "isExpired", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], AdvertisementUpdateInput.prototype, "isPaused", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], AdvertisementUpdateInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], AdvertisementUpdateInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserUpdateOneWithoutAdvertisementInput_1.UserUpdateOneWithoutAdvertisementInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserUpdateOneWithoutAdvertisementInput_1.UserUpdateOneWithoutAdvertisementInput)
], AdvertisementUpdateInput.prototype, "user", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => OrganizationUpdateOneWithoutAdvertisementInput_1.OrganizationUpdateOneWithoutAdvertisementInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", OrganizationUpdateOneWithoutAdvertisementInput_1.OrganizationUpdateOneWithoutAdvertisementInput)
], AdvertisementUpdateInput.prototype, "organization", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyUpdateOneWithoutAdvertisementInput_1.PropertyUpdateOneWithoutAdvertisementInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyUpdateOneWithoutAdvertisementInput_1.PropertyUpdateOneWithoutAdvertisementInput)
], AdvertisementUpdateInput.prototype, "property", void 0);
AdvertisementUpdateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AdvertisementUpdateInput", {
        isAbstract: true
    })
], AdvertisementUpdateInput);
exports.AdvertisementUpdateInput = AdvertisementUpdateInput;
