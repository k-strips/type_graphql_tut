"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumAcquisitionTypeNullableFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const NestedEnumAcquisitionTypeNullableFilter_1 = require("../inputs/NestedEnumAcquisitionTypeNullableFilter");
const AcquisitionType_1 = require("../../enums/AcquisitionType");
let EnumAcquisitionTypeNullableFilter = class EnumAcquisitionTypeNullableFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AcquisitionType_1.AcquisitionType, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EnumAcquisitionTypeNullableFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AcquisitionType_1.AcquisitionType], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], EnumAcquisitionTypeNullableFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AcquisitionType_1.AcquisitionType], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], EnumAcquisitionTypeNullableFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumAcquisitionTypeNullableFilter_1.NestedEnumAcquisitionTypeNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumAcquisitionTypeNullableFilter_1.NestedEnumAcquisitionTypeNullableFilter)
], EnumAcquisitionTypeNullableFilter.prototype, "not", void 0);
EnumAcquisitionTypeNullableFilter = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("EnumAcquisitionTypeNullableFilter", {
        isAbstract: true
    })
], EnumAcquisitionTypeNullableFilter);
exports.EnumAcquisitionTypeNullableFilter = EnumAcquisitionTypeNullableFilter;
