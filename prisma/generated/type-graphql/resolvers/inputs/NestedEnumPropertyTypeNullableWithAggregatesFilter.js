"use strict";
var NestedEnumPropertyTypeNullableWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumPropertyTypeNullableWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const NestedEnumPropertyTypeNullableFilter_1 = require("../inputs/NestedEnumPropertyTypeNullableFilter");
const NestedIntNullableFilter_1 = require("../inputs/NestedIntNullableFilter");
const PropertyType_1 = require("../../enums/PropertyType");
let NestedEnumPropertyTypeNullableWithAggregatesFilter = NestedEnumPropertyTypeNullableWithAggregatesFilter_1 = class NestedEnumPropertyTypeNullableWithAggregatesFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyType_1.PropertyType, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], NestedEnumPropertyTypeNullableWithAggregatesFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PropertyType_1.PropertyType], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedEnumPropertyTypeNullableWithAggregatesFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PropertyType_1.PropertyType], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedEnumPropertyTypeNullableWithAggregatesFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumPropertyTypeNullableWithAggregatesFilter_1, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumPropertyTypeNullableWithAggregatesFilter)
], NestedEnumPropertyTypeNullableWithAggregatesFilter.prototype, "not", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedIntNullableFilter_1.NestedIntNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedIntNullableFilter_1.NestedIntNullableFilter)
], NestedEnumPropertyTypeNullableWithAggregatesFilter.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumPropertyTypeNullableFilter_1.NestedEnumPropertyTypeNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumPropertyTypeNullableFilter_1.NestedEnumPropertyTypeNullableFilter)
], NestedEnumPropertyTypeNullableWithAggregatesFilter.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumPropertyTypeNullableFilter_1.NestedEnumPropertyTypeNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumPropertyTypeNullableFilter_1.NestedEnumPropertyTypeNullableFilter)
], NestedEnumPropertyTypeNullableWithAggregatesFilter.prototype, "_max", void 0);
NestedEnumPropertyTypeNullableWithAggregatesFilter = NestedEnumPropertyTypeNullableWithAggregatesFilter_1 = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("NestedEnumPropertyTypeNullableWithAggregatesFilter", {
        isAbstract: true
    })
], NestedEnumPropertyTypeNullableWithAggregatesFilter);
exports.NestedEnumPropertyTypeNullableWithAggregatesFilter = NestedEnumPropertyTypeNullableWithAggregatesFilter;
