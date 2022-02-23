"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyOrganizationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const OrganizationUpdateManyMutationInput_1 = require("../../../inputs/OrganizationUpdateManyMutationInput");
const OrganizationWhereInput_1 = require("../../../inputs/OrganizationWhereInput");
let UpdateManyOrganizationArgs = class UpdateManyOrganizationArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => OrganizationUpdateManyMutationInput_1.OrganizationUpdateManyMutationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", OrganizationUpdateManyMutationInput_1.OrganizationUpdateManyMutationInput)
], UpdateManyOrganizationArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => OrganizationWhereInput_1.OrganizationWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", OrganizationWhereInput_1.OrganizationWhereInput)
], UpdateManyOrganizationArgs.prototype, "where", void 0);
UpdateManyOrganizationArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpdateManyOrganizationArgs);
exports.UpdateManyOrganizationArgs = UpdateManyOrganizationArgs;
