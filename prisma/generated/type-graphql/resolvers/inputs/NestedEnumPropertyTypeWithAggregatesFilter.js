"use strict";
var NestedEnumPropertyTypeWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumPropertyTypeWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const NestedEnumPropertyTypeFilter_1 = require("../inputs/NestedEnumPropertyTypeFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const PropertyType_1 = require("../../enums/PropertyType");
let NestedEnumPropertyTypeWithAggregatesFilter = NestedEnumPropertyTypeWithAggregatesFilter_1 = class NestedEnumPropertyTypeWithAggregatesFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyType_1.PropertyType, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], NestedEnumPropertyTypeWithAggregatesFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PropertyType_1.PropertyType], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedEnumPropertyTypeWithAggregatesFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PropertyType_1.PropertyType], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedEnumPropertyTypeWithAggregatesFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumPropertyTypeWithAggregatesFilter_1, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumPropertyTypeWithAggregatesFilter)
], NestedEnumPropertyTypeWithAggregatesFilter.prototype, "not", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedIntFilter_1.NestedIntFilter)
], NestedEnumPropertyTypeWithAggregatesFilter.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumPropertyTypeFilter_1.NestedEnumPropertyTypeFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumPropertyTypeFilter_1.NestedEnumPropertyTypeFilter)
], NestedEnumPropertyTypeWithAggregatesFilter.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumPropertyTypeFilter_1.NestedEnumPropertyTypeFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumPropertyTypeFilter_1.NestedEnumPropertyTypeFilter)
], NestedEnumPropertyTypeWithAggregatesFilter.prototype, "_max", void 0);
NestedEnumPropertyTypeWithAggregatesFilter = NestedEnumPropertyTypeWithAggregatesFilter_1 = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("NestedEnumPropertyTypeWithAggregatesFilter", {
        isAbstract: true
    })
], NestedEnumPropertyTypeWithAggregatesFilter);
exports.NestedEnumPropertyTypeWithAggregatesFilter = NestedEnumPropertyTypeWithAggregatesFilter;
