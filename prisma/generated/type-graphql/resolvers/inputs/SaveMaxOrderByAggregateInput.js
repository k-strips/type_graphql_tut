"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let SaveMaxOrderByAggregateInput = class SaveMaxOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SaveMaxOrderByAggregateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SaveMaxOrderByAggregateInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SaveMaxOrderByAggregateInput.prototype, "userId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SaveMaxOrderByAggregateInput.prototype, "propertyId", void 0);
SaveMaxOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("SaveMaxOrderByAggregateInput", {
        isAbstract: true
    })
], SaveMaxOrderByAggregateInput);
exports.SaveMaxOrderByAggregateInput = SaveMaxOrderByAggregateInput;
