"use strict";
var NestedEnumDurationNullableFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumDurationNullableFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Duration_1 = require("../../enums/Duration");
let NestedEnumDurationNullableFilter = NestedEnumDurationNullableFilter_1 = class NestedEnumDurationNullableFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Duration_1.Duration, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], NestedEnumDurationNullableFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Duration_1.Duration], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedEnumDurationNullableFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Duration_1.Duration], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedEnumDurationNullableFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumDurationNullableFilter_1, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumDurationNullableFilter)
], NestedEnumDurationNullableFilter.prototype, "not", void 0);
NestedEnumDurationNullableFilter = NestedEnumDurationNullableFilter_1 = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("NestedEnumDurationNullableFilter", {
        isAbstract: true
    })
], NestedEnumDurationNullableFilter);
exports.NestedEnumDurationNullableFilter = NestedEnumDurationNullableFilter;
