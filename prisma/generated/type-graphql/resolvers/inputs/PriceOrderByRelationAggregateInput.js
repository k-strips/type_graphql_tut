"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceOrderByRelationAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let PriceOrderByRelationAggregateInput = class PriceOrderByRelationAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PriceOrderByRelationAggregateInput.prototype, "_count", void 0);
PriceOrderByRelationAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PriceOrderByRelationAggregateInput", {
        isAbstract: true
    })
], PriceOrderByRelationAggregateInput);
exports.PriceOrderByRelationAggregateInput = PriceOrderByRelationAggregateInput;
