"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let SearchSumOrderByAggregateInput = class SearchSumOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SearchSumOrderByAggregateInput.prototype, "seating", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SearchSumOrderByAggregateInput.prototype, "bedrooms", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SearchSumOrderByAggregateInput.prototype, "bathrooms", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SearchSumOrderByAggregateInput.prototype, "parkingCapacity", void 0);
SearchSumOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("SearchSumOrderByAggregateInput", {
        isAbstract: true
    })
], SearchSumOrderByAggregateInput);
exports.SearchSumOrderByAggregateInput = SearchSumOrderByAggregateInput;
