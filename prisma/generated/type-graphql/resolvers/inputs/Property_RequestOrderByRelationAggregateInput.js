"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Property_RequestOrderByRelationAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let Property_RequestOrderByRelationAggregateInput = class Property_RequestOrderByRelationAggregateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Property_RequestOrderByRelationAggregateInput.prototype, "_count", void 0);
Property_RequestOrderByRelationAggregateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("Property_RequestOrderByRelationAggregateInput", {
        isAbstract: true
    })
], Property_RequestOrderByRelationAggregateInput);
exports.Property_RequestOrderByRelationAggregateInput = Property_RequestOrderByRelationAggregateInput;
