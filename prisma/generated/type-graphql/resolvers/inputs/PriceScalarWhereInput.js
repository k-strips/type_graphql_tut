"use strict";
var PriceScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const EnumCurrencyFilter_1 = require("../inputs/EnumCurrencyFilter");
const EnumDurationNullableFilter_1 = require("../inputs/EnumDurationNullableFilter");
const FloatFilter_1 = require("../inputs/FloatFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let PriceScalarWhereInput = PriceScalarWhereInput_1 = class PriceScalarWhereInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PriceScalarWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PriceScalarWhereInput.prototype, "AND", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PriceScalarWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PriceScalarWhereInput.prototype, "OR", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PriceScalarWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PriceScalarWhereInput.prototype, "NOT", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFilter_1.StringFilter)
], PriceScalarWhereInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => FloatFilter_1.FloatFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", FloatFilter_1.FloatFilter)
], PriceScalarWhereInput.prototype, "figure", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumCurrencyFilter_1.EnumCurrencyFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumCurrencyFilter_1.EnumCurrencyFilter)
], PriceScalarWhereInput.prototype, "currency", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumDurationNullableFilter_1.EnumDurationNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumDurationNullableFilter_1.EnumDurationNullableFilter)
], PriceScalarWhereInput.prototype, "duration", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringNullableFilter_1.StringNullableFilter)
], PriceScalarWhereInput.prototype, "propertyId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringNullableFilter_1.StringNullableFilter)
], PriceScalarWhereInput.prototype, "advertisementId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringNullableFilter_1.StringNullableFilter)
], PriceScalarWhereInput.prototype, "property_RequestId", void 0);
PriceScalarWhereInput = PriceScalarWhereInput_1 = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PriceScalarWhereInput", {
        isAbstract: true
    })
], PriceScalarWhereInput);
exports.PriceScalarWhereInput = PriceScalarWhereInput;
