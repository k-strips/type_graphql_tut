"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SearchOrderByRelevanceFieldEnum_1 = require("../../enums/SearchOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let SearchOrderByRelevanceInput = class SearchOrderByRelevanceInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [SearchOrderByRelevanceFieldEnum_1.SearchOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], SearchOrderByRelevanceInput.prototype, "fields", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SearchOrderByRelevanceInput.prototype, "sort", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SearchOrderByRelevanceInput.prototype, "search", void 0);
SearchOrderByRelevanceInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("SearchOrderByRelevanceInput", {
        isAbstract: true
    })
], SearchOrderByRelevanceInput);
exports.SearchOrderByRelevanceInput = SearchOrderByRelevanceInput;
