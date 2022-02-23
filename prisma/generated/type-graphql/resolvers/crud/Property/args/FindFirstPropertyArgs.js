"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstPropertyArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PropertyOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/PropertyOrderByWithRelationAndSearchRelevanceInput");
const PropertyWhereInput_1 = require("../../../inputs/PropertyWhereInput");
const PropertyWhereUniqueInput_1 = require("../../../inputs/PropertyWhereUniqueInput");
const PropertyScalarFieldEnum_1 = require("../../../../enums/PropertyScalarFieldEnum");
let FindFirstPropertyArgs = class FindFirstPropertyArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyWhereInput_1.PropertyWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyWhereInput_1.PropertyWhereInput)
], FindFirstPropertyArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PropertyOrderByWithRelationAndSearchRelevanceInput_1.PropertyOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindFirstPropertyArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyWhereUniqueInput_1.PropertyWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyWhereUniqueInput_1.PropertyWhereUniqueInput)
], FindFirstPropertyArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindFirstPropertyArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindFirstPropertyArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PropertyScalarFieldEnum_1.PropertyScalarFieldEnum], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindFirstPropertyArgs.prototype, "distinct", void 0);
FindFirstPropertyArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], FindFirstPropertyArgs);
exports.FindFirstPropertyArgs = FindFirstPropertyArgs;
