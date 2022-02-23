"use strict";
var NestedEnumPropertyCategoryWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumPropertyCategoryWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const NestedEnumPropertyCategoryFilter_1 = require("../inputs/NestedEnumPropertyCategoryFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const PropertyCategory_1 = require("../../enums/PropertyCategory");
let NestedEnumPropertyCategoryWithAggregatesFilter = NestedEnumPropertyCategoryWithAggregatesFilter_1 = class NestedEnumPropertyCategoryWithAggregatesFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyCategory_1.PropertyCategory, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], NestedEnumPropertyCategoryWithAggregatesFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PropertyCategory_1.PropertyCategory], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedEnumPropertyCategoryWithAggregatesFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PropertyCategory_1.PropertyCategory], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedEnumPropertyCategoryWithAggregatesFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumPropertyCategoryWithAggregatesFilter_1, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumPropertyCategoryWithAggregatesFilter)
], NestedEnumPropertyCategoryWithAggregatesFilter.prototype, "not", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedIntFilter_1.NestedIntFilter)
], NestedEnumPropertyCategoryWithAggregatesFilter.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumPropertyCategoryFilter_1.NestedEnumPropertyCategoryFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumPropertyCategoryFilter_1.NestedEnumPropertyCategoryFilter)
], NestedEnumPropertyCategoryWithAggregatesFilter.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumPropertyCategoryFilter_1.NestedEnumPropertyCategoryFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumPropertyCategoryFilter_1.NestedEnumPropertyCategoryFilter)
], NestedEnumPropertyCategoryWithAggregatesFilter.prototype, "_max", void 0);
NestedEnumPropertyCategoryWithAggregatesFilter = NestedEnumPropertyCategoryWithAggregatesFilter_1 = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("NestedEnumPropertyCategoryWithAggregatesFilter", {
        isAbstract: true
    })
], NestedEnumPropertyCategoryWithAggregatesFilter);
exports.NestedEnumPropertyCategoryWithAggregatesFilter = NestedEnumPropertyCategoryWithAggregatesFilter;
