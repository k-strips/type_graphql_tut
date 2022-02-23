"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumCurrencyFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const NestedEnumCurrencyFilter_1 = require("../inputs/NestedEnumCurrencyFilter");
const Currency_1 = require("../../enums/Currency");
let EnumCurrencyFilter = class EnumCurrencyFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Currency_1.Currency, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EnumCurrencyFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Currency_1.Currency], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], EnumCurrencyFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Currency_1.Currency], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], EnumCurrencyFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumCurrencyFilter_1.NestedEnumCurrencyFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumCurrencyFilter_1.NestedEnumCurrencyFilter)
], EnumCurrencyFilter.prototype, "not", void 0);
EnumCurrencyFilter = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("EnumCurrencyFilter", {
        isAbstract: true
    })
], EnumCurrencyFilter);
exports.EnumCurrencyFilter = EnumCurrencyFilter;
