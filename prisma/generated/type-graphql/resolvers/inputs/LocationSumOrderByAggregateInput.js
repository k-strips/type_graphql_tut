"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let LocationSumOrderByAggregateInput = class LocationSumOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LocationSumOrderByAggregateInput.prototype, "electricitySupplyRating", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LocationSumOrderByAggregateInput.prototype, "waterSupplyRating", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LocationSumOrderByAggregateInput.prototype, "noiseLevelSupplyRating", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LocationSumOrderByAggregateInput.prototype, "crimeSupplpyRating", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LocationSumOrderByAggregateInput.prototype, "recreationalRating", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LocationSumOrderByAggregateInput.prototype, "trafficRating", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LocationSumOrderByAggregateInput.prototype, "lat", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LocationSumOrderByAggregateInput.prototype, "lon", void 0);
LocationSumOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LocationSumOrderByAggregateInput", {
        isAbstract: true
    })
], LocationSumOrderByAggregateInput);
exports.LocationSumOrderByAggregateInput = LocationSumOrderByAggregateInput;
