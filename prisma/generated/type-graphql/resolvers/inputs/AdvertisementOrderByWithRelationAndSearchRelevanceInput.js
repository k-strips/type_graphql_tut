"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdvertisementOrderByWithRelationAndSearchRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AdvertisementOrderByRelevanceInput_1 = require("../inputs/AdvertisementOrderByRelevanceInput");
const OrganizationOrderByWithRelationAndSearchRelevanceInput_1 = require("../inputs/OrganizationOrderByWithRelationAndSearchRelevanceInput");
const PriceOrderByWithRelationAndSearchRelevanceInput_1 = require("../inputs/PriceOrderByWithRelationAndSearchRelevanceInput");
const PropertyOrderByWithRelationAndSearchRelevanceInput_1 = require("../inputs/PropertyOrderByWithRelationAndSearchRelevanceInput");
const UserOrderByWithRelationAndSearchRelevanceInput_1 = require("../inputs/UserOrderByWithRelationAndSearchRelevanceInput");
const SortOrder_1 = require("../../enums/SortOrder");
let AdvertisementOrderByWithRelationAndSearchRelevanceInput = class AdvertisementOrderByWithRelationAndSearchRelevanceInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AdvertisementOrderByWithRelationAndSearchRelevanceInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PriceOrderByWithRelationAndSearchRelevanceInput_1.PriceOrderByWithRelationAndSearchRelevanceInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PriceOrderByWithRelationAndSearchRelevanceInput_1.PriceOrderByWithRelationAndSearchRelevanceInput)
], AdvertisementOrderByWithRelationAndSearchRelevanceInput.prototype, "price", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AdvertisementOrderByWithRelationAndSearchRelevanceInput.prototype, "isExpired", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AdvertisementOrderByWithRelationAndSearchRelevanceInput.prototype, "isPaused", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AdvertisementOrderByWithRelationAndSearchRelevanceInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AdvertisementOrderByWithRelationAndSearchRelevanceInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserOrderByWithRelationAndSearchRelevanceInput_1.UserOrderByWithRelationAndSearchRelevanceInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserOrderByWithRelationAndSearchRelevanceInput_1.UserOrderByWithRelationAndSearchRelevanceInput)
], AdvertisementOrderByWithRelationAndSearchRelevanceInput.prototype, "user", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AdvertisementOrderByWithRelationAndSearchRelevanceInput.prototype, "userId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => OrganizationOrderByWithRelationAndSearchRelevanceInput_1.OrganizationOrderByWithRelationAndSearchRelevanceInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", OrganizationOrderByWithRelationAndSearchRelevanceInput_1.OrganizationOrderByWithRelationAndSearchRelevanceInput)
], AdvertisementOrderByWithRelationAndSearchRelevanceInput.prototype, "organization", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AdvertisementOrderByWithRelationAndSearchRelevanceInput.prototype, "organizationId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyOrderByWithRelationAndSearchRelevanceInput_1.PropertyOrderByWithRelationAndSearchRelevanceInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyOrderByWithRelationAndSearchRelevanceInput_1.PropertyOrderByWithRelationAndSearchRelevanceInput)
], AdvertisementOrderByWithRelationAndSearchRelevanceInput.prototype, "property", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AdvertisementOrderByWithRelationAndSearchRelevanceInput.prototype, "propertyId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementOrderByRelevanceInput_1.AdvertisementOrderByRelevanceInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementOrderByRelevanceInput_1.AdvertisementOrderByRelevanceInput)
], AdvertisementOrderByWithRelationAndSearchRelevanceInput.prototype, "_relevance", void 0);
AdvertisementOrderByWithRelationAndSearchRelevanceInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AdvertisementOrderByWithRelationAndSearchRelevanceInput", {
        isAbstract: true
    })
], AdvertisementOrderByWithRelationAndSearchRelevanceInput);
exports.AdvertisementOrderByWithRelationAndSearchRelevanceInput = AdvertisementOrderByWithRelationAndSearchRelevanceInput;
