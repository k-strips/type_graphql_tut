"use strict";
var Property_RequestWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Property_RequestWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const EnumAcquisitionTypeFilter_1 = require("../inputs/EnumAcquisitionTypeFilter");
const EnumPropertyStateNullableFilter_1 = require("../inputs/EnumPropertyStateNullableFilter");
const EnumPropertyTypeFilter_1 = require("../inputs/EnumPropertyTypeFilter");
const IntNullableFilter_1 = require("../inputs/IntNullableFilter");
const LandSizeRelationFilter_1 = require("../inputs/LandSizeRelationFilter");
const PriceListRelationFilter_1 = require("../inputs/PriceListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const StringNullableListFilter_1 = require("../inputs/StringNullableListFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let Property_RequestWhereInput = Property_RequestWhereInput_1 = class Property_RequestWhereInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Property_RequestWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], Property_RequestWhereInput.prototype, "AND", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Property_RequestWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], Property_RequestWhereInput.prototype, "OR", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Property_RequestWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], Property_RequestWhereInput.prototype, "NOT", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFilter_1.StringFilter)
], Property_RequestWhereInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumPropertyTypeFilter_1.EnumPropertyTypeFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumPropertyTypeFilter_1.EnumPropertyTypeFilter)
], Property_RequestWhereInput.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumAcquisitionTypeFilter_1.EnumAcquisitionTypeFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumAcquisitionTypeFilter_1.EnumAcquisitionTypeFilter)
], Property_RequestWhereInput.prototype, "acquisition", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumPropertyStateNullableFilter_1.EnumPropertyStateNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumPropertyStateNullableFilter_1.EnumPropertyStateNullableFilter)
], Property_RequestWhereInput.prototype, "state", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PriceListRelationFilter_1.PriceListRelationFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PriceListRelationFilter_1.PriceListRelationFilter)
], Property_RequestWhereInput.prototype, "priceRange", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringNullableListFilter_1.StringNullableListFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringNullableListFilter_1.StringNullableListFilter)
], Property_RequestWhereInput.prototype, "amenities", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LandSizeRelationFilter_1.LandSizeRelationFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LandSizeRelationFilter_1.LandSizeRelationFilter)
], Property_RequestWhereInput.prototype, "size", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", IntNullableFilter_1.IntNullableFilter)
], Property_RequestWhereInput.prototype, "parkingCapacity", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", IntNullableFilter_1.IntNullableFilter)
], Property_RequestWhereInput.prototype, "seating", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", IntNullableFilter_1.IntNullableFilter)
], Property_RequestWhereInput.prototype, "bedrooms", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", IntNullableFilter_1.IntNullableFilter)
], Property_RequestWhereInput.prototype, "bathrooms", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringNullableFilter_1.StringNullableFilter)
], Property_RequestWhereInput.prototype, "additionalInfo", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringNullableFilter_1.StringNullableFilter)
], Property_RequestWhereInput.prototype, "region", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringNullableFilter_1.StringNullableFilter)
], Property_RequestWhereInput.prototype, "city", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringNullableFilter_1.StringNullableFilter)
], Property_RequestWhereInput.prototype, "town", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DateTimeFilter_1.DateTimeFilter)
], Property_RequestWhereInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DateTimeFilter_1.DateTimeFilter)
], Property_RequestWhereInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserRelationFilter_1.UserRelationFilter)
], Property_RequestWhereInput.prototype, "user", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringNullableFilter_1.StringNullableFilter)
], Property_RequestWhereInput.prototype, "userId", void 0);
Property_RequestWhereInput = Property_RequestWhereInput_1 = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("Property_RequestWhereInput", {
        isAbstract: true
    })
], Property_RequestWhereInput);
exports.Property_RequestWhereInput = Property_RequestWhereInput;
