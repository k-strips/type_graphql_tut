"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Property_RequestPriceRangeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PriceOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/PriceOrderByWithRelationAndSearchRelevanceInput");
const PriceWhereInput_1 = require("../../../inputs/PriceWhereInput");
const PriceWhereUniqueInput_1 = require("../../../inputs/PriceWhereUniqueInput");
const PriceScalarFieldEnum_1 = require("../../../../enums/PriceScalarFieldEnum");
let Property_RequestPriceRangeArgs = class Property_RequestPriceRangeArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PriceWhereInput_1.PriceWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PriceWhereInput_1.PriceWhereInput)
], Property_RequestPriceRangeArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PriceOrderByWithRelationAndSearchRelevanceInput_1.PriceOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], Property_RequestPriceRangeArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PriceWhereUniqueInput_1.PriceWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PriceWhereUniqueInput_1.PriceWhereUniqueInput)
], Property_RequestPriceRangeArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Property_RequestPriceRangeArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Property_RequestPriceRangeArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PriceScalarFieldEnum_1.PriceScalarFieldEnum], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], Property_RequestPriceRangeArgs.prototype, "distinct", void 0);
Property_RequestPriceRangeArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], Property_RequestPriceRangeArgs);
exports.Property_RequestPriceRangeArgs = Property_RequestPriceRangeArgs;
