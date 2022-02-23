"use strict";
var NestedEnumLandSizeUnitWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumLandSizeUnitWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const NestedEnumLandSizeUnitFilter_1 = require("../inputs/NestedEnumLandSizeUnitFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const LandSizeUnit_1 = require("../../enums/LandSizeUnit");
let NestedEnumLandSizeUnitWithAggregatesFilter = NestedEnumLandSizeUnitWithAggregatesFilter_1 = class NestedEnumLandSizeUnitWithAggregatesFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LandSizeUnit_1.LandSizeUnit, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], NestedEnumLandSizeUnitWithAggregatesFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [LandSizeUnit_1.LandSizeUnit], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedEnumLandSizeUnitWithAggregatesFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [LandSizeUnit_1.LandSizeUnit], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedEnumLandSizeUnitWithAggregatesFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumLandSizeUnitWithAggregatesFilter_1, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumLandSizeUnitWithAggregatesFilter)
], NestedEnumLandSizeUnitWithAggregatesFilter.prototype, "not", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedIntFilter_1.NestedIntFilter)
], NestedEnumLandSizeUnitWithAggregatesFilter.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumLandSizeUnitFilter_1.NestedEnumLandSizeUnitFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumLandSizeUnitFilter_1.NestedEnumLandSizeUnitFilter)
], NestedEnumLandSizeUnitWithAggregatesFilter.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumLandSizeUnitFilter_1.NestedEnumLandSizeUnitFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumLandSizeUnitFilter_1.NestedEnumLandSizeUnitFilter)
], NestedEnumLandSizeUnitWithAggregatesFilter.prototype, "_max", void 0);
NestedEnumLandSizeUnitWithAggregatesFilter = NestedEnumLandSizeUnitWithAggregatesFilter_1 = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("NestedEnumLandSizeUnitWithAggregatesFilter", {
        isAbstract: true
    })
], NestedEnumLandSizeUnitWithAggregatesFilter);
exports.NestedEnumLandSizeUnitWithAggregatesFilter = NestedEnumLandSizeUnitWithAggregatesFilter;
