"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationCreateNestedOneWithoutMembersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const OrganizationCreateOrConnectWithoutMembersInput_1 = require("../inputs/OrganizationCreateOrConnectWithoutMembersInput");
const OrganizationCreateWithoutMembersInput_1 = require("../inputs/OrganizationCreateWithoutMembersInput");
const OrganizationWhereUniqueInput_1 = require("../inputs/OrganizationWhereUniqueInput");
let OrganizationCreateNestedOneWithoutMembersInput = class OrganizationCreateNestedOneWithoutMembersInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => OrganizationCreateWithoutMembersInput_1.OrganizationCreateWithoutMembersInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", OrganizationCreateWithoutMembersInput_1.OrganizationCreateWithoutMembersInput)
], OrganizationCreateNestedOneWithoutMembersInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => OrganizationCreateOrConnectWithoutMembersInput_1.OrganizationCreateOrConnectWithoutMembersInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", OrganizationCreateOrConnectWithoutMembersInput_1.OrganizationCreateOrConnectWithoutMembersInput)
], OrganizationCreateNestedOneWithoutMembersInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => OrganizationWhereUniqueInput_1.OrganizationWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", OrganizationWhereUniqueInput_1.OrganizationWhereUniqueInput)
], OrganizationCreateNestedOneWithoutMembersInput.prototype, "connect", void 0);
OrganizationCreateNestedOneWithoutMembersInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("OrganizationCreateNestedOneWithoutMembersInput", {
        isAbstract: true
    })
], OrganizationCreateNestedOneWithoutMembersInput);
exports.OrganizationCreateNestedOneWithoutMembersInput = OrganizationCreateNestedOneWithoutMembersInput;
