"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumAcquisitionTypeNullableWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const NestedEnumAcquisitionTypeNullableFilter_1 = require("../inputs/NestedEnumAcquisitionTypeNullableFilter");
const NestedEnumAcquisitionTypeNullableWithAggregatesFilter_1 = require("../inputs/NestedEnumAcquisitionTypeNullableWithAggregatesFilter");
const NestedIntNullableFilter_1 = require("../inputs/NestedIntNullableFilter");
const AcquisitionType_1 = require("../../enums/AcquisitionType");
let EnumAcquisitionTypeNullableWithAggregatesFilter = class EnumAcquisitionTypeNullableWithAggregatesFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AcquisitionType_1.AcquisitionType, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EnumAcquisitionTypeNullableWithAggregatesFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AcquisitionType_1.AcquisitionType], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], EnumAcquisitionTypeNullableWithAggregatesFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AcquisitionType_1.AcquisitionType], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], EnumAcquisitionTypeNullableWithAggregatesFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumAcquisitionTypeNullableWithAggregatesFilter_1.NestedEnumAcquisitionTypeNullableWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumAcquisitionTypeNullableWithAggregatesFilter_1.NestedEnumAcquisitionTypeNullableWithAggregatesFilter)
], EnumAcquisitionTypeNullableWithAggregatesFilter.prototype, "not", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedIntNullableFilter_1.NestedIntNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedIntNullableFilter_1.NestedIntNullableFilter)
], EnumAcquisitionTypeNullableWithAggregatesFilter.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumAcquisitionTypeNullableFilter_1.NestedEnumAcquisitionTypeNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumAcquisitionTypeNullableFilter_1.NestedEnumAcquisitionTypeNullableFilter)
], EnumAcquisitionTypeNullableWithAggregatesFilter.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumAcquisitionTypeNullableFilter_1.NestedEnumAcquisitionTypeNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumAcquisitionTypeNullableFilter_1.NestedEnumAcquisitionTypeNullableFilter)
], EnumAcquisitionTypeNullableWithAggregatesFilter.prototype, "_max", void 0);
EnumAcquisitionTypeNullableWithAggregatesFilter = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("EnumAcquisitionTypeNullableWithAggregatesFilter", {
        isAbstract: true
    })
], EnumAcquisitionTypeNullableWithAggregatesFilter);
exports.EnumAcquisitionTypeNullableWithAggregatesFilter = EnumAcquisitionTypeNullableWithAggregatesFilter;
