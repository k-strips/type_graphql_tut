"use strict";
var LandSizeWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LandSizeWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const EnumLandSizeUnitFilter_1 = require("../inputs/EnumLandSizeUnitFilter");
const FloatFilter_1 = require("../inputs/FloatFilter");
const PropertyRelationFilter_1 = require("../inputs/PropertyRelationFilter");
const Property_RequestRelationFilter_1 = require("../inputs/Property_RequestRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let LandSizeWhereInput = LandSizeWhereInput_1 = class LandSizeWhereInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [LandSizeWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], LandSizeWhereInput.prototype, "AND", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [LandSizeWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], LandSizeWhereInput.prototype, "OR", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [LandSizeWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], LandSizeWhereInput.prototype, "NOT", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFilter_1.StringFilter)
], LandSizeWhereInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => FloatFilter_1.FloatFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", FloatFilter_1.FloatFilter)
], LandSizeWhereInput.prototype, "measurement", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumLandSizeUnitFilter_1.EnumLandSizeUnitFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumLandSizeUnitFilter_1.EnumLandSizeUnitFilter)
], LandSizeWhereInput.prototype, "unit", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyRelationFilter_1.PropertyRelationFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyRelationFilter_1.PropertyRelationFilter)
], LandSizeWhereInput.prototype, "Property", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringNullableFilter_1.StringNullableFilter)
], LandSizeWhereInput.prototype, "propertyId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestRelationFilter_1.Property_RequestRelationFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestRelationFilter_1.Property_RequestRelationFilter)
], LandSizeWhereInput.prototype, "Property_Request", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringNullableFilter_1.StringNullableFilter)
], LandSizeWhereInput.prototype, "property_RequestId", void 0);
LandSizeWhereInput = LandSizeWhereInput_1 = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LandSizeWhereInput", {
        isAbstract: true
    })
], LandSizeWhereInput);
exports.LandSizeWhereInput = LandSizeWhereInput;
