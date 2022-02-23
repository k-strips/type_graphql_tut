"use strict";
var NestedEnumPropertyCategoryFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumPropertyCategoryFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PropertyCategory_1 = require("../../enums/PropertyCategory");
let NestedEnumPropertyCategoryFilter = NestedEnumPropertyCategoryFilter_1 = class NestedEnumPropertyCategoryFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyCategory_1.PropertyCategory, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], NestedEnumPropertyCategoryFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PropertyCategory_1.PropertyCategory], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedEnumPropertyCategoryFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PropertyCategory_1.PropertyCategory], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedEnumPropertyCategoryFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumPropertyCategoryFilter_1, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumPropertyCategoryFilter)
], NestedEnumPropertyCategoryFilter.prototype, "not", void 0);
NestedEnumPropertyCategoryFilter = NestedEnumPropertyCategoryFilter_1 = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("NestedEnumPropertyCategoryFilter", {
        isAbstract: true
    })
], NestedEnumPropertyCategoryFilter);
exports.NestedEnumPropertyCategoryFilter = NestedEnumPropertyCategoryFilter;
