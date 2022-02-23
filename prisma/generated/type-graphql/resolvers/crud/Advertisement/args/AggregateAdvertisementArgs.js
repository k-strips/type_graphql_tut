"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateAdvertisementArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AdvertisementOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/AdvertisementOrderByWithRelationAndSearchRelevanceInput");
const AdvertisementWhereInput_1 = require("../../../inputs/AdvertisementWhereInput");
const AdvertisementWhereUniqueInput_1 = require("../../../inputs/AdvertisementWhereUniqueInput");
let AggregateAdvertisementArgs = class AggregateAdvertisementArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementWhereInput_1.AdvertisementWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementWhereInput_1.AdvertisementWhereInput)
], AggregateAdvertisementArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AdvertisementOrderByWithRelationAndSearchRelevanceInput_1.AdvertisementOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AggregateAdvertisementArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementWhereUniqueInput_1.AdvertisementWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementWhereUniqueInput_1.AdvertisementWhereUniqueInput)
], AggregateAdvertisementArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AggregateAdvertisementArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AggregateAdvertisementArgs.prototype, "skip", void 0);
AggregateAdvertisementArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], AggregateAdvertisementArgs);
exports.AggregateAdvertisementArgs = AggregateAdvertisementArgs;
