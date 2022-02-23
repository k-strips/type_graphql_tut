"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PropertyOrderByRelevanceFieldEnum_1 = require("../../enums/PropertyOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let PropertyOrderByRelevanceInput = class PropertyOrderByRelevanceInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PropertyOrderByRelevanceFieldEnum_1.PropertyOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PropertyOrderByRelevanceInput.prototype, "fields", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PropertyOrderByRelevanceInput.prototype, "sort", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PropertyOrderByRelevanceInput.prototype, "search", void 0);
PropertyOrderByRelevanceInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PropertyOrderByRelevanceInput", {
        isAbstract: true
    })
], PropertyOrderByRelevanceInput);
exports.PropertyOrderByRelevanceInput = PropertyOrderByRelevanceInput;
