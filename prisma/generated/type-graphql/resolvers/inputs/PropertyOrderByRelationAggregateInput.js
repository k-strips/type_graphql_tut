"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyOrderByRelationAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let PropertyOrderByRelationAggregateInput = class PropertyOrderByRelationAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PropertyOrderByRelationAggregateInput.prototype, "_count", void 0);
PropertyOrderByRelationAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PropertyOrderByRelationAggregateInput", {
        isAbstract: true
    })
], PropertyOrderByRelationAggregateInput);
exports.PropertyOrderByRelationAggregateInput = PropertyOrderByRelationAggregateInput;
