"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstSearchArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SearchOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/SearchOrderByWithRelationAndSearchRelevanceInput");
const SearchWhereInput_1 = require("../../../inputs/SearchWhereInput");
const SearchWhereUniqueInput_1 = require("../../../inputs/SearchWhereUniqueInput");
const SearchScalarFieldEnum_1 = require("../../../../enums/SearchScalarFieldEnum");
let FindFirstSearchArgs = class FindFirstSearchArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SearchWhereInput_1.SearchWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SearchWhereInput_1.SearchWhereInput)
], FindFirstSearchArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [SearchOrderByWithRelationAndSearchRelevanceInput_1.SearchOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindFirstSearchArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SearchWhereUniqueInput_1.SearchWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SearchWhereUniqueInput_1.SearchWhereUniqueInput)
], FindFirstSearchArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindFirstSearchArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindFirstSearchArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [SearchScalarFieldEnum_1.SearchScalarFieldEnum], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindFirstSearchArgs.prototype, "distinct", void 0);
FindFirstSearchArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], FindFirstSearchArgs);
exports.FindFirstSearchArgs = FindFirstSearchArgs;
