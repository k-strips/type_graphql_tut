"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PriceOrderByRelevanceFieldEnum_1 = require("../../enums/PriceOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let PriceOrderByRelevanceInput = class PriceOrderByRelevanceInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PriceOrderByRelevanceFieldEnum_1.PriceOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PriceOrderByRelevanceInput.prototype, "fields", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PriceOrderByRelevanceInput.prototype, "sort", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PriceOrderByRelevanceInput.prototype, "search", void 0);
PriceOrderByRelevanceInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PriceOrderByRelevanceInput", {
        isAbstract: true
    })
], PriceOrderByRelevanceInput);
exports.PriceOrderByRelevanceInput = PriceOrderByRelevanceInput;
