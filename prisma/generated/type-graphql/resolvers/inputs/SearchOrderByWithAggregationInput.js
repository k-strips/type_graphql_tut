"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SearchAvgOrderByAggregateInput_1 = require("../inputs/SearchAvgOrderByAggregateInput");
const SearchCountOrderByAggregateInput_1 = require("../inputs/SearchCountOrderByAggregateInput");
const SearchMaxOrderByAggregateInput_1 = require("../inputs/SearchMaxOrderByAggregateInput");
const SearchMinOrderByAggregateInput_1 = require("../inputs/SearchMinOrderByAggregateInput");
const SearchSumOrderByAggregateInput_1 = require("../inputs/SearchSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let SearchOrderByWithAggregationInput = class SearchOrderByWithAggregationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SearchOrderByWithAggregationInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SearchOrderByWithAggregationInput.prototype, "userId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SearchOrderByWithAggregationInput.prototype, "category", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SearchOrderByWithAggregationInput.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SearchOrderByWithAggregationInput.prototype, "acquisition", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SearchOrderByWithAggregationInput.prototype, "seating", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SearchOrderByWithAggregationInput.prototype, "state", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SearchOrderByWithAggregationInput.prototype, "bedrooms", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SearchOrderByWithAggregationInput.prototype, "bathrooms", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SearchOrderByWithAggregationInput.prototype, "parkingCapacity", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SearchOrderByWithAggregationInput.prototype, "location", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SearchOrderByWithAggregationInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SearchCountOrderByAggregateInput_1.SearchCountOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SearchCountOrderByAggregateInput_1.SearchCountOrderByAggregateInput)
], SearchOrderByWithAggregationInput.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SearchAvgOrderByAggregateInput_1.SearchAvgOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SearchAvgOrderByAggregateInput_1.SearchAvgOrderByAggregateInput)
], SearchOrderByWithAggregationInput.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SearchMaxOrderByAggregateInput_1.SearchMaxOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SearchMaxOrderByAggregateInput_1.SearchMaxOrderByAggregateInput)
], SearchOrderByWithAggregationInput.prototype, "_max", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SearchMinOrderByAggregateInput_1.SearchMinOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SearchMinOrderByAggregateInput_1.SearchMinOrderByAggregateInput)
], SearchOrderByWithAggregationInput.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SearchSumOrderByAggregateInput_1.SearchSumOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SearchSumOrderByAggregateInput_1.SearchSumOrderByAggregateInput)
], SearchOrderByWithAggregationInput.prototype, "_sum", void 0);
SearchOrderByWithAggregationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("SearchOrderByWithAggregationInput", {
        isAbstract: true
    })
], SearchOrderByWithAggregationInput);
exports.SearchOrderByWithAggregationInput = SearchOrderByWithAggregationInput;
