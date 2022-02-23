"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumPropertyCategoryFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const NestedEnumPropertyCategoryFilter_1 = require("../inputs/NestedEnumPropertyCategoryFilter");
const PropertyCategory_1 = require("../../enums/PropertyCategory");
let EnumPropertyCategoryFilter = class EnumPropertyCategoryFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyCategory_1.PropertyCategory, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EnumPropertyCategoryFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PropertyCategory_1.PropertyCategory], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], EnumPropertyCategoryFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PropertyCategory_1.PropertyCategory], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], EnumPropertyCategoryFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumPropertyCategoryFilter_1.NestedEnumPropertyCategoryFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumPropertyCategoryFilter_1.NestedEnumPropertyCategoryFilter)
], EnumPropertyCategoryFilter.prototype, "not", void 0);
EnumPropertyCategoryFilter = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("EnumPropertyCategoryFilter", {
        isAbstract: true
    })
], EnumPropertyCategoryFilter);
exports.EnumPropertyCategoryFilter = EnumPropertyCategoryFilter;
