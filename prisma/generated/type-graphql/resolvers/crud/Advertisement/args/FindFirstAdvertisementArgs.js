"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstAdvertisementArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AdvertisementOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/AdvertisementOrderByWithRelationAndSearchRelevanceInput");
const AdvertisementWhereInput_1 = require("../../../inputs/AdvertisementWhereInput");
const AdvertisementWhereUniqueInput_1 = require("../../../inputs/AdvertisementWhereUniqueInput");
const AdvertisementScalarFieldEnum_1 = require("../../../../enums/AdvertisementScalarFieldEnum");
let FindFirstAdvertisementArgs = class FindFirstAdvertisementArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementWhereInput_1.AdvertisementWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementWhereInput_1.AdvertisementWhereInput)
], FindFirstAdvertisementArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AdvertisementOrderByWithRelationAndSearchRelevanceInput_1.AdvertisementOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindFirstAdvertisementArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementWhereUniqueInput_1.AdvertisementWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementWhereUniqueInput_1.AdvertisementWhereUniqueInput)
], FindFirstAdvertisementArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindFirstAdvertisementArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindFirstAdvertisementArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AdvertisementScalarFieldEnum_1.AdvertisementScalarFieldEnum], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindFirstAdvertisementArgs.prototype, "distinct", void 0);
FindFirstAdvertisementArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], FindFirstAdvertisementArgs);
exports.FindFirstAdvertisementArgs = FindFirstAdvertisementArgs;
