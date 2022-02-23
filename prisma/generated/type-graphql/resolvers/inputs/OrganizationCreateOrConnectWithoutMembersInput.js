"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationCreateOrConnectWithoutMembersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const OrganizationCreateWithoutMembersInput_1 = require("../inputs/OrganizationCreateWithoutMembersInput");
const OrganizationWhereUniqueInput_1 = require("../inputs/OrganizationWhereUniqueInput");
let OrganizationCreateOrConnectWithoutMembersInput = class OrganizationCreateOrConnectWithoutMembersInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => OrganizationWhereUniqueInput_1.OrganizationWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", OrganizationWhereUniqueInput_1.OrganizationWhereUniqueInput)
], OrganizationCreateOrConnectWithoutMembersInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => OrganizationCreateWithoutMembersInput_1.OrganizationCreateWithoutMembersInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", OrganizationCreateWithoutMembersInput_1.OrganizationCreateWithoutMembersInput)
], OrganizationCreateOrConnectWithoutMembersInput.prototype, "create", void 0);
OrganizationCreateOrConnectWithoutMembersInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("OrganizationCreateOrConnectWithoutMembersInput", {
        isAbstract: true
    })
], OrganizationCreateOrConnectWithoutMembersInput);
exports.OrganizationCreateOrConnectWithoutMembersInput = OrganizationCreateOrConnectWithoutMembersInput;
