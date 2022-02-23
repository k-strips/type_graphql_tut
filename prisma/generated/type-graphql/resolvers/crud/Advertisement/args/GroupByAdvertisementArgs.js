"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByAdvertisementArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AdvertisementOrderByWithAggregationInput_1 = require("../../../inputs/AdvertisementOrderByWithAggregationInput");
const AdvertisementScalarWhereWithAggregatesInput_1 = require("../../../inputs/AdvertisementScalarWhereWithAggregatesInput");
const AdvertisementWhereInput_1 = require("../../../inputs/AdvertisementWhereInput");
const AdvertisementScalarFieldEnum_1 = require("../../../../enums/AdvertisementScalarFieldEnum");
let GroupByAdvertisementArgs = class GroupByAdvertisementArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementWhereInput_1.AdvertisementWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementWhereInput_1.AdvertisementWhereInput)
], GroupByAdvertisementArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AdvertisementOrderByWithAggregationInput_1.AdvertisementOrderByWithAggregationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], GroupByAdvertisementArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AdvertisementScalarFieldEnum_1.AdvertisementScalarFieldEnum], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], GroupByAdvertisementArgs.prototype, "by", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementScalarWhereWithAggregatesInput_1.AdvertisementScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementScalarWhereWithAggregatesInput_1.AdvertisementScalarWhereWithAggregatesInput)
], GroupByAdvertisementArgs.prototype, "having", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GroupByAdvertisementArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GroupByAdvertisementArgs.prototype, "skip", void 0);
GroupByAdvertisementArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], GroupByAdvertisementArgs);
exports.GroupByAdvertisementArgs = GroupByAdvertisementArgs;
