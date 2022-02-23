"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const OrganizationWhereInput_1 = require("../inputs/OrganizationWhereInput");
let OrganizationRelationFilter = class OrganizationRelationFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => OrganizationWhereInput_1.OrganizationWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", OrganizationWhereInput_1.OrganizationWhereInput)
], OrganizationRelationFilter.prototype, "is", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => OrganizationWhereInput_1.OrganizationWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", OrganizationWhereInput_1.OrganizationWhereInput)
], OrganizationRelationFilter.prototype, "isNot", void 0);
OrganizationRelationFilter = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("OrganizationRelationFilter", {
        isAbstract: true
    })
], OrganizationRelationFilter);
exports.OrganizationRelationFilter = OrganizationRelationFilter;
