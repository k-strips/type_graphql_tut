"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByLandSizeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LandSizeOrderByWithAggregationInput_1 = require("../../../inputs/LandSizeOrderByWithAggregationInput");
const LandSizeScalarWhereWithAggregatesInput_1 = require("../../../inputs/LandSizeScalarWhereWithAggregatesInput");
const LandSizeWhereInput_1 = require("../../../inputs/LandSizeWhereInput");
const LandSizeScalarFieldEnum_1 = require("../../../../enums/LandSizeScalarFieldEnum");
let GroupByLandSizeArgs = class GroupByLandSizeArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LandSizeWhereInput_1.LandSizeWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LandSizeWhereInput_1.LandSizeWhereInput)
], GroupByLandSizeArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [LandSizeOrderByWithAggregationInput_1.LandSizeOrderByWithAggregationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], GroupByLandSizeArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [LandSizeScalarFieldEnum_1.LandSizeScalarFieldEnum], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], GroupByLandSizeArgs.prototype, "by", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LandSizeScalarWhereWithAggregatesInput_1.LandSizeScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LandSizeScalarWhereWithAggregatesInput_1.LandSizeScalarWhereWithAggregatesInput)
], GroupByLandSizeArgs.prototype, "having", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GroupByLandSizeArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GroupByLandSizeArgs.prototype, "skip", void 0);
GroupByLandSizeArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], GroupByLandSizeArgs);
exports.GroupByLandSizeArgs = GroupByLandSizeArgs;
