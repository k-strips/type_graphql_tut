"use strict";
var SearchScalarWhereWithAggregatesInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchScalarWhereWithAggregatesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const DateTimeWithAggregatesFilter_1 = require("../inputs/DateTimeWithAggregatesFilter");
const EnumAcquisitionTypeNullableWithAggregatesFilter_1 = require("../inputs/EnumAcquisitionTypeNullableWithAggregatesFilter");
const EnumPropertyCategoryWithAggregatesFilter_1 = require("../inputs/EnumPropertyCategoryWithAggregatesFilter");
const EnumPropertyStateNullableWithAggregatesFilter_1 = require("../inputs/EnumPropertyStateNullableWithAggregatesFilter");
const EnumPropertyTypeNullableWithAggregatesFilter_1 = require("../inputs/EnumPropertyTypeNullableWithAggregatesFilter");
const IntNullableWithAggregatesFilter_1 = require("../inputs/IntNullableWithAggregatesFilter");
const StringNullableWithAggregatesFilter_1 = require("../inputs/StringNullableWithAggregatesFilter");
const StringWithAggregatesFilter_1 = require("../inputs/StringWithAggregatesFilter");
let SearchScalarWhereWithAggregatesInput = SearchScalarWhereWithAggregatesInput_1 = class SearchScalarWhereWithAggregatesInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [SearchScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], SearchScalarWhereWithAggregatesInput.prototype, "AND", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [SearchScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], SearchScalarWhereWithAggregatesInput.prototype, "OR", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [SearchScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], SearchScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], SearchScalarWhereWithAggregatesInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], SearchScalarWhereWithAggregatesInput.prototype, "userId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumPropertyCategoryWithAggregatesFilter_1.EnumPropertyCategoryWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumPropertyCategoryWithAggregatesFilter_1.EnumPropertyCategoryWithAggregatesFilter)
], SearchScalarWhereWithAggregatesInput.prototype, "category", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumPropertyTypeNullableWithAggregatesFilter_1.EnumPropertyTypeNullableWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumPropertyTypeNullableWithAggregatesFilter_1.EnumPropertyTypeNullableWithAggregatesFilter)
], SearchScalarWhereWithAggregatesInput.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumAcquisitionTypeNullableWithAggregatesFilter_1.EnumAcquisitionTypeNullableWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumAcquisitionTypeNullableWithAggregatesFilter_1.EnumAcquisitionTypeNullableWithAggregatesFilter)
], SearchScalarWhereWithAggregatesInput.prototype, "acquisition", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter_1.IntNullableWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", IntNullableWithAggregatesFilter_1.IntNullableWithAggregatesFilter)
], SearchScalarWhereWithAggregatesInput.prototype, "seating", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumPropertyStateNullableWithAggregatesFilter_1.EnumPropertyStateNullableWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumPropertyStateNullableWithAggregatesFilter_1.EnumPropertyStateNullableWithAggregatesFilter)
], SearchScalarWhereWithAggregatesInput.prototype, "state", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter_1.IntNullableWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", IntNullableWithAggregatesFilter_1.IntNullableWithAggregatesFilter)
], SearchScalarWhereWithAggregatesInput.prototype, "bedrooms", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter_1.IntNullableWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", IntNullableWithAggregatesFilter_1.IntNullableWithAggregatesFilter)
], SearchScalarWhereWithAggregatesInput.prototype, "bathrooms", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter_1.IntNullableWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", IntNullableWithAggregatesFilter_1.IntNullableWithAggregatesFilter)
], SearchScalarWhereWithAggregatesInput.prototype, "parkingCapacity", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter)
], SearchScalarWhereWithAggregatesInput.prototype, "location", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter)
], SearchScalarWhereWithAggregatesInput.prototype, "createdAt", void 0);
SearchScalarWhereWithAggregatesInput = SearchScalarWhereWithAggregatesInput_1 = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("SearchScalarWhereWithAggregatesInput", {
        isAbstract: true
    })
], SearchScalarWhereWithAggregatesInput);
exports.SearchScalarWhereWithAggregatesInput = SearchScalarWhereWithAggregatesInput;
