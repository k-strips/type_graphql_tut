"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LandSizeMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let LandSizeMaxOrderByAggregateInput = class LandSizeMaxOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LandSizeMaxOrderByAggregateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LandSizeMaxOrderByAggregateInput.prototype, "measurement", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LandSizeMaxOrderByAggregateInput.prototype, "unit", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LandSizeMaxOrderByAggregateInput.prototype, "propertyId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LandSizeMaxOrderByAggregateInput.prototype, "property_RequestId", void 0);
LandSizeMaxOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LandSizeMaxOrderByAggregateInput", {
        isAbstract: true
    })
], LandSizeMaxOrderByAggregateInput);
exports.LandSizeMaxOrderByAggregateInput = LandSizeMaxOrderByAggregateInput;
