"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationUpsertWithoutMembersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const OrganizationCreateWithoutMembersInput_1 = require("../inputs/OrganizationCreateWithoutMembersInput");
const OrganizationUpdateWithoutMembersInput_1 = require("../inputs/OrganizationUpdateWithoutMembersInput");
let OrganizationUpsertWithoutMembersInput = class OrganizationUpsertWithoutMembersInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => OrganizationUpdateWithoutMembersInput_1.OrganizationUpdateWithoutMembersInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", OrganizationUpdateWithoutMembersInput_1.OrganizationUpdateWithoutMembersInput)
], OrganizationUpsertWithoutMembersInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => OrganizationCreateWithoutMembersInput_1.OrganizationCreateWithoutMembersInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", OrganizationCreateWithoutMembersInput_1.OrganizationCreateWithoutMembersInput)
], OrganizationUpsertWithoutMembersInput.prototype, "create", void 0);
OrganizationUpsertWithoutMembersInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("OrganizationUpsertWithoutMembersInput", {
        isAbstract: true
    })
], OrganizationUpsertWithoutMembersInput);
exports.OrganizationUpsertWithoutMembersInput = OrganizationUpsertWithoutMembersInput;
