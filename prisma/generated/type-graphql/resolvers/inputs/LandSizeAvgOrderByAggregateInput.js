"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LandSizeAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let LandSizeAvgOrderByAggregateInput = class LandSizeAvgOrderByAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LandSizeAvgOrderByAggregateInput.prototype, "measurement", void 0);
LandSizeAvgOrderByAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LandSizeAvgOrderByAggregateInput", {
        isAbstract: true
    })
], LandSizeAvgOrderByAggregateInput);
exports.LandSizeAvgOrderByAggregateInput = LandSizeAvgOrderByAggregateInput;
