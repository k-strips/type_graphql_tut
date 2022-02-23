"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let SearchAvgOrderByAggregateInput = class SearchAvgOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SearchAvgOrderByAggregateInput.prototype, "seating", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SearchAvgOrderByAggregateInput.prototype, "bedrooms", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SearchAvgOrderByAggregateInput.prototype, "bathrooms", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SearchAvgOrderByAggregateInput.prototype, "parkingCapacity", void 0);
SearchAvgOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("SearchAvgOrderByAggregateInput", {
        isAbstract: true
    })
], SearchAvgOrderByAggregateInput);
exports.SearchAvgOrderByAggregateInput = SearchAvgOrderByAggregateInput;
