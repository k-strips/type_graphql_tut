"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstPriceArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PriceOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/PriceOrderByWithRelationAndSearchRelevanceInput");
const PriceWhereInput_1 = require("../../../inputs/PriceWhereInput");
const PriceWhereUniqueInput_1 = require("../../../inputs/PriceWhereUniqueInput");
const PriceScalarFieldEnum_1 = require("../../../../enums/PriceScalarFieldEnum");
let FindFirstPriceArgs = class FindFirstPriceArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PriceWhereInput_1.PriceWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PriceWhereInput_1.PriceWhereInput)
], FindFirstPriceArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PriceOrderByWithRelationAndSearchRelevanceInput_1.PriceOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindFirstPriceArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PriceWhereUniqueInput_1.PriceWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PriceWhereUniqueInput_1.PriceWhereUniqueInput)
], FindFirstPriceArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindFirstPriceArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindFirstPriceArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PriceScalarFieldEnum_1.PriceScalarFieldEnum], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindFirstPriceArgs.prototype, "distinct", void 0);
FindFirstPriceArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], FindFirstPriceArgs);
exports.FindFirstPriceArgs = FindFirstPriceArgs;
