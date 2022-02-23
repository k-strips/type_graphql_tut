"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressOrderByWithRelationAndSearchRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AddressOrderByRelevanceInput_1 = require("../inputs/AddressOrderByRelevanceInput");
const OrganizationOrderByWithRelationAndSearchRelevanceInput_1 = require("../inputs/OrganizationOrderByWithRelationAndSearchRelevanceInput");
const UserOrderByWithRelationAndSearchRelevanceInput_1 = require("../inputs/UserOrderByWithRelationAndSearchRelevanceInput");
const SortOrder_1 = require("../../enums/SortOrder");
let AddressOrderByWithRelationAndSearchRelevanceInput = class AddressOrderByWithRelationAndSearchRelevanceInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AddressOrderByWithRelationAndSearchRelevanceInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AddressOrderByWithRelationAndSearchRelevanceInput.prototype, "email", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AddressOrderByWithRelationAndSearchRelevanceInput.prototype, "mobile", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AddressOrderByWithRelationAndSearchRelevanceInput.prototype, "work", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AddressOrderByWithRelationAndSearchRelevanceInput.prototype, "office", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AddressOrderByWithRelationAndSearchRelevanceInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AddressOrderByWithRelationAndSearchRelevanceInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => OrganizationOrderByWithRelationAndSearchRelevanceInput_1.OrganizationOrderByWithRelationAndSearchRelevanceInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", OrganizationOrderByWithRelationAndSearchRelevanceInput_1.OrganizationOrderByWithRelationAndSearchRelevanceInput)
], AddressOrderByWithRelationAndSearchRelevanceInput.prototype, "Organization", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AddressOrderByWithRelationAndSearchRelevanceInput.prototype, "organizationId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserOrderByWithRelationAndSearchRelevanceInput_1.UserOrderByWithRelationAndSearchRelevanceInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserOrderByWithRelationAndSearchRelevanceInput_1.UserOrderByWithRelationAndSearchRelevanceInput)
], AddressOrderByWithRelationAndSearchRelevanceInput.prototype, "User", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AddressOrderByWithRelationAndSearchRelevanceInput.prototype, "userId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AddressOrderByRelevanceInput_1.AddressOrderByRelevanceInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AddressOrderByRelevanceInput_1.AddressOrderByRelevanceInput)
], AddressOrderByWithRelationAndSearchRelevanceInput.prototype, "_relevance", void 0);
AddressOrderByWithRelationAndSearchRelevanceInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AddressOrderByWithRelationAndSearchRelevanceInput", {
        isAbstract: true
    })
], AddressOrderByWithRelationAndSearchRelevanceInput);
exports.AddressOrderByWithRelationAndSearchRelevanceInput = AddressOrderByWithRelationAndSearchRelevanceInput;
