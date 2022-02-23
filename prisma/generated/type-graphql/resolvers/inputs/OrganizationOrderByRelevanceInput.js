"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const OrganizationOrderByRelevanceFieldEnum_1 = require("../../enums/OrganizationOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let OrganizationOrderByRelevanceInput = class OrganizationOrderByRelevanceInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [OrganizationOrderByRelevanceFieldEnum_1.OrganizationOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], OrganizationOrderByRelevanceInput.prototype, "fields", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrganizationOrderByRelevanceInput.prototype, "sort", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrganizationOrderByRelevanceInput.prototype, "search", void 0);
OrganizationOrderByRelevanceInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("OrganizationOrderByRelevanceInput", {
        isAbstract: true
    })
], OrganizationOrderByRelevanceInput);
exports.OrganizationOrderByRelevanceInput = OrganizationOrderByRelevanceInput;
