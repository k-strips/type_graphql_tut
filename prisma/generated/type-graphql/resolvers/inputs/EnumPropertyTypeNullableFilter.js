"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumPropertyTypeNullableFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const NestedEnumPropertyTypeNullableFilter_1 = require("../inputs/NestedEnumPropertyTypeNullableFilter");
const PropertyType_1 = require("../../enums/PropertyType");
let EnumPropertyTypeNullableFilter = class EnumPropertyTypeNullableFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyType_1.PropertyType, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EnumPropertyTypeNullableFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PropertyType_1.PropertyType], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], EnumPropertyTypeNullableFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PropertyType_1.PropertyType], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], EnumPropertyTypeNullableFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumPropertyTypeNullableFilter_1.NestedEnumPropertyTypeNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumPropertyTypeNullableFilter_1.NestedEnumPropertyTypeNullableFilter)
], EnumPropertyTypeNullableFilter.prototype, "not", void 0);
EnumPropertyTypeNullableFilter = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("EnumPropertyTypeNullableFilter", {
        isAbstract: true
    })
], EnumPropertyTypeNullableFilter);
exports.EnumPropertyTypeNullableFilter = EnumPropertyTypeNullableFilter;
