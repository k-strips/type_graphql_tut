"use strict";
var NestedEnumAcquisitionTypeWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumAcquisitionTypeWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const NestedEnumAcquisitionTypeFilter_1 = require("../inputs/NestedEnumAcquisitionTypeFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const AcquisitionType_1 = require("../../enums/AcquisitionType");
let NestedEnumAcquisitionTypeWithAggregatesFilter = NestedEnumAcquisitionTypeWithAggregatesFilter_1 = class NestedEnumAcquisitionTypeWithAggregatesFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AcquisitionType_1.AcquisitionType, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], NestedEnumAcquisitionTypeWithAggregatesFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AcquisitionType_1.AcquisitionType], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedEnumAcquisitionTypeWithAggregatesFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AcquisitionType_1.AcquisitionType], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedEnumAcquisitionTypeWithAggregatesFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumAcquisitionTypeWithAggregatesFilter_1, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumAcquisitionTypeWithAggregatesFilter)
], NestedEnumAcquisitionTypeWithAggregatesFilter.prototype, "not", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedIntFilter_1.NestedIntFilter)
], NestedEnumAcquisitionTypeWithAggregatesFilter.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumAcquisitionTypeFilter_1.NestedEnumAcquisitionTypeFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumAcquisitionTypeFilter_1.NestedEnumAcquisitionTypeFilter)
], NestedEnumAcquisitionTypeWithAggregatesFilter.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumAcquisitionTypeFilter_1.NestedEnumAcquisitionTypeFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumAcquisitionTypeFilter_1.NestedEnumAcquisitionTypeFilter)
], NestedEnumAcquisitionTypeWithAggregatesFilter.prototype, "_max", void 0);
NestedEnumAcquisitionTypeWithAggregatesFilter = NestedEnumAcquisitionTypeWithAggregatesFilter_1 = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("NestedEnumAcquisitionTypeWithAggregatesFilter", {
        isAbstract: true
    })
], NestedEnumAcquisitionTypeWithAggregatesFilter);
exports.NestedEnumAcquisitionTypeWithAggregatesFilter = NestedEnumAcquisitionTypeWithAggregatesFilter;
