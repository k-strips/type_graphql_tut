"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PriceAvgOrderByAggregateInput_1 = require("../inputs/PriceAvgOrderByAggregateInput");
const PriceCountOrderByAggregateInput_1 = require("../inputs/PriceCountOrderByAggregateInput");
const PriceMaxOrderByAggregateInput_1 = require("../inputs/PriceMaxOrderByAggregateInput");
const PriceMinOrderByAggregateInput_1 = require("../inputs/PriceMinOrderByAggregateInput");
const PriceSumOrderByAggregateInput_1 = require("../inputs/PriceSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let PriceOrderByWithAggregationInput = class PriceOrderByWithAggregationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PriceOrderByWithAggregationInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PriceOrderByWithAggregationInput.prototype, "figure", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PriceOrderByWithAggregationInput.prototype, "currency", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PriceOrderByWithAggregationInput.prototype, "duration", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PriceOrderByWithAggregationInput.prototype, "propertyId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PriceOrderByWithAggregationInput.prototype, "advertisementId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PriceOrderByWithAggregationInput.prototype, "property_RequestId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PriceCountOrderByAggregateInput_1.PriceCountOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PriceCountOrderByAggregateInput_1.PriceCountOrderByAggregateInput)
], PriceOrderByWithAggregationInput.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PriceAvgOrderByAggregateInput_1.PriceAvgOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PriceAvgOrderByAggregateInput_1.PriceAvgOrderByAggregateInput)
], PriceOrderByWithAggregationInput.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PriceMaxOrderByAggregateInput_1.PriceMaxOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PriceMaxOrderByAggregateInput_1.PriceMaxOrderByAggregateInput)
], PriceOrderByWithAggregationInput.prototype, "_max", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PriceMinOrderByAggregateInput_1.PriceMinOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PriceMinOrderByAggregateInput_1.PriceMinOrderByAggregateInput)
], PriceOrderByWithAggregationInput.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PriceSumOrderByAggregateInput_1.PriceSumOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PriceSumOrderByAggregateInput_1.PriceSumOrderByAggregateInput)
], PriceOrderByWithAggregationInput.prototype, "_sum", void 0);
PriceOrderByWithAggregationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PriceOrderByWithAggregationInput", {
        isAbstract: true
    })
], PriceOrderByWithAggregationInput);
exports.PriceOrderByWithAggregationInput = PriceOrderByWithAggregationInput;
