"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LandSizeOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LandSizeAvgOrderByAggregateInput_1 = require("../inputs/LandSizeAvgOrderByAggregateInput");
const LandSizeCountOrderByAggregateInput_1 = require("../inputs/LandSizeCountOrderByAggregateInput");
const LandSizeMaxOrderByAggregateInput_1 = require("../inputs/LandSizeMaxOrderByAggregateInput");
const LandSizeMinOrderByAggregateInput_1 = require("../inputs/LandSizeMinOrderByAggregateInput");
const LandSizeSumOrderByAggregateInput_1 = require("../inputs/LandSizeSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let LandSizeOrderByWithAggregationInput = class LandSizeOrderByWithAggregationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LandSizeOrderByWithAggregationInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LandSizeOrderByWithAggregationInput.prototype, "measurement", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LandSizeOrderByWithAggregationInput.prototype, "unit", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LandSizeOrderByWithAggregationInput.prototype, "propertyId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LandSizeOrderByWithAggregationInput.prototype, "property_RequestId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LandSizeCountOrderByAggregateInput_1.LandSizeCountOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LandSizeCountOrderByAggregateInput_1.LandSizeCountOrderByAggregateInput)
], LandSizeOrderByWithAggregationInput.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LandSizeAvgOrderByAggregateInput_1.LandSizeAvgOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LandSizeAvgOrderByAggregateInput_1.LandSizeAvgOrderByAggregateInput)
], LandSizeOrderByWithAggregationInput.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LandSizeMaxOrderByAggregateInput_1.LandSizeMaxOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LandSizeMaxOrderByAggregateInput_1.LandSizeMaxOrderByAggregateInput)
], LandSizeOrderByWithAggregationInput.prototype, "_max", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LandSizeMinOrderByAggregateInput_1.LandSizeMinOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LandSizeMinOrderByAggregateInput_1.LandSizeMinOrderByAggregateInput)
], LandSizeOrderByWithAggregationInput.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LandSizeSumOrderByAggregateInput_1.LandSizeSumOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LandSizeSumOrderByAggregateInput_1.LandSizeSumOrderByAggregateInput)
], LandSizeOrderByWithAggregationInput.prototype, "_sum", void 0);
LandSizeOrderByWithAggregationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LandSizeOrderByWithAggregationInput", {
        isAbstract: true
    })
], LandSizeOrderByWithAggregationInput);
exports.LandSizeOrderByWithAggregationInput = LandSizeOrderByWithAggregationInput;
