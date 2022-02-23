"use strict";
var NestedEnumLandSizeUnitFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumLandSizeUnitFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LandSizeUnit_1 = require("../../enums/LandSizeUnit");
let NestedEnumLandSizeUnitFilter = NestedEnumLandSizeUnitFilter_1 = class NestedEnumLandSizeUnitFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LandSizeUnit_1.LandSizeUnit, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], NestedEnumLandSizeUnitFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [LandSizeUnit_1.LandSizeUnit], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedEnumLandSizeUnitFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [LandSizeUnit_1.LandSizeUnit], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedEnumLandSizeUnitFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumLandSizeUnitFilter_1, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumLandSizeUnitFilter)
], NestedEnumLandSizeUnitFilter.prototype, "not", void 0);
NestedEnumLandSizeUnitFilter = NestedEnumLandSizeUnitFilter_1 = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("NestedEnumLandSizeUnitFilter", {
        isAbstract: true
    })
], NestedEnumLandSizeUnitFilter);
exports.NestedEnumLandSizeUnitFilter = NestedEnumLandSizeUnitFilter;
