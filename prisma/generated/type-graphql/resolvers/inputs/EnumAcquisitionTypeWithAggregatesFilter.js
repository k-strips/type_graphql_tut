"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumAcquisitionTypeWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const NestedEnumAcquisitionTypeFilter_1 = require("../inputs/NestedEnumAcquisitionTypeFilter");
const NestedEnumAcquisitionTypeWithAggregatesFilter_1 = require("../inputs/NestedEnumAcquisitionTypeWithAggregatesFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const AcquisitionType_1 = require("../../enums/AcquisitionType");
let EnumAcquisitionTypeWithAggregatesFilter = class EnumAcquisitionTypeWithAggregatesFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AcquisitionType_1.AcquisitionType, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EnumAcquisitionTypeWithAggregatesFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AcquisitionType_1.AcquisitionType], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], EnumAcquisitionTypeWithAggregatesFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AcquisitionType_1.AcquisitionType], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], EnumAcquisitionTypeWithAggregatesFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumAcquisitionTypeWithAggregatesFilter_1.NestedEnumAcquisitionTypeWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumAcquisitionTypeWithAggregatesFilter_1.NestedEnumAcquisitionTypeWithAggregatesFilter)
], EnumAcquisitionTypeWithAggregatesFilter.prototype, "not", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedIntFilter_1.NestedIntFilter)
], EnumAcquisitionTypeWithAggregatesFilter.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumAcquisitionTypeFilter_1.NestedEnumAcquisitionTypeFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumAcquisitionTypeFilter_1.NestedEnumAcquisitionTypeFilter)
], EnumAcquisitionTypeWithAggregatesFilter.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumAcquisitionTypeFilter_1.NestedEnumAcquisitionTypeFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumAcquisitionTypeFilter_1.NestedEnumAcquisitionTypeFilter)
], EnumAcquisitionTypeWithAggregatesFilter.prototype, "_max", void 0);
EnumAcquisitionTypeWithAggregatesFilter = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("EnumAcquisitionTypeWithAggregatesFilter", {
        isAbstract: true
    })
], EnumAcquisitionTypeWithAggregatesFilter);
exports.EnumAcquisitionTypeWithAggregatesFilter = EnumAcquisitionTypeWithAggregatesFilter;
