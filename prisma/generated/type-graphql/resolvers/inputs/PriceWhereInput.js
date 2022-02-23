"use strict";
var PriceWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AdvertisementRelationFilter_1 = require("../inputs/AdvertisementRelationFilter");
const EnumCurrencyFilter_1 = require("../inputs/EnumCurrencyFilter");
const EnumDurationNullableFilter_1 = require("../inputs/EnumDurationNullableFilter");
const FloatFilter_1 = require("../inputs/FloatFilter");
const PropertyRelationFilter_1 = require("../inputs/PropertyRelationFilter");
const Property_RequestRelationFilter_1 = require("../inputs/Property_RequestRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let PriceWhereInput = PriceWhereInput_1 = class PriceWhereInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PriceWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PriceWhereInput.prototype, "AND", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PriceWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PriceWhereInput.prototype, "OR", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PriceWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PriceWhereInput.prototype, "NOT", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFilter_1.StringFilter)
], PriceWhereInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => FloatFilter_1.FloatFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", FloatFilter_1.FloatFilter)
], PriceWhereInput.prototype, "figure", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumCurrencyFilter_1.EnumCurrencyFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumCurrencyFilter_1.EnumCurrencyFilter)
], PriceWhereInput.prototype, "currency", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumDurationNullableFilter_1.EnumDurationNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumDurationNullableFilter_1.EnumDurationNullableFilter)
], PriceWhereInput.prototype, "duration", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyRelationFilter_1.PropertyRelationFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyRelationFilter_1.PropertyRelationFilter)
], PriceWhereInput.prototype, "Property", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringNullableFilter_1.StringNullableFilter)
], PriceWhereInput.prototype, "propertyId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementRelationFilter_1.AdvertisementRelationFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementRelationFilter_1.AdvertisementRelationFilter)
], PriceWhereInput.prototype, "advertisement", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringNullableFilter_1.StringNullableFilter)
], PriceWhereInput.prototype, "advertisementId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestRelationFilter_1.Property_RequestRelationFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestRelationFilter_1.Property_RequestRelationFilter)
], PriceWhereInput.prototype, "Property_Request", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringNullableFilter_1.StringNullableFilter)
], PriceWhereInput.prototype, "property_RequestId", void 0);
PriceWhereInput = PriceWhereInput_1 = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PriceWhereInput", {
        isAbstract: true
    })
], PriceWhereInput);
exports.PriceWhereInput = PriceWhereInput;
