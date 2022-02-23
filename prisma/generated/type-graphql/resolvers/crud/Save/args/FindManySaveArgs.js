"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManySaveArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SaveOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/SaveOrderByWithRelationAndSearchRelevanceInput");
const SaveWhereInput_1 = require("../../../inputs/SaveWhereInput");
const SaveWhereUniqueInput_1 = require("../../../inputs/SaveWhereUniqueInput");
const SaveScalarFieldEnum_1 = require("../../../../enums/SaveScalarFieldEnum");
let FindManySaveArgs = class FindManySaveArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SaveWhereInput_1.SaveWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SaveWhereInput_1.SaveWhereInput)
], FindManySaveArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [SaveOrderByWithRelationAndSearchRelevanceInput_1.SaveOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindManySaveArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SaveWhereUniqueInput_1.SaveWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SaveWhereUniqueInput_1.SaveWhereUniqueInput)
], FindManySaveArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindManySaveArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindManySaveArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [SaveScalarFieldEnum_1.SaveScalarFieldEnum], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindManySaveArgs.prototype, "distinct", void 0);
FindManySaveArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], FindManySaveArgs);
exports.FindManySaveArgs = FindManySaveArgs;
