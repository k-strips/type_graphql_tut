"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOrganizationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const OrganizationCreateInput_1 = require("../../../inputs/OrganizationCreateInput");
let CreateOrganizationArgs = class CreateOrganizationArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => OrganizationCreateInput_1.OrganizationCreateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", OrganizationCreateInput_1.OrganizationCreateInput)
], CreateOrganizationArgs.prototype, "data", void 0);
CreateOrganizationArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], CreateOrganizationArgs);
exports.CreateOrganizationArgs = CreateOrganizationArgs;
