"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Property_RequestAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let Property_RequestAvgOrderByAggregateInput = class Property_RequestAvgOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Property_RequestAvgOrderByAggregateInput.prototype, "parkingCapacity", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Property_RequestAvgOrderByAggregateInput.prototype, "seating", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Property_RequestAvgOrderByAggregateInput.prototype, "bedrooms", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Property_RequestAvgOrderByAggregateInput.prototype, "bathrooms", void 0);
Property_RequestAvgOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("Property_RequestAvgOrderByAggregateInput", {
        isAbstract: true
    })
], Property_RequestAvgOrderByAggregateInput);
exports.Property_RequestAvgOrderByAggregateInput = Property_RequestAvgOrderByAggregateInput;
