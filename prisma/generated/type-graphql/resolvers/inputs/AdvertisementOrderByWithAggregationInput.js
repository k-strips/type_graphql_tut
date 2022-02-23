"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdvertisementOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AdvertisementCountOrderByAggregateInput_1 = require("../inputs/AdvertisementCountOrderByAggregateInput");
const AdvertisementMaxOrderByAggregateInput_1 = require("../inputs/AdvertisementMaxOrderByAggregateInput");
const AdvertisementMinOrderByAggregateInput_1 = require("../inputs/AdvertisementMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let AdvertisementOrderByWithAggregationInput = class AdvertisementOrderByWithAggregationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AdvertisementOrderByWithAggregationInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AdvertisementOrderByWithAggregationInput.prototype, "isExpired", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AdvertisementOrderByWithAggregationInput.prototype, "isPaused", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AdvertisementOrderByWithAggregationInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AdvertisementOrderByWithAggregationInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AdvertisementOrderByWithAggregationInput.prototype, "userId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AdvertisementOrderByWithAggregationInput.prototype, "organizationId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AdvertisementOrderByWithAggregationInput.prototype, "propertyId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementCountOrderByAggregateInput_1.AdvertisementCountOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementCountOrderByAggregateInput_1.AdvertisementCountOrderByAggregateInput)
], AdvertisementOrderByWithAggregationInput.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementMaxOrderByAggregateInput_1.AdvertisementMaxOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementMaxOrderByAggregateInput_1.AdvertisementMaxOrderByAggregateInput)
], AdvertisementOrderByWithAggregationInput.prototype, "_max", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementMinOrderByAggregateInput_1.AdvertisementMinOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementMinOrderByAggregateInput_1.AdvertisementMinOrderByAggregateInput)
], AdvertisementOrderByWithAggregationInput.prototype, "_min", void 0);
AdvertisementOrderByWithAggregationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AdvertisementOrderByWithAggregationInput", {
        isAbstract: true
    })
], AdvertisementOrderByWithAggregationInput);
exports.AdvertisementOrderByWithAggregationInput = AdvertisementOrderByWithAggregationInput;
