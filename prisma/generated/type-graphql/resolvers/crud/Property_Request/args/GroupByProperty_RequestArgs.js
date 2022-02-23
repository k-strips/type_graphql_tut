"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByProperty_RequestArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Property_RequestOrderByWithAggregationInput_1 = require("../../../inputs/Property_RequestOrderByWithAggregationInput");
const Property_RequestScalarWhereWithAggregatesInput_1 = require("../../../inputs/Property_RequestScalarWhereWithAggregatesInput");
const Property_RequestWhereInput_1 = require("../../../inputs/Property_RequestWhereInput");
const Property_RequestScalarFieldEnum_1 = require("../../../../enums/Property_RequestScalarFieldEnum");
let GroupByProperty_RequestArgs = class GroupByProperty_RequestArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestWhereInput_1.Property_RequestWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestWhereInput_1.Property_RequestWhereInput)
], GroupByProperty_RequestArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Property_RequestOrderByWithAggregationInput_1.Property_RequestOrderByWithAggregationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], GroupByProperty_RequestArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Property_RequestScalarFieldEnum_1.Property_RequestScalarFieldEnum], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], GroupByProperty_RequestArgs.prototype, "by", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestScalarWhereWithAggregatesInput_1.Property_RequestScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestScalarWhereWithAggregatesInput_1.Property_RequestScalarWhereWithAggregatesInput)
], GroupByProperty_RequestArgs.prototype, "having", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GroupByProperty_RequestArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GroupByProperty_RequestArgs.prototype, "skip", void 0);
GroupByProperty_RequestArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], GroupByProperty_RequestArgs);
exports.GroupByProperty_RequestArgs = GroupByProperty_RequestArgs;
