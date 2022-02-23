"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let PriceAvgOrderByAggregateInput = class PriceAvgOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PriceAvgOrderByAggregateInput.prototype, "figure", void 0);
PriceAvgOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PriceAvgOrderByAggregateInput", {
        isAbstract: true
    })
], PriceAvgOrderByAggregateInput);
exports.PriceAvgOrderByAggregateInput = PriceAvgOrderByAggregateInput;
