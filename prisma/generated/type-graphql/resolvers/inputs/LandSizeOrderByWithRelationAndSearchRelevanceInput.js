"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LandSizeOrderByWithRelationAndSearchRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LandSizeOrderByRelevanceInput_1 = require("../inputs/LandSizeOrderByRelevanceInput");
const PropertyOrderByWithRelationAndSearchRelevanceInput_1 = require("../inputs/PropertyOrderByWithRelationAndSearchRelevanceInput");
const Property_RequestOrderByWithRelationAndSearchRelevanceInput_1 = require("../inputs/Property_RequestOrderByWithRelationAndSearchRelevanceInput");
const SortOrder_1 = require("../../enums/SortOrder");
let LandSizeOrderByWithRelationAndSearchRelevanceInput = class LandSizeOrderByWithRelationAndSearchRelevanceInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LandSizeOrderByWithRelationAndSearchRelevanceInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LandSizeOrderByWithRelationAndSearchRelevanceInput.prototype, "measurement", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LandSizeOrderByWithRelationAndSearchRelevanceInput.prototype, "unit", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyOrderByWithRelationAndSearchRelevanceInput_1.PropertyOrderByWithRelationAndSearchRelevanceInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyOrderByWithRelationAndSearchRelevanceInput_1.PropertyOrderByWithRelationAndSearchRelevanceInput)
], LandSizeOrderByWithRelationAndSearchRelevanceInput.prototype, "Property", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LandSizeOrderByWithRelationAndSearchRelevanceInput.prototype, "propertyId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestOrderByWithRelationAndSearchRelevanceInput_1.Property_RequestOrderByWithRelationAndSearchRelevanceInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestOrderByWithRelationAndSearchRelevanceInput_1.Property_RequestOrderByWithRelationAndSearchRelevanceInput)
], LandSizeOrderByWithRelationAndSearchRelevanceInput.prototype, "Property_Request", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LandSizeOrderByWithRelationAndSearchRelevanceInput.prototype, "property_RequestId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LandSizeOrderByRelevanceInput_1.LandSizeOrderByRelevanceInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LandSizeOrderByRelevanceInput_1.LandSizeOrderByRelevanceInput)
], LandSizeOrderByWithRelationAndSearchRelevanceInput.prototype, "_relevance", void 0);
LandSizeOrderByWithRelationAndSearchRelevanceInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LandSizeOrderByWithRelationAndSearchRelevanceInput", {
        isAbstract: true
    })
], LandSizeOrderByWithRelationAndSearchRelevanceInput);
exports.LandSizeOrderByWithRelationAndSearchRelevanceInput = LandSizeOrderByWithRelationAndSearchRelevanceInput;
