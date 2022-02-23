"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PriceWhereInput_1 = require("../inputs/PriceWhereInput");
let PriceRelationFilter = class PriceRelationFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PriceWhereInput_1.PriceWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PriceWhereInput_1.PriceWhereInput)
], PriceRelationFilter.prototype, "is", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PriceWhereInput_1.PriceWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PriceWhereInput_1.PriceWhereInput)
], PriceRelationFilter.prototype, "isNot", void 0);
PriceRelationFilter = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PriceRelationFilter", {
        isAbstract: true
    })
], PriceRelationFilter);
exports.PriceRelationFilter = PriceRelationFilter;
