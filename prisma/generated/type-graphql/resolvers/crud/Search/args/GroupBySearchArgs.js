"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupBySearchArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SearchOrderByWithAggregationInput_1 = require("../../../inputs/SearchOrderByWithAggregationInput");
const SearchScalarWhereWithAggregatesInput_1 = require("../../../inputs/SearchScalarWhereWithAggregatesInput");
const SearchWhereInput_1 = require("../../../inputs/SearchWhereInput");
const SearchScalarFieldEnum_1 = require("../../../../enums/SearchScalarFieldEnum");
let GroupBySearchArgs = class GroupBySearchArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SearchWhereInput_1.SearchWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SearchWhereInput_1.SearchWhereInput)
], GroupBySearchArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [SearchOrderByWithAggregationInput_1.SearchOrderByWithAggregationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], GroupBySearchArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [SearchScalarFieldEnum_1.SearchScalarFieldEnum], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], GroupBySearchArgs.prototype, "by", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SearchScalarWhereWithAggregatesInput_1.SearchScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SearchScalarWhereWithAggregatesInput_1.SearchScalarWhereWithAggregatesInput)
], GroupBySearchArgs.prototype, "having", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GroupBySearchArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GroupBySearchArgs.prototype, "skip", void 0);
GroupBySearchArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], GroupBySearchArgs);
exports.GroupBySearchArgs = GroupBySearchArgs;
