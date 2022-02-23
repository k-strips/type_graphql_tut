"use strict";
var NestedEnumAcquisitionTypeNullableFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumAcquisitionTypeNullableFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AcquisitionType_1 = require("../../enums/AcquisitionType");
let NestedEnumAcquisitionTypeNullableFilter = NestedEnumAcquisitionTypeNullableFilter_1 = class NestedEnumAcquisitionTypeNullableFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AcquisitionType_1.AcquisitionType, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], NestedEnumAcquisitionTypeNullableFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AcquisitionType_1.AcquisitionType], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedEnumAcquisitionTypeNullableFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AcquisitionType_1.AcquisitionType], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedEnumAcquisitionTypeNullableFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumAcquisitionTypeNullableFilter_1, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumAcquisitionTypeNullableFilter)
], NestedEnumAcquisitionTypeNullableFilter.prototype, "not", void 0);
NestedEnumAcquisitionTypeNullableFilter = NestedEnumAcquisitionTypeNullableFilter_1 = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("NestedEnumAcquisitionTypeNullableFilter", {
        isAbstract: true
    })
], NestedEnumAcquisitionTypeNullableFilter);
exports.NestedEnumAcquisitionTypeNullableFilter = NestedEnumAcquisitionTypeNullableFilter;
