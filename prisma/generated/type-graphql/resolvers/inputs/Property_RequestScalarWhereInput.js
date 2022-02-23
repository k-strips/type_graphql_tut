"use strict";
var Property_RequestScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Property_RequestScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const EnumAcquisitionTypeFilter_1 = require("../inputs/EnumAcquisitionTypeFilter");
const EnumPropertyStateNullableFilter_1 = require("../inputs/EnumPropertyStateNullableFilter");
const EnumPropertyTypeFilter_1 = require("../inputs/EnumPropertyTypeFilter");
const IntNullableFilter_1 = require("../inputs/IntNullableFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const StringNullableListFilter_1 = require("../inputs/StringNullableListFilter");
let Property_RequestScalarWhereInput = Property_RequestScalarWhereInput_1 = class Property_RequestScalarWhereInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Property_RequestScalarWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], Property_RequestScalarWhereInput.prototype, "AND", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Property_RequestScalarWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], Property_RequestScalarWhereInput.prototype, "OR", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Property_RequestScalarWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], Property_RequestScalarWhereInput.prototype, "NOT", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFilter_1.StringFilter)
], Property_RequestScalarWhereInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumPropertyTypeFilter_1.EnumPropertyTypeFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumPropertyTypeFilter_1.EnumPropertyTypeFilter)
], Property_RequestScalarWhereInput.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumAcquisitionTypeFilter_1.EnumAcquisitionTypeFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumAcquisitionTypeFilter_1.EnumAcquisitionTypeFilter)
], Property_RequestScalarWhereInput.prototype, "acquisition", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumPropertyStateNullableFilter_1.EnumPropertyStateNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumPropertyStateNullableFilter_1.EnumPropertyStateNullableFilter)
], Property_RequestScalarWhereInput.prototype, "state", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringNullableListFilter_1.StringNullableListFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringNullableListFilter_1.StringNullableListFilter)
], Property_RequestScalarWhereInput.prototype, "amenities", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", IntNullableFilter_1.IntNullableFilter)
], Property_RequestScalarWhereInput.prototype, "parkingCapacity", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", IntNullableFilter_1.IntNullableFilter)
], Property_RequestScalarWhereInput.prototype, "seating", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", IntNullableFilter_1.IntNullableFilter)
], Property_RequestScalarWhereInput.prototype, "bedrooms", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", IntNullableFilter_1.IntNullableFilter)
], Property_RequestScalarWhereInput.prototype, "bathrooms", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringNullableFilter_1.StringNullableFilter)
], Property_RequestScalarWhereInput.prototype, "additionalInfo", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringNullableFilter_1.StringNullableFilter)
], Property_RequestScalarWhereInput.prototype, "region", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringNullableFilter_1.StringNullableFilter)
], Property_RequestScalarWhereInput.prototype, "city", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringNullableFilter_1.StringNullableFilter)
], Property_RequestScalarWhereInput.prototype, "town", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DateTimeFilter_1.DateTimeFilter)
], Property_RequestScalarWhereInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DateTimeFilter_1.DateTimeFilter)
], Property_RequestScalarWhereInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringNullableFilter_1.StringNullableFilter)
], Property_RequestScalarWhereInput.prototype, "userId", void 0);
Property_RequestScalarWhereInput = Property_RequestScalarWhereInput_1 = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("Property_RequestScalarWhereInput", {
        isAbstract: true
    })
], Property_RequestScalarWhereInput);
exports.Property_RequestScalarWhereInput = Property_RequestScalarWhereInput;
