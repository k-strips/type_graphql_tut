"use strict";
var NestedEnumDurationNullableWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumDurationNullableWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const NestedEnumDurationNullableFilter_1 = require("../inputs/NestedEnumDurationNullableFilter");
const NestedIntNullableFilter_1 = require("../inputs/NestedIntNullableFilter");
const Duration_1 = require("../../enums/Duration");
let NestedEnumDurationNullableWithAggregatesFilter = NestedEnumDurationNullableWithAggregatesFilter_1 = class NestedEnumDurationNullableWithAggregatesFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Duration_1.Duration, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], NestedEnumDurationNullableWithAggregatesFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Duration_1.Duration], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedEnumDurationNullableWithAggregatesFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Duration_1.Duration], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedEnumDurationNullableWithAggregatesFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumDurationNullableWithAggregatesFilter_1, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumDurationNullableWithAggregatesFilter)
], NestedEnumDurationNullableWithAggregatesFilter.prototype, "not", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedIntNullableFilter_1.NestedIntNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedIntNullableFilter_1.NestedIntNullableFilter)
], NestedEnumDurationNullableWithAggregatesFilter.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumDurationNullableFilter_1.NestedEnumDurationNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumDurationNullableFilter_1.NestedEnumDurationNullableFilter)
], NestedEnumDurationNullableWithAggregatesFilter.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumDurationNullableFilter_1.NestedEnumDurationNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumDurationNullableFilter_1.NestedEnumDurationNullableFilter)
], NestedEnumDurationNullableWithAggregatesFilter.prototype, "_max", void 0);
NestedEnumDurationNullableWithAggregatesFilter = NestedEnumDurationNullableWithAggregatesFilter_1 = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("NestedEnumDurationNullableWithAggregatesFilter", {
        isAbstract: true
    })
], NestedEnumDurationNullableWithAggregatesFilter);
exports.NestedEnumDurationNullableWithAggregatesFilter = NestedEnumDurationNullableWithAggregatesFilter;
