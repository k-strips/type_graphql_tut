"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByPropertyArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PropertyOrderByWithAggregationInput_1 = require("../../../inputs/PropertyOrderByWithAggregationInput");
const PropertyScalarWhereWithAggregatesInput_1 = require("../../../inputs/PropertyScalarWhereWithAggregatesInput");
const PropertyWhereInput_1 = require("../../../inputs/PropertyWhereInput");
const PropertyScalarFieldEnum_1 = require("../../../../enums/PropertyScalarFieldEnum");
let GroupByPropertyArgs = class GroupByPropertyArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyWhereInput_1.PropertyWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyWhereInput_1.PropertyWhereInput)
], GroupByPropertyArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PropertyOrderByWithAggregationInput_1.PropertyOrderByWithAggregationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], GroupByPropertyArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PropertyScalarFieldEnum_1.PropertyScalarFieldEnum], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], GroupByPropertyArgs.prototype, "by", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyScalarWhereWithAggregatesInput_1.PropertyScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyScalarWhereWithAggregatesInput_1.PropertyScalarWhereWithAggregatesInput)
], GroupByPropertyArgs.prototype, "having", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GroupByPropertyArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GroupByPropertyArgs.prototype, "skip", void 0);
GroupByPropertyArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], GroupByPropertyArgs);
exports.GroupByPropertyArgs = GroupByPropertyArgs;
