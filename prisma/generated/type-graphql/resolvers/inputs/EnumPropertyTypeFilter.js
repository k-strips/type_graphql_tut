"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumPropertyTypeFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const NestedEnumPropertyTypeFilter_1 = require("../inputs/NestedEnumPropertyTypeFilter");
const PropertyType_1 = require("../../enums/PropertyType");
let EnumPropertyTypeFilter = class EnumPropertyTypeFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyType_1.PropertyType, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EnumPropertyTypeFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PropertyType_1.PropertyType], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], EnumPropertyTypeFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PropertyType_1.PropertyType], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], EnumPropertyTypeFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumPropertyTypeFilter_1.NestedEnumPropertyTypeFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumPropertyTypeFilter_1.NestedEnumPropertyTypeFilter)
], EnumPropertyTypeFilter.prototype, "not", void 0);
EnumPropertyTypeFilter = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("EnumPropertyTypeFilter", {
        isAbstract: true
    })
], EnumPropertyTypeFilter);
exports.EnumPropertyTypeFilter = EnumPropertyTypeFilter;
