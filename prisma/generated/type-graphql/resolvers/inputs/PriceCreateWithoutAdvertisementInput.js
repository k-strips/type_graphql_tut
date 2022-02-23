"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceCreateWithoutAdvertisementInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PropertyCreateNestedOneWithoutPriceInput_1 = require("../inputs/PropertyCreateNestedOneWithoutPriceInput");
const Property_RequestCreateNestedOneWithoutPriceRangeInput_1 = require("../inputs/Property_RequestCreateNestedOneWithoutPriceRangeInput");
const Currency_1 = require("../../enums/Currency");
const Duration_1 = require("../../enums/Duration");
let PriceCreateWithoutAdvertisementInput = class PriceCreateWithoutAdvertisementInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PriceCreateWithoutAdvertisementInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PriceCreateWithoutAdvertisementInput.prototype, "figure", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Currency_1.Currency, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PriceCreateWithoutAdvertisementInput.prototype, "currency", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Duration_1.Duration, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PriceCreateWithoutAdvertisementInput.prototype, "duration", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyCreateNestedOneWithoutPriceInput_1.PropertyCreateNestedOneWithoutPriceInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyCreateNestedOneWithoutPriceInput_1.PropertyCreateNestedOneWithoutPriceInput)
], PriceCreateWithoutAdvertisementInput.prototype, "Property", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestCreateNestedOneWithoutPriceRangeInput_1.Property_RequestCreateNestedOneWithoutPriceRangeInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestCreateNestedOneWithoutPriceRangeInput_1.Property_RequestCreateNestedOneWithoutPriceRangeInput)
], PriceCreateWithoutAdvertisementInput.prototype, "Property_Request", void 0);
PriceCreateWithoutAdvertisementInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PriceCreateWithoutAdvertisementInput", {
        isAbstract: true
    })
], PriceCreateWithoutAdvertisementInput);
exports.PriceCreateWithoutAdvertisementInput = PriceCreateWithoutAdvertisementInput;
