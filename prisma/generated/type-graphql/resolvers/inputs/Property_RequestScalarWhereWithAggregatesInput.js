"use strict";
var Property_RequestScalarWhereWithAggregatesInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Property_RequestScalarWhereWithAggregatesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const DateTimeWithAggregatesFilter_1 = require("../inputs/DateTimeWithAggregatesFilter");
const EnumAcquisitionTypeWithAggregatesFilter_1 = require("../inputs/EnumAcquisitionTypeWithAggregatesFilter");
const EnumPropertyStateNullableWithAggregatesFilter_1 = require("../inputs/EnumPropertyStateNullableWithAggregatesFilter");
const EnumPropertyTypeWithAggregatesFilter_1 = require("../inputs/EnumPropertyTypeWithAggregatesFilter");
const IntNullableWithAggregatesFilter_1 = require("../inputs/IntNullableWithAggregatesFilter");
const StringNullableListFilter_1 = require("../inputs/StringNullableListFilter");
const StringNullableWithAggregatesFilter_1 = require("../inputs/StringNullableWithAggregatesFilter");
const StringWithAggregatesFilter_1 = require("../inputs/StringWithAggregatesFilter");
let Property_RequestScalarWhereWithAggregatesInput = Property_RequestScalarWhereWithAggregatesInput_1 = class Property_RequestScalarWhereWithAggregatesInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Property_RequestScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], Property_RequestScalarWhereWithAggregatesInput.prototype, "AND", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Property_RequestScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], Property_RequestScalarWhereWithAggregatesInput.prototype, "OR", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Property_RequestScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], Property_RequestScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], Property_RequestScalarWhereWithAggregatesInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumPropertyTypeWithAggregatesFilter_1.EnumPropertyTypeWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumPropertyTypeWithAggregatesFilter_1.EnumPropertyTypeWithAggregatesFilter)
], Property_RequestScalarWhereWithAggregatesInput.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumAcquisitionTypeWithAggregatesFilter_1.EnumAcquisitionTypeWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumAcquisitionTypeWithAggregatesFilter_1.EnumAcquisitionTypeWithAggregatesFilter)
], Property_RequestScalarWhereWithAggregatesInput.prototype, "acquisition", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumPropertyStateNullableWithAggregatesFilter_1.EnumPropertyStateNullableWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumPropertyStateNullableWithAggregatesFilter_1.EnumPropertyStateNullableWithAggregatesFilter)
], Property_RequestScalarWhereWithAggregatesInput.prototype, "state", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringNullableListFilter_1.StringNullableListFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringNullableListFilter_1.StringNullableListFilter)
], Property_RequestScalarWhereWithAggregatesInput.prototype, "amenities", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter_1.IntNullableWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", IntNullableWithAggregatesFilter_1.IntNullableWithAggregatesFilter)
], Property_RequestScalarWhereWithAggregatesInput.prototype, "parkingCapacity", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter_1.IntNullableWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", IntNullableWithAggregatesFilter_1.IntNullableWithAggregatesFilter)
], Property_RequestScalarWhereWithAggregatesInput.prototype, "seating", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter_1.IntNullableWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", IntNullableWithAggregatesFilter_1.IntNullableWithAggregatesFilter)
], Property_RequestScalarWhereWithAggregatesInput.prototype, "bedrooms", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter_1.IntNullableWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", IntNullableWithAggregatesFilter_1.IntNullableWithAggregatesFilter)
], Property_RequestScalarWhereWithAggregatesInput.prototype, "bathrooms", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter)
], Property_RequestScalarWhereWithAggregatesInput.prototype, "additionalInfo", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter)
], Property_RequestScalarWhereWithAggregatesInput.prototype, "region", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter)
], Property_RequestScalarWhereWithAggregatesInput.prototype, "city", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter)
], Property_RequestScalarWhereWithAggregatesInput.prototype, "town", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter)
], Property_RequestScalarWhereWithAggregatesInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter)
], Property_RequestScalarWhereWithAggregatesInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter)
], Property_RequestScalarWhereWithAggregatesInput.prototype, "userId", void 0);
Property_RequestScalarWhereWithAggregatesInput = Property_RequestScalarWhereWithAggregatesInput_1 = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("Property_RequestScalarWhereWithAggregatesInput", {
        isAbstract: true
    })
], Property_RequestScalarWhereWithAggregatesInput);
exports.Property_RequestScalarWhereWithAggregatesInput = Property_RequestScalarWhereWithAggregatesInput;
