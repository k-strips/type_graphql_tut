"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumDurationNullableWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const NestedEnumDurationNullableFilter_1 = require("../inputs/NestedEnumDurationNullableFilter");
const NestedEnumDurationNullableWithAggregatesFilter_1 = require("../inputs/NestedEnumDurationNullableWithAggregatesFilter");
const NestedIntNullableFilter_1 = require("../inputs/NestedIntNullableFilter");
const Duration_1 = require("../../enums/Duration");
let EnumDurationNullableWithAggregatesFilter = class EnumDurationNullableWithAggregatesFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Duration_1.Duration, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EnumDurationNullableWithAggregatesFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Duration_1.Duration], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], EnumDurationNullableWithAggregatesFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Duration_1.Duration], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], EnumDurationNullableWithAggregatesFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumDurationNullableWithAggregatesFilter_1.NestedEnumDurationNullableWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumDurationNullableWithAggregatesFilter_1.NestedEnumDurationNullableWithAggregatesFilter)
], EnumDurationNullableWithAggregatesFilter.prototype, "not", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedIntNullableFilter_1.NestedIntNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedIntNullableFilter_1.NestedIntNullableFilter)
], EnumDurationNullableWithAggregatesFilter.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumDurationNullableFilter_1.NestedEnumDurationNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumDurationNullableFilter_1.NestedEnumDurationNullableFilter)
], EnumDurationNullableWithAggregatesFilter.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumDurationNullableFilter_1.NestedEnumDurationNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumDurationNullableFilter_1.NestedEnumDurationNullableFilter)
], EnumDurationNullableWithAggregatesFilter.prototype, "_max", void 0);
EnumDurationNullableWithAggregatesFilter = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("EnumDurationNullableWithAggregatesFilter", {
        isAbstract: true
    })
], EnumDurationNullableWithAggregatesFilter);
exports.EnumDurationNullableWithAggregatesFilter = EnumDurationNullableWithAggregatesFilter;
