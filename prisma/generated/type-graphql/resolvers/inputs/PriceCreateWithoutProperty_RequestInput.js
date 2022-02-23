"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceCreateWithoutProperty_RequestInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AdvertisementCreateNestedOneWithoutPriceInput_1 = require("../inputs/AdvertisementCreateNestedOneWithoutPriceInput");
const PropertyCreateNestedOneWithoutPriceInput_1 = require("../inputs/PropertyCreateNestedOneWithoutPriceInput");
const Currency_1 = require("../../enums/Currency");
const Duration_1 = require("../../enums/Duration");
let PriceCreateWithoutProperty_RequestInput = class PriceCreateWithoutProperty_RequestInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PriceCreateWithoutProperty_RequestInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PriceCreateWithoutProperty_RequestInput.prototype, "figure", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Currency_1.Currency, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PriceCreateWithoutProperty_RequestInput.prototype, "currency", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Duration_1.Duration, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PriceCreateWithoutProperty_RequestInput.prototype, "duration", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyCreateNestedOneWithoutPriceInput_1.PropertyCreateNestedOneWithoutPriceInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyCreateNestedOneWithoutPriceInput_1.PropertyCreateNestedOneWithoutPriceInput)
], PriceCreateWithoutProperty_RequestInput.prototype, "Property", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementCreateNestedOneWithoutPriceInput_1.AdvertisementCreateNestedOneWithoutPriceInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementCreateNestedOneWithoutPriceInput_1.AdvertisementCreateNestedOneWithoutPriceInput)
], PriceCreateWithoutProperty_RequestInput.prototype, "advertisement", void 0);
PriceCreateWithoutProperty_RequestInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PriceCreateWithoutProperty_RequestInput", {
        isAbstract: true
    })
], PriceCreateWithoutProperty_RequestInput);
exports.PriceCreateWithoutProperty_RequestInput = PriceCreateWithoutProperty_RequestInput;
