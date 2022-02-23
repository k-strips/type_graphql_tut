"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutOrganizationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UserCreateWithoutOrganizationInput_1 = require("../inputs/UserCreateWithoutOrganizationInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutOrganizationInput = class UserCreateOrConnectWithoutOrganizationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutOrganizationInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateWithoutOrganizationInput_1.UserCreateWithoutOrganizationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateWithoutOrganizationInput_1.UserCreateWithoutOrganizationInput)
], UserCreateOrConnectWithoutOrganizationInput.prototype, "create", void 0);
UserCreateOrConnectWithoutOrganizationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutOrganizationInput", {
        isAbstract: true
    })
], UserCreateOrConnectWithoutOrganizationInput);
exports.UserCreateOrConnectWithoutOrganizationInput = UserCreateOrConnectWithoutOrganizationInput;
