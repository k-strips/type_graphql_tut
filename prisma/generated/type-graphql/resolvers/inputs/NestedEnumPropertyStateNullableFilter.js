"use strict";
var NestedEnumPropertyStateNullableFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumPropertyStateNullableFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PropertyState_1 = require("../../enums/PropertyState");
let NestedEnumPropertyStateNullableFilter = NestedEnumPropertyStateNullableFilter_1 = class NestedEnumPropertyStateNullableFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyState_1.PropertyState, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], NestedEnumPropertyStateNullableFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PropertyState_1.PropertyState], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedEnumPropertyStateNullableFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PropertyState_1.PropertyState], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedEnumPropertyStateNullableFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumPropertyStateNullableFilter_1, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumPropertyStateNullableFilter)
], NestedEnumPropertyStateNullableFilter.prototype, "not", void 0);
NestedEnumPropertyStateNullableFilter = NestedEnumPropertyStateNullableFilter_1 = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("NestedEnumPropertyStateNullableFilter", {
        isAbstract: true
    })
], NestedEnumPropertyStateNullableFilter);
exports.NestedEnumPropertyStateNullableFilter = NestedEnumPropertyStateNullableFilter;
