"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SaveCountOrderByAggregateInput_1 = require("../inputs/SaveCountOrderByAggregateInput");
const SaveMaxOrderByAggregateInput_1 = require("../inputs/SaveMaxOrderByAggregateInput");
const SaveMinOrderByAggregateInput_1 = require("../inputs/SaveMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let SaveOrderByWithAggregationInput = class SaveOrderByWithAggregationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SaveOrderByWithAggregationInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SaveOrderByWithAggregationInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SaveOrderByWithAggregationInput.prototype, "userId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SaveOrderByWithAggregationInput.prototype, "propertyId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SaveCountOrderByAggregateInput_1.SaveCountOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SaveCountOrderByAggregateInput_1.SaveCountOrderByAggregateInput)
], SaveOrderByWithAggregationInput.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SaveMaxOrderByAggregateInput_1.SaveMaxOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SaveMaxOrderByAggregateInput_1.SaveMaxOrderByAggregateInput)
], SaveOrderByWithAggregationInput.prototype, "_max", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SaveMinOrderByAggregateInput_1.SaveMinOrderByAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SaveMinOrderByAggregateInput_1.SaveMinOrderByAggregateInput)
], SaveOrderByWithAggregationInput.prototype, "_min", void 0);
SaveOrderByWithAggregationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("SaveOrderByWithAggregationInput", {
        isAbstract: true
    })
], SaveOrderByWithAggregationInput);
exports.SaveOrderByWithAggregationInput = SaveOrderByWithAggregationInput;
