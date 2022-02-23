"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumPropertyStateNullableFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const NestedEnumPropertyStateNullableFilter_1 = require("../inputs/NestedEnumPropertyStateNullableFilter");
const PropertyState_1 = require("../../enums/PropertyState");
let EnumPropertyStateNullableFilter = class EnumPropertyStateNullableFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyState_1.PropertyState, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EnumPropertyStateNullableFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PropertyState_1.PropertyState], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], EnumPropertyStateNullableFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PropertyState_1.PropertyState], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], EnumPropertyStateNullableFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumPropertyStateNullableFilter_1.NestedEnumPropertyStateNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumPropertyStateNullableFilter_1.NestedEnumPropertyStateNullableFilter)
], EnumPropertyStateNullableFilter.prototype, "not", void 0);
EnumPropertyStateNullableFilter = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("EnumPropertyStateNullableFilter", {
        isAbstract: true
    })
], EnumPropertyStateNullableFilter);
exports.EnumPropertyStateNullableFilter = EnumPropertyStateNullableFilter;
