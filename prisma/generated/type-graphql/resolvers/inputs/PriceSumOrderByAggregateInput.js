"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let PriceSumOrderByAggregateInput = class PriceSumOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PriceSumOrderByAggregateInput.prototype, "figure", void 0);
PriceSumOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PriceSumOrderByAggregateInput", {
        isAbstract: true
    })
], PriceSumOrderByAggregateInput);
exports.PriceSumOrderByAggregateInput = PriceSumOrderByAggregateInput;
