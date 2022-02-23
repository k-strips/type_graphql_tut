"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceCreateWithoutPropertyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AdvertisementCreateNestedOneWithoutPriceInput_1 = require("../inputs/AdvertisementCreateNestedOneWithoutPriceInput");
const Property_RequestCreateNestedOneWithoutPriceRangeInput_1 = require("../inputs/Property_RequestCreateNestedOneWithoutPriceRangeInput");
const Currency_1 = require("../../enums/Currency");
const Duration_1 = require("../../enums/Duration");
let PriceCreateWithoutPropertyInput = class PriceCreateWithoutPropertyInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PriceCreateWithoutPropertyInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PriceCreateWithoutPropertyInput.prototype, "figure", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Currency_1.Currency, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PriceCreateWithoutPropertyInput.prototype, "currency", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Duration_1.Duration, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PriceCreateWithoutPropertyInput.prototype, "duration", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementCreateNestedOneWithoutPriceInput_1.AdvertisementCreateNestedOneWithoutPriceInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementCreateNestedOneWithoutPriceInput_1.AdvertisementCreateNestedOneWithoutPriceInput)
], PriceCreateWithoutPropertyInput.prototype, "advertisement", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestCreateNestedOneWithoutPriceRangeInput_1.Property_RequestCreateNestedOneWithoutPriceRangeInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestCreateNestedOneWithoutPriceRangeInput_1.Property_RequestCreateNestedOneWithoutPriceRangeInput)
], PriceCreateWithoutPropertyInput.prototype, "Property_Request", void 0);
PriceCreateWithoutPropertyInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PriceCreateWithoutPropertyInput", {
        isAbstract: true
    })
], PriceCreateWithoutPropertyInput);
exports.PriceCreateWithoutPropertyInput = PriceCreateWithoutPropertyInput;
