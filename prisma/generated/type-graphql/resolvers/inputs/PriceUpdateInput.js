"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AdvertisementUpdateOneWithoutPriceInput_1 = require("../inputs/AdvertisementUpdateOneWithoutPriceInput");
const EnumCurrencyFieldUpdateOperationsInput_1 = require("../inputs/EnumCurrencyFieldUpdateOperationsInput");
const FloatFieldUpdateOperationsInput_1 = require("../inputs/FloatFieldUpdateOperationsInput");
const NullableEnumDurationFieldUpdateOperationsInput_1 = require("../inputs/NullableEnumDurationFieldUpdateOperationsInput");
const PropertyUpdateOneWithoutPriceInput_1 = require("../inputs/PropertyUpdateOneWithoutPriceInput");
const Property_RequestUpdateOneWithoutPriceRangeInput_1 = require("../inputs/Property_RequestUpdateOneWithoutPriceRangeInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let PriceUpdateInput = class PriceUpdateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], PriceUpdateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput)
], PriceUpdateInput.prototype, "figure", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumCurrencyFieldUpdateOperationsInput_1.EnumCurrencyFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumCurrencyFieldUpdateOperationsInput_1.EnumCurrencyFieldUpdateOperationsInput)
], PriceUpdateInput.prototype, "currency", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NullableEnumDurationFieldUpdateOperationsInput_1.NullableEnumDurationFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NullableEnumDurationFieldUpdateOperationsInput_1.NullableEnumDurationFieldUpdateOperationsInput)
], PriceUpdateInput.prototype, "duration", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyUpdateOneWithoutPriceInput_1.PropertyUpdateOneWithoutPriceInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyUpdateOneWithoutPriceInput_1.PropertyUpdateOneWithoutPriceInput)
], PriceUpdateInput.prototype, "Property", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementUpdateOneWithoutPriceInput_1.AdvertisementUpdateOneWithoutPriceInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementUpdateOneWithoutPriceInput_1.AdvertisementUpdateOneWithoutPriceInput)
], PriceUpdateInput.prototype, "advertisement", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestUpdateOneWithoutPriceRangeInput_1.Property_RequestUpdateOneWithoutPriceRangeInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestUpdateOneWithoutPriceRangeInput_1.Property_RequestUpdateOneWithoutPriceRangeInput)
], PriceUpdateInput.prototype, "Property_Request", void 0);
PriceUpdateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PriceUpdateInput", {
        isAbstract: true
    })
], PriceUpdateInput);
exports.PriceUpdateInput = PriceUpdateInput;
