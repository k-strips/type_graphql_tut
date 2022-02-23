"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceOrderByWithRelationAndSearchRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AdvertisementOrderByWithRelationAndSearchRelevanceInput_1 = require("../inputs/AdvertisementOrderByWithRelationAndSearchRelevanceInput");
const PriceOrderByRelevanceInput_1 = require("../inputs/PriceOrderByRelevanceInput");
const PropertyOrderByWithRelationAndSearchRelevanceInput_1 = require("../inputs/PropertyOrderByWithRelationAndSearchRelevanceInput");
const Property_RequestOrderByWithRelationAndSearchRelevanceInput_1 = require("../inputs/Property_RequestOrderByWithRelationAndSearchRelevanceInput");
const SortOrder_1 = require("../../enums/SortOrder");
let PriceOrderByWithRelationAndSearchRelevanceInput = class PriceOrderByWithRelationAndSearchRelevanceInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PriceOrderByWithRelationAndSearchRelevanceInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PriceOrderByWithRelationAndSearchRelevanceInput.prototype, "figure", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PriceOrderByWithRelationAndSearchRelevanceInput.prototype, "currency", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PriceOrderByWithRelationAndSearchRelevanceInput.prototype, "duration", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyOrderByWithRelationAndSearchRelevanceInput_1.PropertyOrderByWithRelationAndSearchRelevanceInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyOrderByWithRelationAndSearchRelevanceInput_1.PropertyOrderByWithRelationAndSearchRelevanceInput)
], PriceOrderByWithRelationAndSearchRelevanceInput.prototype, "Property", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PriceOrderByWithRelationAndSearchRelevanceInput.prototype, "propertyId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementOrderByWithRelationAndSearchRelevanceInput_1.AdvertisementOrderByWithRelationAndSearchRelevanceInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementOrderByWithRelationAndSearchRelevanceInput_1.AdvertisementOrderByWithRelationAndSearchRelevanceInput)
], PriceOrderByWithRelationAndSearchRelevanceInput.prototype, "advertisement", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PriceOrderByWithRelationAndSearchRelevanceInput.prototype, "advertisementId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestOrderByWithRelationAndSearchRelevanceInput_1.Property_RequestOrderByWithRelationAndSearchRelevanceInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestOrderByWithRelationAndSearchRelevanceInput_1.Property_RequestOrderByWithRelationAndSearchRelevanceInput)
], PriceOrderByWithRelationAndSearchRelevanceInput.prototype, "Property_Request", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PriceOrderByWithRelationAndSearchRelevanceInput.prototype, "property_RequestId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PriceOrderByRelevanceInput_1.PriceOrderByRelevanceInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PriceOrderByRelevanceInput_1.PriceOrderByRelevanceInput)
], PriceOrderByWithRelationAndSearchRelevanceInput.prototype, "_relevance", void 0);
PriceOrderByWithRelationAndSearchRelevanceInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PriceOrderByWithRelationAndSearchRelevanceInput", {
        isAbstract: true
    })
], PriceOrderByWithRelationAndSearchRelevanceInput);
exports.PriceOrderByWithRelationAndSearchRelevanceInput = PriceOrderByWithRelationAndSearchRelevanceInput;
