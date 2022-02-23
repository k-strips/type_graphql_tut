"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumLandSizeUnitWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const NestedEnumLandSizeUnitFilter_1 = require("../inputs/NestedEnumLandSizeUnitFilter");
const NestedEnumLandSizeUnitWithAggregatesFilter_1 = require("../inputs/NestedEnumLandSizeUnitWithAggregatesFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const LandSizeUnit_1 = require("../../enums/LandSizeUnit");
let EnumLandSizeUnitWithAggregatesFilter = class EnumLandSizeUnitWithAggregatesFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LandSizeUnit_1.LandSizeUnit, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EnumLandSizeUnitWithAggregatesFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [LandSizeUnit_1.LandSizeUnit], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], EnumLandSizeUnitWithAggregatesFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [LandSizeUnit_1.LandSizeUnit], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], EnumLandSizeUnitWithAggregatesFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumLandSizeUnitWithAggregatesFilter_1.NestedEnumLandSizeUnitWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumLandSizeUnitWithAggregatesFilter_1.NestedEnumLandSizeUnitWithAggregatesFilter)
], EnumLandSizeUnitWithAggregatesFilter.prototype, "not", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedIntFilter_1.NestedIntFilter)
], EnumLandSizeUnitWithAggregatesFilter.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumLandSizeUnitFilter_1.NestedEnumLandSizeUnitFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumLandSizeUnitFilter_1.NestedEnumLandSizeUnitFilter)
], EnumLandSizeUnitWithAggregatesFilter.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumLandSizeUnitFilter_1.NestedEnumLandSizeUnitFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumLandSizeUnitFilter_1.NestedEnumLandSizeUnitFilter)
], EnumLandSizeUnitWithAggregatesFilter.prototype, "_max", void 0);
EnumLandSizeUnitWithAggregatesFilter = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("EnumLandSizeUnitWithAggregatesFilter", {
        isAbstract: true
    })
], EnumLandSizeUnitWithAggregatesFilter);
exports.EnumLandSizeUnitWithAggregatesFilter = EnumLandSizeUnitWithAggregatesFilter;
