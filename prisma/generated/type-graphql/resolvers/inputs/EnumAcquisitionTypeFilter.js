"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumAcquisitionTypeFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const NestedEnumAcquisitionTypeFilter_1 = require("../inputs/NestedEnumAcquisitionTypeFilter");
const AcquisitionType_1 = require("../../enums/AcquisitionType");
let EnumAcquisitionTypeFilter = class EnumAcquisitionTypeFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AcquisitionType_1.AcquisitionType, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EnumAcquisitionTypeFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AcquisitionType_1.AcquisitionType], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], EnumAcquisitionTypeFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AcquisitionType_1.AcquisitionType], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], EnumAcquisitionTypeFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumAcquisitionTypeFilter_1.NestedEnumAcquisitionTypeFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumAcquisitionTypeFilter_1.NestedEnumAcquisitionTypeFilter)
], EnumAcquisitionTypeFilter.prototype, "not", void 0);
EnumAcquisitionTypeFilter = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("EnumAcquisitionTypeFilter", {
        isAbstract: true
    })
], EnumAcquisitionTypeFilter);
exports.EnumAcquisitionTypeFilter = EnumAcquisitionTypeFilter;
