"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumPropertyCategoryWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const NestedEnumPropertyCategoryFilter_1 = require("../inputs/NestedEnumPropertyCategoryFilter");
const NestedEnumPropertyCategoryWithAggregatesFilter_1 = require("../inputs/NestedEnumPropertyCategoryWithAggregatesFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const PropertyCategory_1 = require("../../enums/PropertyCategory");
let EnumPropertyCategoryWithAggregatesFilter = class EnumPropertyCategoryWithAggregatesFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyCategory_1.PropertyCategory, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EnumPropertyCategoryWithAggregatesFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PropertyCategory_1.PropertyCategory], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], EnumPropertyCategoryWithAggregatesFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PropertyCategory_1.PropertyCategory], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], EnumPropertyCategoryWithAggregatesFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumPropertyCategoryWithAggregatesFilter_1.NestedEnumPropertyCategoryWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumPropertyCategoryWithAggregatesFilter_1.NestedEnumPropertyCategoryWithAggregatesFilter)
], EnumPropertyCategoryWithAggregatesFilter.prototype, "not", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedIntFilter_1.NestedIntFilter)
], EnumPropertyCategoryWithAggregatesFilter.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumPropertyCategoryFilter_1.NestedEnumPropertyCategoryFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumPropertyCategoryFilter_1.NestedEnumPropertyCategoryFilter)
], EnumPropertyCategoryWithAggregatesFilter.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumPropertyCategoryFilter_1.NestedEnumPropertyCategoryFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumPropertyCategoryFilter_1.NestedEnumPropertyCategoryFilter)
], EnumPropertyCategoryWithAggregatesFilter.prototype, "_max", void 0);
EnumPropertyCategoryWithAggregatesFilter = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("EnumPropertyCategoryWithAggregatesFilter", {
        isAbstract: true
    })
], EnumPropertyCategoryWithAggregatesFilter);
exports.EnumPropertyCategoryWithAggregatesFilter = EnumPropertyCategoryWithAggregatesFilter;
