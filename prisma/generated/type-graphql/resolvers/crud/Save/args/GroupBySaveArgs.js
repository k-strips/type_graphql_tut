"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupBySaveArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SaveOrderByWithAggregationInput_1 = require("../../../inputs/SaveOrderByWithAggregationInput");
const SaveScalarWhereWithAggregatesInput_1 = require("../../../inputs/SaveScalarWhereWithAggregatesInput");
const SaveWhereInput_1 = require("../../../inputs/SaveWhereInput");
const SaveScalarFieldEnum_1 = require("../../../../enums/SaveScalarFieldEnum");
let GroupBySaveArgs = class GroupBySaveArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SaveWhereInput_1.SaveWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SaveWhereInput_1.SaveWhereInput)
], GroupBySaveArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [SaveOrderByWithAggregationInput_1.SaveOrderByWithAggregationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], GroupBySaveArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [SaveScalarFieldEnum_1.SaveScalarFieldEnum], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], GroupBySaveArgs.prototype, "by", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SaveScalarWhereWithAggregatesInput_1.SaveScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SaveScalarWhereWithAggregatesInput_1.SaveScalarWhereWithAggregatesInput)
], GroupBySaveArgs.prototype, "having", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GroupBySaveArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GroupBySaveArgs.prototype, "skip", void 0);
GroupBySaveArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], GroupBySaveArgs);
exports.GroupBySaveArgs = GroupBySaveArgs;
