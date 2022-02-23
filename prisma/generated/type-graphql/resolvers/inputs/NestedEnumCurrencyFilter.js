"use strict";
var NestedEnumCurrencyFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumCurrencyFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Currency_1 = require("../../enums/Currency");
let NestedEnumCurrencyFilter = NestedEnumCurrencyFilter_1 = class NestedEnumCurrencyFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Currency_1.Currency, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], NestedEnumCurrencyFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Currency_1.Currency], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedEnumCurrencyFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Currency_1.Currency], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedEnumCurrencyFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumCurrencyFilter_1, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumCurrencyFilter)
], NestedEnumCurrencyFilter.prototype, "not", void 0);
NestedEnumCurrencyFilter = NestedEnumCurrencyFilter_1 = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("NestedEnumCurrencyFilter", {
        isAbstract: true
    })
], NestedEnumCurrencyFilter);
exports.NestedEnumCurrencyFilter = NestedEnumCurrencyFilter;
