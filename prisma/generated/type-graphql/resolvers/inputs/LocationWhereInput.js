"use strict";
var LocationWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const FloatNullableFilter_1 = require("../inputs/FloatNullableFilter");
const IntNullableFilter_1 = require("../inputs/IntNullableFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let LocationWhereInput = LocationWhereInput_1 = class LocationWhereInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [LocationWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], LocationWhereInput.prototype, "AND", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [LocationWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], LocationWhereInput.prototype, "OR", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [LocationWhereInput_1], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], LocationWhereInput.prototype, "NOT", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFilter_1.StringFilter)
], LocationWhereInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFilter_1.StringFilter)
], LocationWhereInput.prototype, "region", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFilter_1.StringFilter)
], LocationWhereInput.prototype, "city", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringNullableFilter_1.StringNullableFilter)
], LocationWhereInput.prototype, "locationInfo", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", IntNullableFilter_1.IntNullableFilter)
], LocationWhereInput.prototype, "electricitySupplyRating", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", IntNullableFilter_1.IntNullableFilter)
], LocationWhereInput.prototype, "waterSupplyRating", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", IntNullableFilter_1.IntNullableFilter)
], LocationWhereInput.prototype, "noiseLevelSupplyRating", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", IntNullableFilter_1.IntNullableFilter)
], LocationWhereInput.prototype, "crimeSupplpyRating", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", IntNullableFilter_1.IntNullableFilter)
], LocationWhereInput.prototype, "recreationalRating", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", IntNullableFilter_1.IntNullableFilter)
], LocationWhereInput.prototype, "trafficRating", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => FloatNullableFilter_1.FloatNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", FloatNullableFilter_1.FloatNullableFilter)
], LocationWhereInput.prototype, "lat", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => FloatNullableFilter_1.FloatNullableFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", FloatNullableFilter_1.FloatNullableFilter)
], LocationWhereInput.prototype, "lon", void 0);
LocationWhereInput = LocationWhereInput_1 = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LocationWhereInput", {
        isAbstract: true
    })
], LocationWhereInput);
exports.LocationWhereInput = LocationWhereInput;
