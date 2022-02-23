"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumDurationNullableFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const NestedEnumDurationNullableFilter_1 = require("../inputs/NestedEnumDurationNullableFilter");
const Duration_1 = require("../../enums/Duration");
let EnumDurationNullableFilter = class EnumDurationNullableFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Duration_1.Duration, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EnumDurationNullableFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Duration_1.Duration], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], EnumDurationNullableFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Duration_1.Duration], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], EnumDurationNullableFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumDurationNullableFilter_1.NestedEnumDurationNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumDurationNullableFilter_1.NestedEnumDurationNullableFilter)
], EnumDurationNullableFilter.prototype, "not", void 0);
EnumDurationNullableFilter = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("EnumDurationNullableFilter", {
        isAbstract: true
    })
], EnumDurationNullableFilter);
exports.EnumDurationNullableFilter = EnumDurationNullableFilter;
