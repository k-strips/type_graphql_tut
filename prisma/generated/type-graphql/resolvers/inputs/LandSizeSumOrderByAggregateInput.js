"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LandSizeSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let LandSizeSumOrderByAggregateInput = class LandSizeSumOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LandSizeSumOrderByAggregateInput.prototype, "measurement", void 0);
LandSizeSumOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LandSizeSumOrderByAggregateInput", {
        isAbstract: true
    })
], LandSizeSumOrderByAggregateInput);
exports.LandSizeSumOrderByAggregateInput = LandSizeSumOrderByAggregateInput;
