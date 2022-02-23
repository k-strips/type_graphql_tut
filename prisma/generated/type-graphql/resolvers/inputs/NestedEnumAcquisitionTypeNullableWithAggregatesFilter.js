"use strict";
var NestedEnumAcquisitionTypeNullableWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumAcquisitionTypeNullableWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const NestedEnumAcquisitionTypeNullableFilter_1 = require("../inputs/NestedEnumAcquisitionTypeNullableFilter");
const NestedIntNullableFilter_1 = require("../inputs/NestedIntNullableFilter");
const AcquisitionType_1 = require("../../enums/AcquisitionType");
let NestedEnumAcquisitionTypeNullableWithAggregatesFilter = NestedEnumAcquisitionTypeNullableWithAggregatesFilter_1 = class NestedEnumAcquisitionTypeNullableWithAggregatesFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AcquisitionType_1.AcquisitionType, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], NestedEnumAcquisitionTypeNullableWithAggregatesFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AcquisitionType_1.AcquisitionType], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedEnumAcquisitionTypeNullableWithAggregatesFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AcquisitionType_1.AcquisitionType], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedEnumAcquisitionTypeNullableWithAggregatesFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumAcquisitionTypeNullableWithAggregatesFilter_1, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumAcquisitionTypeNullableWithAggregatesFilter)
], NestedEnumAcquisitionTypeNullableWithAggregatesFilter.prototype, "not", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedIntNullableFilter_1.NestedIntNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedIntNullableFilter_1.NestedIntNullableFilter)
], NestedEnumAcquisitionTypeNullableWithAggregatesFilter.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumAcquisitionTypeNullableFilter_1.NestedEnumAcquisitionTypeNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumAcquisitionTypeNullableFilter_1.NestedEnumAcquisitionTypeNullableFilter)
], NestedEnumAcquisitionTypeNullableWithAggregatesFilter.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumAcquisitionTypeNullableFilter_1.NestedEnumAcquisitionTypeNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumAcquisitionTypeNullableFilter_1.NestedEnumAcquisitionTypeNullableFilter)
], NestedEnumAcquisitionTypeNullableWithAggregatesFilter.prototype, "_max", void 0);
NestedEnumAcquisitionTypeNullableWithAggregatesFilter = NestedEnumAcquisitionTypeNullableWithAggregatesFilter_1 = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("NestedEnumAcquisitionTypeNullableWithAggregatesFilter", {
        isAbstract: true
    })
], NestedEnumAcquisitionTypeNullableWithAggregatesFilter);
exports.NestedEnumAcquisitionTypeNullableWithAggregatesFilter = NestedEnumAcquisitionTypeNullableWithAggregatesFilter;
