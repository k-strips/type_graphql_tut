"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationOrderByWithRelationAndSearchRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AddressOrderByWithRelationAndSearchRelevanceInput_1 = require("../inputs/AddressOrderByWithRelationAndSearchRelevanceInput");
const AdvertisementOrderByRelationAggregateInput_1 = require("../inputs/AdvertisementOrderByRelationAggregateInput");
const OrganizationOrderByRelevanceInput_1 = require("../inputs/OrganizationOrderByRelevanceInput");
const PropertyOrderByRelationAggregateInput_1 = require("../inputs/PropertyOrderByRelationAggregateInput");
const UserOrderByRelationAggregateInput_1 = require("../inputs/UserOrderByRelationAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let OrganizationOrderByWithRelationAndSearchRelevanceInput = class OrganizationOrderByWithRelationAndSearchRelevanceInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrganizationOrderByWithRelationAndSearchRelevanceInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrganizationOrderByWithRelationAndSearchRelevanceInput.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AddressOrderByWithRelationAndSearchRelevanceInput_1.AddressOrderByWithRelationAndSearchRelevanceInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AddressOrderByWithRelationAndSearchRelevanceInput_1.AddressOrderByWithRelationAndSearchRelevanceInput)
], OrganizationOrderByWithRelationAndSearchRelevanceInput.prototype, "address", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserOrderByRelationAggregateInput_1.UserOrderByRelationAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserOrderByRelationAggregateInput_1.UserOrderByRelationAggregateInput)
], OrganizationOrderByWithRelationAndSearchRelevanceInput.prototype, "members", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyOrderByRelationAggregateInput_1.PropertyOrderByRelationAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyOrderByRelationAggregateInput_1.PropertyOrderByRelationAggregateInput)
], OrganizationOrderByWithRelationAndSearchRelevanceInput.prototype, "properties", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementOrderByRelationAggregateInput_1.AdvertisementOrderByRelationAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementOrderByRelationAggregateInput_1.AdvertisementOrderByRelationAggregateInput)
], OrganizationOrderByWithRelationAndSearchRelevanceInput.prototype, "advertisement", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrganizationOrderByWithRelationAndSearchRelevanceInput.prototype, "isVerified", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrganizationOrderByWithRelationAndSearchRelevanceInput.prototype, "isRegistrated", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrganizationOrderByWithRelationAndSearchRelevanceInput.prototype, "isDeleted", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrganizationOrderByWithRelationAndSearchRelevanceInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrganizationOrderByWithRelationAndSearchRelevanceInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => OrganizationOrderByRelevanceInput_1.OrganizationOrderByRelevanceInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", OrganizationOrderByRelevanceInput_1.OrganizationOrderByRelevanceInput)
], OrganizationOrderByWithRelationAndSearchRelevanceInput.prototype, "_relevance", void 0);
OrganizationOrderByWithRelationAndSearchRelevanceInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("OrganizationOrderByWithRelationAndSearchRelevanceInput", {
        isAbstract: true
    })
], OrganizationOrderByWithRelationAndSearchRelevanceInput);
exports.OrganizationOrderByWithRelationAndSearchRelevanceInput = OrganizationOrderByWithRelationAndSearchRelevanceInput;
