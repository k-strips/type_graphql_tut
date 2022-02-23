"use strict";
var NestedEnumPropertyTypeNullableFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumPropertyTypeNullableFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PropertyType_1 = require("../../enums/PropertyType");
let NestedEnumPropertyTypeNullableFilter = NestedEnumPropertyTypeNullableFilter_1 = class NestedEnumPropertyTypeNullableFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyType_1.PropertyType, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], NestedEnumPropertyTypeNullableFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PropertyType_1.PropertyType], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedEnumPropertyTypeNullableFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PropertyType_1.PropertyType], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedEnumPropertyTypeNullableFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumPropertyTypeNullableFilter_1, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumPropertyTypeNullableFilter)
], NestedEnumPropertyTypeNullableFilter.prototype, "not", void 0);
NestedEnumPropertyTypeNullableFilter = NestedEnumPropertyTypeNullableFilter_1 = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("NestedEnumPropertyTypeNullableFilter", {
        isAbstract: true
    })
], NestedEnumPropertyTypeNullableFilter);
exports.NestedEnumPropertyTypeNullableFilter = NestedEnumPropertyTypeNullableFilter;
