"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumLandSizeUnitFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const NestedEnumLandSizeUnitFilter_1 = require("../inputs/NestedEnumLandSizeUnitFilter");
const LandSizeUnit_1 = require("../../enums/LandSizeUnit");
let EnumLandSizeUnitFilter = class EnumLandSizeUnitFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LandSizeUnit_1.LandSizeUnit, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EnumLandSizeUnitFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [LandSizeUnit_1.LandSizeUnit], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], EnumLandSizeUnitFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [LandSizeUnit_1.LandSizeUnit], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], EnumLandSizeUnitFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumLandSizeUnitFilter_1.NestedEnumLandSizeUnitFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumLandSizeUnitFilter_1.NestedEnumLandSizeUnitFilter)
], EnumLandSizeUnitFilter.prototype, "not", void 0);
EnumLandSizeUnitFilter = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("EnumLandSizeUnitFilter", {
        isAbstract: true
    })
], EnumLandSizeUnitFilter);
exports.EnumLandSizeUnitFilter = EnumLandSizeUnitFilter;
