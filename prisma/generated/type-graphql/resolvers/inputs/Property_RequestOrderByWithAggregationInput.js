"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Property_RequestOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Property_RequestAvgOrderByAggregateInput_1 = require("../inputs/Property_RequestAvgOrderByAggregateInput");
const Property_RequestCountOrderByAggregateInput_1 = require("../inputs/Property_RequestCountOrderByAggregateInput");
const Property_RequestMaxOrderByAggregateInput_1 = require("../inputs/Property_RequestMaxOrderByAggregateInput");
const Property_RequestMinOrderByAggregateInput_1 = require("../inputs/Property_RequestMinOrderByAggregateInput");
const Property_RequestSumOrderByAggregateInput_1 = require("../inputs/Property_RequestSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let Property_RequestOrderByWithAggregationInput = class Property_RequestOrderByWithAggregationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Property_RequestOrderByWithAggregationInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Property_RequestOrderByWithAggregationInput.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Property_RequestOrderByWithAggregationInput.prototype, "acquisition", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Property_RequestOrderByWithAggregationInput.prototype, "state", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Property_RequestOrderByWithAggregationInput.prototype, "amenities", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Property_RequestOrderByWithAggregationInput.prototype, "parkingCapacity", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Property_RequestOrderByWithAggregationInput.prototype, "seating", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Property_RequestOrderByWithAggregationInput.prototype, "bedrooms", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Property_RequestOrderByWithAggregationInput.prototype, "bathrooms", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Property_RequestOrderByWithAggregationInput.prototype, "additionalInfo", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Property_RequestOrderByWithAggregationInput.prototype, "region", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Property_RequestOrderByWithAggregationInput.prototype, "city", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Property_RequestOrderByWithAggregationInput.prototype, "town", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Property_RequestOrderByWithAggregationInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Property_RequestOrderByWithAggregationInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Property_RequestOrderByWithAggregationInput.prototype, "userId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestCountOrderByAggregateInput_1.Property_RequestCountOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestCountOrderByAggregateInput_1.Property_RequestCountOrderByAggregateInput)
], Property_RequestOrderByWithAggregationInput.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestAvgOrderByAggregateInput_1.Property_RequestAvgOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestAvgOrderByAggregateInput_1.Property_RequestAvgOrderByAggregateInput)
], Property_RequestOrderByWithAggregationInput.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestMaxOrderByAggregateInput_1.Property_RequestMaxOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestMaxOrderByAggregateInput_1.Property_RequestMaxOrderByAggregateInput)
], Property_RequestOrderByWithAggregationInput.prototype, "_max", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestMinOrderByAggregateInput_1.Property_RequestMinOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestMinOrderByAggregateInput_1.Property_RequestMinOrderByAggregateInput)
], Property_RequestOrderByWithAggregationInput.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestSumOrderByAggregateInput_1.Property_RequestSumOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestSumOrderByAggregateInput_1.Property_RequestSumOrderByAggregateInput)
], Property_RequestOrderByWithAggregationInput.prototype, "_sum", void 0);
Property_RequestOrderByWithAggregationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("Property_RequestOrderByWithAggregationInput", {
        isAbstract: true
    })
], Property_RequestOrderByWithAggregationInput);
exports.Property_RequestOrderByWithAggregationInput = Property_RequestOrderByWithAggregationInput;
