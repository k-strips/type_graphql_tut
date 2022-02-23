"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateLandSizeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LandSizeOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/LandSizeOrderByWithRelationAndSearchRelevanceInput");
const LandSizeWhereInput_1 = require("../../../inputs/LandSizeWhereInput");
const LandSizeWhereUniqueInput_1 = require("../../../inputs/LandSizeWhereUniqueInput");
let AggregateLandSizeArgs = class AggregateLandSizeArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LandSizeWhereInput_1.LandSizeWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LandSizeWhereInput_1.LandSizeWhereInput)
], AggregateLandSizeArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [LandSizeOrderByWithRelationAndSearchRelevanceInput_1.LandSizeOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AggregateLandSizeArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LandSizeWhereUniqueInput_1.LandSizeWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LandSizeWhereUniqueInput_1.LandSizeWhereUniqueInput)
], AggregateLandSizeArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AggregateLandSizeArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AggregateLandSizeArgs.prototype, "skip", void 0);
AggregateLandSizeArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], AggregateLandSizeArgs);
exports.AggregateLandSizeArgs = AggregateLandSizeArgs;
