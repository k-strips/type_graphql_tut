"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdvertisementUpdateWithoutPropertyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const BoolFieldUpdateOperationsInput_1 = require("../inputs/BoolFieldUpdateOperationsInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const OrganizationUpdateOneWithoutAdvertisementInput_1 = require("../inputs/OrganizationUpdateOneWithoutAdvertisementInput");
const PriceUpdateOneWithoutAdvertisementInput_1 = require("../inputs/PriceUpdateOneWithoutAdvertisementInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateOneWithoutAdvertisementInput_1 = require("../inputs/UserUpdateOneWithoutAdvertisementInput");
let AdvertisementUpdateWithoutPropertyInput = class AdvertisementUpdateWithoutPropertyInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], AdvertisementUpdateWithoutPropertyInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PriceUpdateOneWithoutAdvertisementInput_1.PriceUpdateOneWithoutAdvertisementInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PriceUpdateOneWithoutAdvertisementInput_1.PriceUpdateOneWithoutAdvertisementInput)
], AdvertisementUpdateWithoutPropertyInput.prototype, "price", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], AdvertisementUpdateWithoutPropertyInput.prototype, "isExpired", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], AdvertisementUpdateWithoutPropertyInput.prototype, "isPaused", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], AdvertisementUpdateWithoutPropertyInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], AdvertisementUpdateWithoutPropertyInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserUpdateOneWithoutAdvertisementInput_1.UserUpdateOneWithoutAdvertisementInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserUpdateOneWithoutAdvertisementInput_1.UserUpdateOneWithoutAdvertisementInput)
], AdvertisementUpdateWithoutPropertyInput.prototype, "user", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => OrganizationUpdateOneWithoutAdvertisementInput_1.OrganizationUpdateOneWithoutAdvertisementInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", OrganizationUpdateOneWithoutAdvertisementInput_1.OrganizationUpdateOneWithoutAdvertisementInput)
], AdvertisementUpdateWithoutPropertyInput.prototype, "organization", void 0);
AdvertisementUpdateWithoutPropertyInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AdvertisementUpdateWithoutPropertyInput", {
        isAbstract: true
    })
], AdvertisementUpdateWithoutPropertyInput);
exports.AdvertisementUpdateWithoutPropertyInput = AdvertisementUpdateWithoutPropertyInput;
