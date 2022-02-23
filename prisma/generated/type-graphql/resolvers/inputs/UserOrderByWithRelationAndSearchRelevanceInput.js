"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserOrderByWithRelationAndSearchRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AddressOrderByWithRelationAndSearchRelevanceInput_1 = require("../inputs/AddressOrderByWithRelationAndSearchRelevanceInput");
const AdvertisementOrderByRelationAggregateInput_1 = require("../inputs/AdvertisementOrderByRelationAggregateInput");
const OrganizationOrderByWithRelationAndSearchRelevanceInput_1 = require("../inputs/OrganizationOrderByWithRelationAndSearchRelevanceInput");
const PropertyOrderByRelationAggregateInput_1 = require("../inputs/PropertyOrderByRelationAggregateInput");
const Property_RequestOrderByRelationAggregateInput_1 = require("../inputs/Property_RequestOrderByRelationAggregateInput");
const SaveOrderByRelationAggregateInput_1 = require("../inputs/SaveOrderByRelationAggregateInput");
const UserOrderByRelevanceInput_1 = require("../inputs/UserOrderByRelevanceInput");
const SortOrder_1 = require("../../enums/SortOrder");
let UserOrderByWithRelationAndSearchRelevanceInput = class UserOrderByWithRelationAndSearchRelevanceInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserOrderByWithRelationAndSearchRelevanceInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserOrderByWithRelationAndSearchRelevanceInput.prototype, "firstName", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserOrderByWithRelationAndSearchRelevanceInput.prototype, "lastName", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserOrderByWithRelationAndSearchRelevanceInput.prototype, "middleName", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserOrderByWithRelationAndSearchRelevanceInput.prototype, "status", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AddressOrderByWithRelationAndSearchRelevanceInput_1.AddressOrderByWithRelationAndSearchRelevanceInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AddressOrderByWithRelationAndSearchRelevanceInput_1.AddressOrderByWithRelationAndSearchRelevanceInput)
], UserOrderByWithRelationAndSearchRelevanceInput.prototype, "address", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyOrderByRelationAggregateInput_1.PropertyOrderByRelationAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyOrderByRelationAggregateInput_1.PropertyOrderByRelationAggregateInput)
], UserOrderByWithRelationAndSearchRelevanceInput.prototype, "property", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SaveOrderByRelationAggregateInput_1.SaveOrderByRelationAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SaveOrderByRelationAggregateInput_1.SaveOrderByRelationAggregateInput)
], UserOrderByWithRelationAndSearchRelevanceInput.prototype, "saves", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementOrderByRelationAggregateInput_1.AdvertisementOrderByRelationAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementOrderByRelationAggregateInput_1.AdvertisementOrderByRelationAggregateInput)
], UserOrderByWithRelationAndSearchRelevanceInput.prototype, "advertisement", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestOrderByRelationAggregateInput_1.Property_RequestOrderByRelationAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestOrderByRelationAggregateInput_1.Property_RequestOrderByRelationAggregateInput)
], UserOrderByWithRelationAndSearchRelevanceInput.prototype, "request", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserOrderByWithRelationAndSearchRelevanceInput.prototype, "isVerified", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserOrderByWithRelationAndSearchRelevanceInput.prototype, "isRegistrated", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserOrderByWithRelationAndSearchRelevanceInput.prototype, "isDeleted", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserOrderByWithRelationAndSearchRelevanceInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserOrderByWithRelationAndSearchRelevanceInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => OrganizationOrderByWithRelationAndSearchRelevanceInput_1.OrganizationOrderByWithRelationAndSearchRelevanceInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", OrganizationOrderByWithRelationAndSearchRelevanceInput_1.OrganizationOrderByWithRelationAndSearchRelevanceInput)
], UserOrderByWithRelationAndSearchRelevanceInput.prototype, "organization", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserOrderByWithRelationAndSearchRelevanceInput.prototype, "organizationId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserOrderByRelevanceInput_1.UserOrderByRelevanceInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserOrderByRelevanceInput_1.UserOrderByRelevanceInput)
], UserOrderByWithRelationAndSearchRelevanceInput.prototype, "_relevance", void 0);
UserOrderByWithRelationAndSearchRelevanceInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserOrderByWithRelationAndSearchRelevanceInput", {
        isAbstract: true
    })
], UserOrderByWithRelationAndSearchRelevanceInput);
exports.UserOrderByWithRelationAndSearchRelevanceInput = UserOrderByWithRelationAndSearchRelevanceInput;
