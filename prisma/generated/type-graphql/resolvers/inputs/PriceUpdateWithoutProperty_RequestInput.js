"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceUpdateWithoutProperty_RequestInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AdvertisementUpdateOneWithoutPriceInput_1 = require("../inputs/AdvertisementUpdateOneWithoutPriceInput");
const EnumCurrencyFieldUpdateOperationsInput_1 = require("../inputs/EnumCurrencyFieldUpdateOperationsInput");
const FloatFieldUpdateOperationsInput_1 = require("../inputs/FloatFieldUpdateOperationsInput");
const NullableEnumDurationFieldUpdateOperationsInput_1 = require("../inputs/NullableEnumDurationFieldUpdateOperationsInput");
const PropertyUpdateOneWithoutPriceInput_1 = require("../inputs/PropertyUpdateOneWithoutPriceInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let PriceUpdateWithoutProperty_RequestInput = class PriceUpdateWithoutProperty_RequestInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], PriceUpdateWithoutProperty_RequestInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput)
], PriceUpdateWithoutProperty_RequestInput.prototype, "figure", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumCurrencyFieldUpdateOperationsInput_1.EnumCurrencyFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumCurrencyFieldUpdateOperationsInput_1.EnumCurrencyFieldUpdateOperationsInput)
], PriceUpdateWithoutProperty_RequestInput.prototype, "currency", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableEnumDurationFieldUpdateOperationsInput_1.NullableEnumDurationFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableEnumDurationFieldUpdateOperationsInput_1.NullableEnumDurationFieldUpdateOperationsInput)
], PriceUpdateWithoutProperty_RequestInput.prototype, "duration", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyUpdateOneWithoutPriceInput_1.PropertyUpdateOneWithoutPriceInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyUpdateOneWithoutPriceInput_1.PropertyUpdateOneWithoutPriceInput)
], PriceUpdateWithoutProperty_RequestInput.prototype, "Property", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementUpdateOneWithoutPriceInput_1.AdvertisementUpdateOneWithoutPriceInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementUpdateOneWithoutPriceInput_1.AdvertisementUpdateOneWithoutPriceInput)
], PriceUpdateWithoutProperty_RequestInput.prototype, "advertisement", void 0);
PriceUpdateWithoutProperty_RequestInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PriceUpdateWithoutProperty_RequestInput", {
        isAbstract: true
    })
], PriceUpdateWithoutProperty_RequestInput);
exports.PriceUpdateWithoutProperty_RequestInput = PriceUpdateWithoutProperty_RequestInput;
