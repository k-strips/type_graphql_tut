"use strict";
var NestedEnumCurrencyWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumCurrencyWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const NestedEnumCurrencyFilter_1 = require("../inputs/NestedEnumCurrencyFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const Currency_1 = require("../../enums/Currency");
let NestedEnumCurrencyWithAggregatesFilter = NestedEnumCurrencyWithAggregatesFilter_1 = class NestedEnumCurrencyWithAggregatesFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Currency_1.Currency, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], NestedEnumCurrencyWithAggregatesFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Currency_1.Currency], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedEnumCurrencyWithAggregatesFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Currency_1.Currency], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedEnumCurrencyWithAggregatesFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumCurrencyWithAggregatesFilter_1, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumCurrencyWithAggregatesFilter)
], NestedEnumCurrencyWithAggregatesFilter.prototype, "not", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedIntFilter_1.NestedIntFilter)
], NestedEnumCurrencyWithAggregatesFilter.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumCurrencyFilter_1.NestedEnumCurrencyFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumCurrencyFilter_1.NestedEnumCurrencyFilter)
], NestedEnumCurrencyWithAggregatesFilter.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumCurrencyFilter_1.NestedEnumCurrencyFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumCurrencyFilter_1.NestedEnumCurrencyFilter)
], NestedEnumCurrencyWithAggregatesFilter.prototype, "_max", void 0);
NestedEnumCurrencyWithAggregatesFilter = NestedEnumCurrencyWithAggregatesFilter_1 = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("NestedEnumCurrencyWithAggregatesFilter", {
        isAbstract: true
    })
], NestedEnumCurrencyWithAggregatesFilter);
exports.NestedEnumCurrencyWithAggregatesFilter = NestedEnumCurrencyWithAggregatesFilter;
