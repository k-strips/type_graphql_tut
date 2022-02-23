"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AdvertisementCreateNestedOneWithoutPriceInput_1 = require("../inputs/AdvertisementCreateNestedOneWithoutPriceInput");
const PropertyCreateNestedOneWithoutPriceInput_1 = require("../inputs/PropertyCreateNestedOneWithoutPriceInput");
const Property_RequestCreateNestedOneWithoutPriceRangeInput_1 = require("../inputs/Property_RequestCreateNestedOneWithoutPriceRangeInput");
const Currency_1 = require("../../enums/Currency");
const Duration_1 = require("../../enums/Duration");
let PriceCreateInput = class PriceCreateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PriceCreateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PriceCreateInput.prototype, "figure", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Currency_1.Currency, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PriceCreateInput.prototype, "currency", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Duration_1.Duration, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PriceCreateInput.prototype, "duration", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyCreateNestedOneWithoutPriceInput_1.PropertyCreateNestedOneWithoutPriceInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyCreateNestedOneWithoutPriceInput_1.PropertyCreateNestedOneWithoutPriceInput)
], PriceCreateInput.prototype, "Property", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementCreateNestedOneWithoutPriceInput_1.AdvertisementCreateNestedOneWithoutPriceInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementCreateNestedOneWithoutPriceInput_1.AdvertisementCreateNestedOneWithoutPriceInput)
], PriceCreateInput.prototype, "advertisement", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestCreateNestedOneWithoutPriceRangeInput_1.Property_RequestCreateNestedOneWithoutPriceRangeInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestCreateNestedOneWithoutPriceRangeInput_1.Property_RequestCreateNestedOneWithoutPriceRangeInput)
], PriceCreateInput.prototype, "Property_Request", void 0);
PriceCreateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PriceCreateInput", {
        isAbstract: true
    })
], PriceCreateInput);
exports.PriceCreateInput = PriceCreateInput;
