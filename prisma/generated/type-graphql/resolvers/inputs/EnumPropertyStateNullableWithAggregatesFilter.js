"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumPropertyStateNullableWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const NestedEnumPropertyStateNullableFilter_1 = require("../inputs/NestedEnumPropertyStateNullableFilter");
const NestedEnumPropertyStateNullableWithAggregatesFilter_1 = require("../inputs/NestedEnumPropertyStateNullableWithAggregatesFilter");
const NestedIntNullableFilter_1 = require("../inputs/NestedIntNullableFilter");
const PropertyState_1 = require("../../enums/PropertyState");
let EnumPropertyStateNullableWithAggregatesFilter = class EnumPropertyStateNullableWithAggregatesFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyState_1.PropertyState, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EnumPropertyStateNullableWithAggregatesFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PropertyState_1.PropertyState], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], EnumPropertyStateNullableWithAggregatesFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PropertyState_1.PropertyState], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], EnumPropertyStateNullableWithAggregatesFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumPropertyStateNullableWithAggregatesFilter_1.NestedEnumPropertyStateNullableWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumPropertyStateNullableWithAggregatesFilter_1.NestedEnumPropertyStateNullableWithAggregatesFilter)
], EnumPropertyStateNullableWithAggregatesFilter.prototype, "not", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedIntNullableFilter_1.NestedIntNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedIntNullableFilter_1.NestedIntNullableFilter)
], EnumPropertyStateNullableWithAggregatesFilter.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumPropertyStateNullableFilter_1.NestedEnumPropertyStateNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumPropertyStateNullableFilter_1.NestedEnumPropertyStateNullableFilter)
], EnumPropertyStateNullableWithAggregatesFilter.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumPropertyStateNullableFilter_1.NestedEnumPropertyStateNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumPropertyStateNullableFilter_1.NestedEnumPropertyStateNullableFilter)
], EnumPropertyStateNullableWithAggregatesFilter.prototype, "_max", void 0);
EnumPropertyStateNullableWithAggregatesFilter = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("EnumPropertyStateNullableWithAggregatesFilter", {
        isAbstract: true
    })
], EnumPropertyStateNullableWithAggregatesFilter);
exports.EnumPropertyStateNullableWithAggregatesFilter = EnumPropertyStateNullableWithAggregatesFilter;
