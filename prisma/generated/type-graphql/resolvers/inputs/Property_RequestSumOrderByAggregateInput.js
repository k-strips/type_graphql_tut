"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Property_RequestSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let Property_RequestSumOrderByAggregateInput = class Property_RequestSumOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Property_RequestSumOrderByAggregateInput.prototype, "parkingCapacity", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Property_RequestSumOrderByAggregateInput.prototype, "seating", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Property_RequestSumOrderByAggregateInput.prototype, "bedrooms", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Property_RequestSumOrderByAggregateInput.prototype, "bathrooms", void 0);
Property_RequestSumOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("Property_RequestSumOrderByAggregateInput", {
        isAbstract: true
    })
], Property_RequestSumOrderByAggregateInput);
exports.Property_RequestSumOrderByAggregateInput = Property_RequestSumOrderByAggregateInput;
