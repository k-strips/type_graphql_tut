"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOrganizationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const OrganizationWhereUniqueInput_1 = require("../../../inputs/OrganizationWhereUniqueInput");
let DeleteOrganizationArgs = class DeleteOrganizationArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => OrganizationWhereUniqueInput_1.OrganizationWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", OrganizationWhereUniqueInput_1.OrganizationWhereUniqueInput)
], DeleteOrganizationArgs.prototype, "where", void 0);
DeleteOrganizationArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], DeleteOrganizationArgs);
exports.DeleteOrganizationArgs = DeleteOrganizationArgs;
