"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateSaveArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SaveOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/SaveOrderByWithRelationAndSearchRelevanceInput");
const SaveWhereInput_1 = require("../../../inputs/SaveWhereInput");
const SaveWhereUniqueInput_1 = require("../../../inputs/SaveWhereUniqueInput");
let AggregateSaveArgs = class AggregateSaveArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SaveWhereInput_1.SaveWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SaveWhereInput_1.SaveWhereInput)
], AggregateSaveArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [SaveOrderByWithRelationAndSearchRelevanceInput_1.SaveOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AggregateSaveArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SaveWhereUniqueInput_1.SaveWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SaveWhereUniqueInput_1.SaveWhereUniqueInput)
], AggregateSaveArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AggregateSaveArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AggregateSaveArgs.prototype, "skip", void 0);
AggregateSaveArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], AggregateSaveArgs);
exports.AggregateSaveArgs = AggregateSaveArgs;
