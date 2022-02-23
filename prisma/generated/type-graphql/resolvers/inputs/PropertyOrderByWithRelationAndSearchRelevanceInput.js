"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyOrderByWithRelationAndSearchRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AdvertisementOrderByRelationAggregateInput_1 = require("../inputs/AdvertisementOrderByRelationAggregateInput");
const LandSizeOrderByWithRelationAndSearchRelevanceInput_1 = require("../inputs/LandSizeOrderByWithRelationAndSearchRelevanceInput");
const OrganizationOrderByWithRelationAndSearchRelevanceInput_1 = require("../inputs/OrganizationOrderByWithRelationAndSearchRelevanceInput");
const PriceOrderByWithRelationAndSearchRelevanceInput_1 = require("../inputs/PriceOrderByWithRelationAndSearchRelevanceInput");
const PropertyOrderByRelevanceInput_1 = require("../inputs/PropertyOrderByRelevanceInput");
const SaveOrderByRelationAggregateInput_1 = require("../inputs/SaveOrderByRelationAggregateInput");
const UserOrderByWithRelationAndSearchRelevanceInput_1 = require("../inputs/UserOrderByWithRelationAndSearchRelevanceInput");
const SortOrder_1 = require("../../enums/SortOrder");
let PropertyOrderByWithRelationAndSearchRelevanceInput = class PropertyOrderByWithRelationAndSearchRelevanceInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PropertyOrderByWithRelationAndSearchRelevanceInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PropertyOrderByWithRelationAndSearchRelevanceInput.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PropertyOrderByWithRelationAndSearchRelevanceInput.prototype, "acquisition", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PropertyOrderByWithRelationAndSearchRelevanceInput.prototype, "state", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LandSizeOrderByWithRelationAndSearchRelevanceInput_1.LandSizeOrderByWithRelationAndSearchRelevanceInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LandSizeOrderByWithRelationAndSearchRelevanceInput_1.LandSizeOrderByWithRelationAndSearchRelevanceInput)
], PropertyOrderByWithRelationAndSearchRelevanceInput.prototype, "size", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PriceOrderByWithRelationAndSearchRelevanceInput_1.PriceOrderByWithRelationAndSearchRelevanceInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PriceOrderByWithRelationAndSearchRelevanceInput_1.PriceOrderByWithRelationAndSearchRelevanceInput)
], PropertyOrderByWithRelationAndSearchRelevanceInput.prototype, "price", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PropertyOrderByWithRelationAndSearchRelevanceInput.prototype, "images", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PropertyOrderByWithRelationAndSearchRelevanceInput.prototype, "amenities", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PropertyOrderByWithRelationAndSearchRelevanceInput.prototype, "parkingCapacity", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PropertyOrderByWithRelationAndSearchRelevanceInput.prototype, "seating", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PropertyOrderByWithRelationAndSearchRelevanceInput.prototype, "bedrooms", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PropertyOrderByWithRelationAndSearchRelevanceInput.prototype, "bathrooms", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PropertyOrderByWithRelationAndSearchRelevanceInput.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PropertyOrderByWithRelationAndSearchRelevanceInput.prototype, "views", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SaveOrderByRelationAggregateInput_1.SaveOrderByRelationAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SaveOrderByRelationAggregateInput_1.SaveOrderByRelationAggregateInput)
], PropertyOrderByWithRelationAndSearchRelevanceInput.prototype, "likes", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PropertyOrderByWithRelationAndSearchRelevanceInput.prototype, "source", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PropertyOrderByWithRelationAndSearchRelevanceInput.prototype, "region", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PropertyOrderByWithRelationAndSearchRelevanceInput.prototype, "city", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PropertyOrderByWithRelationAndSearchRelevanceInput.prototype, "town", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PropertyOrderByWithRelationAndSearchRelevanceInput.prototype, "streetName", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PropertyOrderByWithRelationAndSearchRelevanceInput.prototype, "digitalAddress", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PropertyOrderByWithRelationAndSearchRelevanceInput.prototype, "locationDesc", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PropertyOrderByWithRelationAndSearchRelevanceInput.prototype, "lat", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PropertyOrderByWithRelationAndSearchRelevanceInput.prototype, "lon", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PropertyOrderByWithRelationAndSearchRelevanceInput.prototype, "isDeleted", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PropertyOrderByWithRelationAndSearchRelevanceInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PropertyOrderByWithRelationAndSearchRelevanceInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserOrderByWithRelationAndSearchRelevanceInput_1.UserOrderByWithRelationAndSearchRelevanceInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserOrderByWithRelationAndSearchRelevanceInput_1.UserOrderByWithRelationAndSearchRelevanceInput)
], PropertyOrderByWithRelationAndSearchRelevanceInput.prototype, "owner", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => OrganizationOrderByWithRelationAndSearchRelevanceInput_1.OrganizationOrderByWithRelationAndSearchRelevanceInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", OrganizationOrderByWithRelationAndSearchRelevanceInput_1.OrganizationOrderByWithRelationAndSearchRelevanceInput)
], PropertyOrderByWithRelationAndSearchRelevanceInput.prototype, "organization", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PropertyOrderByWithRelationAndSearchRelevanceInput.prototype, "organizationId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PropertyOrderByWithRelationAndSearchRelevanceInput.prototype, "userId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementOrderByRelationAggregateInput_1.AdvertisementOrderByRelationAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementOrderByRelationAggregateInput_1.AdvertisementOrderByRelationAggregateInput)
], PropertyOrderByWithRelationAndSearchRelevanceInput.prototype, "advertisement", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyOrderByRelevanceInput_1.PropertyOrderByRelevanceInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyOrderByRelevanceInput_1.PropertyOrderByRelevanceInput)
], PropertyOrderByWithRelationAndSearchRelevanceInput.prototype, "_relevance", void 0);
PropertyOrderByWithRelationAndSearchRelevanceInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PropertyOrderByWithRelationAndSearchRelevanceInput", {
        isAbstract: true
    })
], PropertyOrderByWithRelationAndSearchRelevanceInput);
exports.PropertyOrderByWithRelationAndSearchRelevanceInput = PropertyOrderByWithRelationAndSearchRelevanceInput;
