"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateOrganizationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const OrganizationOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/OrganizationOrderByWithRelationAndSearchRelevanceInput");
const OrganizationWhereInput_1 = require("../../../inputs/OrganizationWhereInput");
const OrganizationWhereUniqueInput_1 = require("../../../inputs/OrganizationWhereUniqueInput");
let AggregateOrganizationArgs = class AggregateOrganizationArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => OrganizationWhereInput_1.OrganizationWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", OrganizationWhereInput_1.OrganizationWhereInput)
], AggregateOrganizationArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [OrganizationOrderByWithRelationAndSearchRelevanceInput_1.OrganizationOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AggregateOrganizationArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => OrganizationWhereUniqueInput_1.OrganizationWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", OrganizationWhereUniqueInput_1.OrganizationWhereUniqueInput)
], AggregateOrganizationArgs.prototype, "cursor", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AggregateOrganizationArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AggregateOrganizationArgs.prototype, "skip", void 0);
AggregateOrganizationArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], AggregateOrganizationArgs);
exports.AggregateOrganizationArgs = AggregateOrganizationArgs;
