"use strict";
var NestedEnumAcquisitionTypeFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumAcquisitionTypeFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AcquisitionType_1 = require("../../enums/AcquisitionType");
let NestedEnumAcquisitionTypeFilter = NestedEnumAcquisitionTypeFilter_1 = class NestedEnumAcquisitionTypeFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AcquisitionType_1.AcquisitionType, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], NestedEnumAcquisitionTypeFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AcquisitionType_1.AcquisitionType], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedEnumAcquisitionTypeFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AcquisitionType_1.AcquisitionType], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedEnumAcquisitionTypeFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumAcquisitionTypeFilter_1, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumAcquisitionTypeFilter)
], NestedEnumAcquisitionTypeFilter.prototype, "not", void 0);
NestedEnumAcquisitionTypeFilter = NestedEnumAcquisitionTypeFilter_1 = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("NestedEnumAcquisitionTypeFilter", {
        isAbstract: true
    })
], NestedEnumAcquisitionTypeFilter);
exports.NestedEnumAcquisitionTypeFilter = NestedEnumAcquisitionTypeFilter;
