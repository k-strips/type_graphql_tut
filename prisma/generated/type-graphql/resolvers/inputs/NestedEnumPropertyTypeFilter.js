"use strict";
var NestedEnumPropertyTypeFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumPropertyTypeFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PropertyType_1 = require("../../enums/PropertyType");
let NestedEnumPropertyTypeFilter = NestedEnumPropertyTypeFilter_1 = class NestedEnumPropertyTypeFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyType_1.PropertyType, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], NestedEnumPropertyTypeFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PropertyType_1.PropertyType], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedEnumPropertyTypeFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PropertyType_1.PropertyType], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedEnumPropertyTypeFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumPropertyTypeFilter_1, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumPropertyTypeFilter)
], NestedEnumPropertyTypeFilter.prototype, "not", void 0);
NestedEnumPropertyTypeFilter = NestedEnumPropertyTypeFilter_1 = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("NestedEnumPropertyTypeFilter", {
        isAbstract: true
    })
], NestedEnumPropertyTypeFilter);
exports.NestedEnumPropertyTypeFilter = NestedEnumPropertyTypeFilter;
