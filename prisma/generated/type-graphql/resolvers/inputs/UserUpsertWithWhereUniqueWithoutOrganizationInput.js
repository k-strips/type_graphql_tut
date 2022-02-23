"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithWhereUniqueWithoutOrganizationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UserCreateWithoutOrganizationInput_1 = require("../inputs/UserCreateWithoutOrganizationInput");
const UserUpdateWithoutOrganizationInput_1 = require("../inputs/UserUpdateWithoutOrganizationInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpsertWithWhereUniqueWithoutOrganizationInput = class UserUpsertWithWhereUniqueWithoutOrganizationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpsertWithWhereUniqueWithoutOrganizationInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserUpdateWithoutOrganizationInput_1.UserUpdateWithoutOrganizationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UserUpdateWithoutOrganizationInput_1.UserUpdateWithoutOrganizationInput)
], UserUpsertWithWhereUniqueWithoutOrganizationInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateWithoutOrganizationInput_1.UserCreateWithoutOrganizationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateWithoutOrganizationInput_1.UserCreateWithoutOrganizationInput)
], UserUpsertWithWhereUniqueWithoutOrganizationInput.prototype, "create", void 0);
UserUpsertWithWhereUniqueWithoutOrganizationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserUpsertWithWhereUniqueWithoutOrganizationInput", {
        isAbstract: true
    })
], UserUpsertWithWhereUniqueWithoutOrganizationInput);
exports.UserUpsertWithWhereUniqueWithoutOrganizationInput = UserUpsertWithWhereUniqueWithoutOrganizationInput;
