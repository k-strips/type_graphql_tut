"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceCreateManyProperty_RequestInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Currency_1 = require("../../enums/Currency");
const Duration_1 = require("../../enums/Duration");
let PriceCreateManyProperty_RequestInput = class PriceCreateManyProperty_RequestInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PriceCreateManyProperty_RequestInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PriceCreateManyProperty_RequestInput.prototype, "figure", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Currency_1.Currency, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PriceCreateManyProperty_RequestInput.prototype, "currency", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Duration_1.Duration, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PriceCreateManyProperty_RequestInput.prototype, "duration", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PriceCreateManyProperty_RequestInput.prototype, "propertyId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PriceCreateManyProperty_RequestInput.prototype, "advertisementId", void 0);
PriceCreateManyProperty_RequestInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PriceCreateManyProperty_RequestInput", {
        isAbstract: true
    })
], PriceCreateManyProperty_RequestInput);
exports.PriceCreateManyProperty_RequestInput = PriceCreateManyProperty_RequestInput;
