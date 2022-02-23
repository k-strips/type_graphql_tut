"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let PriceMaxOrderByAggregateInput = class PriceMaxOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PriceMaxOrderByAggregateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PriceMaxOrderByAggregateInput.prototype, "figure", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PriceMaxOrderByAggregateInput.prototype, "currency", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PriceMaxOrderByAggregateInput.prototype, "duration", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PriceMaxOrderByAggregateInput.prototype, "propertyId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PriceMaxOrderByAggregateInput.prototype, "advertisementId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PriceMaxOrderByAggregateInput.prototype, "property_RequestId", void 0);
PriceMaxOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PriceMaxOrderByAggregateInput", {
        isAbstract: true
    })
], PriceMaxOrderByAggregateInput);
exports.PriceMaxOrderByAggregateInput = PriceMaxOrderByAggregateInput;
