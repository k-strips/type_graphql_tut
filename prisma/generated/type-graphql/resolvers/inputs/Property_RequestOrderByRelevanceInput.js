"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Property_RequestOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Property_RequestOrderByRelevanceFieldEnum_1 = require("../../enums/Property_RequestOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let Property_RequestOrderByRelevanceInput = class Property_RequestOrderByRelevanceInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Property_RequestOrderByRelevanceFieldEnum_1.Property_RequestOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], Property_RequestOrderByRelevanceInput.prototype, "fields", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Property_RequestOrderByRelevanceInput.prototype, "sort", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Property_RequestOrderByRelevanceInput.prototype, "search", void 0);
Property_RequestOrderByRelevanceInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("Property_RequestOrderByRelevanceInput", {
        isAbstract: true
    })
], Property_RequestOrderByRelevanceInput);
exports.Property_RequestOrderByRelevanceInput = Property_RequestOrderByRelevanceInput;
