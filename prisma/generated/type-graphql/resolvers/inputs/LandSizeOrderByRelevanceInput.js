"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LandSizeOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LandSizeOrderByRelevanceFieldEnum_1 = require("../../enums/LandSizeOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let LandSizeOrderByRelevanceInput = class LandSizeOrderByRelevanceInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [LandSizeOrderByRelevanceFieldEnum_1.LandSizeOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], LandSizeOrderByRelevanceInput.prototype, "fields", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LandSizeOrderByRelevanceInput.prototype, "sort", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LandSizeOrderByRelevanceInput.prototype, "search", void 0);
LandSizeOrderByRelevanceInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LandSizeOrderByRelevanceInput", {
        isAbstract: true
    })
], LandSizeOrderByRelevanceInput);
exports.LandSizeOrderByRelevanceInput = LandSizeOrderByRelevanceInput;
