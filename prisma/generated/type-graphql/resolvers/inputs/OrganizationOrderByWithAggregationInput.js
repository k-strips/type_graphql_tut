"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const OrganizationCountOrderByAggregateInput_1 = require("../inputs/OrganizationCountOrderByAggregateInput");
const OrganizationMaxOrderByAggregateInput_1 = require("../inputs/OrganizationMaxOrderByAggregateInput");
const OrganizationMinOrderByAggregateInput_1 = require("../inputs/OrganizationMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let OrganizationOrderByWithAggregationInput = class OrganizationOrderByWithAggregationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrganizationOrderByWithAggregationInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrganizationOrderByWithAggregationInput.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrganizationOrderByWithAggregationInput.prototype, "isVerified", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrganizationOrderByWithAggregationInput.prototype, "isRegistrated", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrganizationOrderByWithAggregationInput.prototype, "isDeleted", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrganizationOrderByWithAggregationInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrganizationOrderByWithAggregationInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => OrganizationCountOrderByAggregateInput_1.OrganizationCountOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", OrganizationCountOrderByAggregateInput_1.OrganizationCountOrderByAggregateInput)
], OrganizationOrderByWithAggregationInput.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => OrganizationMaxOrderByAggregateInput_1.OrganizationMaxOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", OrganizationMaxOrderByAggregateInput_1.OrganizationMaxOrderByAggregateInput)
], OrganizationOrderByWithAggregationInput.prototype, "_max", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => OrganizationMinOrderByAggregateInput_1.OrganizationMinOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", OrganizationMinOrderByAggregateInput_1.OrganizationMinOrderByAggregateInput)
], OrganizationOrderByWithAggregationInput.prototype, "_min", void 0);
OrganizationOrderByWithAggregationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("OrganizationOrderByWithAggregationInput", {
        isAbstract: true
    })
], OrganizationOrderByWithAggregationInput);
exports.OrganizationOrderByWithAggregationInput = OrganizationOrderByWithAggregationInput;
