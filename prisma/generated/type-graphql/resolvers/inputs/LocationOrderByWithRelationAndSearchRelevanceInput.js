"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationOrderByWithRelationAndSearchRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LocationOrderByRelevanceInput_1 = require("../inputs/LocationOrderByRelevanceInput");
const SortOrder_1 = require("../../enums/SortOrder");
let LocationOrderByWithRelationAndSearchRelevanceInput = class LocationOrderByWithRelationAndSearchRelevanceInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LocationOrderByWithRelationAndSearchRelevanceInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LocationOrderByWithRelationAndSearchRelevanceInput.prototype, "region", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LocationOrderByWithRelationAndSearchRelevanceInput.prototype, "city", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LocationOrderByWithRelationAndSearchRelevanceInput.prototype, "locationInfo", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LocationOrderByWithRelationAndSearchRelevanceInput.prototype, "electricitySupplyRating", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LocationOrderByWithRelationAndSearchRelevanceInput.prototype, "waterSupplyRating", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LocationOrderByWithRelationAndSearchRelevanceInput.prototype, "noiseLevelSupplyRating", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LocationOrderByWithRelationAndSearchRelevanceInput.prototype, "crimeSupplpyRating", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LocationOrderByWithRelationAndSearchRelevanceInput.prototype, "recreationalRating", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LocationOrderByWithRelationAndSearchRelevanceInput.prototype, "trafficRating", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LocationOrderByWithRelationAndSearchRelevanceInput.prototype, "lat", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LocationOrderByWithRelationAndSearchRelevanceInput.prototype, "lon", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LocationOrderByRelevanceInput_1.LocationOrderByRelevanceInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LocationOrderByRelevanceInput_1.LocationOrderByRelevanceInput)
], LocationOrderByWithRelationAndSearchRelevanceInput.prototype, "_relevance", void 0);
LocationOrderByWithRelationAndSearchRelevanceInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LocationOrderByWithRelationAndSearchRelevanceInput", {
        isAbstract: true
    })
], LocationOrderByWithRelationAndSearchRelevanceInput);
exports.LocationOrderByWithRelationAndSearchRelevanceInput = LocationOrderByWithRelationAndSearchRelevanceInput;
