"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SaveOrderByRelevanceFieldEnum_1 = require("../../enums/SaveOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let SaveOrderByRelevanceInput = class SaveOrderByRelevanceInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [SaveOrderByRelevanceFieldEnum_1.SaveOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], SaveOrderByRelevanceInput.prototype, "fields", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SaveOrderByRelevanceInput.prototype, "sort", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SaveOrderByRelevanceInput.prototype, "search", void 0);
SaveOrderByRelevanceInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("SaveOrderByRelevanceInput", {
        isAbstract: true
    })
], SaveOrderByRelevanceInput);
exports.SaveOrderByRelevanceInput = SaveOrderByRelevanceInput;
