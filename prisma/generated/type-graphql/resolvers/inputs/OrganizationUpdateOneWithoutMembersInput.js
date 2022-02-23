"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationUpdateOneWithoutMembersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const OrganizationCreateOrConnectWithoutMembersInput_1 = require("../inputs/OrganizationCreateOrConnectWithoutMembersInput");
const OrganizationCreateWithoutMembersInput_1 = require("../inputs/OrganizationCreateWithoutMembersInput");
const OrganizationUpdateWithoutMembersInput_1 = require("../inputs/OrganizationUpdateWithoutMembersInput");
const OrganizationUpsertWithoutMembersInput_1 = require("../inputs/OrganizationUpsertWithoutMembersInput");
const OrganizationWhereUniqueInput_1 = require("../inputs/OrganizationWhereUniqueInput");
let OrganizationUpdateOneWithoutMembersInput = class OrganizationUpdateOneWithoutMembersInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => OrganizationCreateWithoutMembersInput_1.OrganizationCreateWithoutMembersInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", OrganizationCreateWithoutMembersInput_1.OrganizationCreateWithoutMembersInput)
], OrganizationUpdateOneWithoutMembersInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => OrganizationCreateOrConnectWithoutMembersInput_1.OrganizationCreateOrConnectWithoutMembersInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", OrganizationCreateOrConnectWithoutMembersInput_1.OrganizationCreateOrConnectWithoutMembersInput)
], OrganizationUpdateOneWithoutMembersInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => OrganizationUpsertWithoutMembersInput_1.OrganizationUpsertWithoutMembersInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", OrganizationUpsertWithoutMembersInput_1.OrganizationUpsertWithoutMembersInput)
], OrganizationUpdateOneWithoutMembersInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], OrganizationUpdateOneWithoutMembersInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], OrganizationUpdateOneWithoutMembersInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => OrganizationWhereUniqueInput_1.OrganizationWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", OrganizationWhereUniqueInput_1.OrganizationWhereUniqueInput)
], OrganizationUpdateOneWithoutMembersInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => OrganizationUpdateWithoutMembersInput_1.OrganizationUpdateWithoutMembersInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", OrganizationUpdateWithoutMembersInput_1.OrganizationUpdateWithoutMembersInput)
], OrganizationUpdateOneWithoutMembersInput.prototype, "update", void 0);
OrganizationUpdateOneWithoutMembersInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("OrganizationUpdateOneWithoutMembersInput", {
        isAbstract: true
    })
], OrganizationUpdateOneWithoutMembersInput);
exports.OrganizationUpdateOneWithoutMembersInput = OrganizationUpdateOneWithoutMembersInput;
