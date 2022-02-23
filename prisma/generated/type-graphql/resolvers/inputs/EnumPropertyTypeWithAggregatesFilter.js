"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumPropertyTypeWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const NestedEnumPropertyTypeFilter_1 = require("../inputs/NestedEnumPropertyTypeFilter");
const NestedEnumPropertyTypeWithAggregatesFilter_1 = require("../inputs/NestedEnumPropertyTypeWithAggregatesFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const PropertyType_1 = require("../../enums/PropertyType");
let EnumPropertyTypeWithAggregatesFilter = class EnumPropertyTypeWithAggregatesFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyType_1.PropertyType, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EnumPropertyTypeWithAggregatesFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PropertyType_1.PropertyType], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], EnumPropertyTypeWithAggregatesFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PropertyType_1.PropertyType], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], EnumPropertyTypeWithAggregatesFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumPropertyTypeWithAggregatesFilter_1.NestedEnumPropertyTypeWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumPropertyTypeWithAggregatesFilter_1.NestedEnumPropertyTypeWithAggregatesFilter)
], EnumPropertyTypeWithAggregatesFilter.prototype, "not", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedIntFilter_1.NestedIntFilter)
], EnumPropertyTypeWithAggregatesFilter.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumPropertyTypeFilter_1.NestedEnumPropertyTypeFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumPropertyTypeFilter_1.NestedEnumPropertyTypeFilter)
], EnumPropertyTypeWithAggregatesFilter.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumPropertyTypeFilter_1.NestedEnumPropertyTypeFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumPropertyTypeFilter_1.NestedEnumPropertyTypeFilter)
], EnumPropertyTypeWithAggregatesFilter.prototype, "_max", void 0);
EnumPropertyTypeWithAggregatesFilter = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("EnumPropertyTypeWithAggregatesFilter", {
        isAbstract: true
    })
], EnumPropertyTypeWithAggregatesFilter);
exports.EnumPropertyTypeWithAggregatesFilter = EnumPropertyTypeWithAggregatesFilter;
