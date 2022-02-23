"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyOrganizationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const OrganizationOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/OrganizationOrderByWithRelationAndSearchRelevanceInput");
const OrganizationWhereInput_1 = require("../../../inputs/OrganizationWhereInput");
const OrganizationWhereUniqueInput_1 = require("../../../inputs/OrganizationWhereUniqueInput");
const OrganizationScalarFieldEnum_1 = require("../../../../enums/OrganizationScalarFieldEnum");
let FindManyOrganizationArgs = class FindManyOrganizationArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => OrganizationWhereInput_1.OrganizationWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", OrganizationWhereInput_1.OrganizationWhereInput)
], FindManyOrganizationArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [OrganizationOrderByWithRelationAndSearchRelevanceInput_1.OrganizationOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindManyOrganizationArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => OrganizationWhereUniqueInput_1.OrganizationWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", OrganizationWhereUniqueInput_1.OrganizationWhereUniqueInput)
], FindManyOrganizationArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindManyOrganizationArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], FindManyOrganizationArgs.prototype, "skip", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [OrganizationScalarFieldEnum_1.OrganizationScalarFieldEnum], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], FindManyOrganizationArgs.prototype, "distinct", void 0);
FindManyOrganizationArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], FindManyOrganizationArgs);
exports.FindManyOrganizationArgs = FindManyOrganizationArgs;
