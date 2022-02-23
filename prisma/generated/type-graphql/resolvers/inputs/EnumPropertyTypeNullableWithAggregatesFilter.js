"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumPropertyTypeNullableWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const NestedEnumPropertyTypeNullableFilter_1 = require("../inputs/NestedEnumPropertyTypeNullableFilter");
const NestedEnumPropertyTypeNullableWithAggregatesFilter_1 = require("../inputs/NestedEnumPropertyTypeNullableWithAggregatesFilter");
const NestedIntNullableFilter_1 = require("../inputs/NestedIntNullableFilter");
const PropertyType_1 = require("../../enums/PropertyType");
let EnumPropertyTypeNullableWithAggregatesFilter = class EnumPropertyTypeNullableWithAggregatesFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyType_1.PropertyType, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EnumPropertyTypeNullableWithAggregatesFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PropertyType_1.PropertyType], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], EnumPropertyTypeNullableWithAggregatesFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PropertyType_1.PropertyType], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], EnumPropertyTypeNullableWithAggregatesFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumPropertyTypeNullableWithAggregatesFilter_1.NestedEnumPropertyTypeNullableWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumPropertyTypeNullableWithAggregatesFilter_1.NestedEnumPropertyTypeNullableWithAggregatesFilter)
], EnumPropertyTypeNullableWithAggregatesFilter.prototype, "not", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedIntNullableFilter_1.NestedIntNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedIntNullableFilter_1.NestedIntNullableFilter)
], EnumPropertyTypeNullableWithAggregatesFilter.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumPropertyTypeNullableFilter_1.NestedEnumPropertyTypeNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumPropertyTypeNullableFilter_1.NestedEnumPropertyTypeNullableFilter)
], EnumPropertyTypeNullableWithAggregatesFilter.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumPropertyTypeNullableFilter_1.NestedEnumPropertyTypeNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumPropertyTypeNullableFilter_1.NestedEnumPropertyTypeNullableFilter)
], EnumPropertyTypeNullableWithAggregatesFilter.prototype, "_max", void 0);
EnumPropertyTypeNullableWithAggregatesFilter = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("EnumPropertyTypeNullableWithAggregatesFilter", {
        isAbstract: true
    })
], EnumPropertyTypeNullableWithAggregatesFilter);
exports.EnumPropertyTypeNullableWithAggregatesFilter = EnumPropertyTypeNullableWithAggregatesFilter;
