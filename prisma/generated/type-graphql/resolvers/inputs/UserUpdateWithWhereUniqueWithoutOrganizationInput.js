"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateWithWhereUniqueWithoutOrganizationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UserUpdateWithoutOrganizationInput_1 = require("../inputs/UserUpdateWithoutOrganizationInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateWithWhereUniqueWithoutOrganizationInput = class UserUpdateWithWhereUniqueWithoutOrganizationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateWithWhereUniqueWithoutOrganizationInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserUpdateWithoutOrganizationInput_1.UserUpdateWithoutOrganizationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UserUpdateWithoutOrganizationInput_1.UserUpdateWithoutOrganizationInput)
], UserUpdateWithWhereUniqueWithoutOrganizationInput.prototype, "data", void 0);
UserUpdateWithWhereUniqueWithoutOrganizationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserUpdateWithWhereUniqueWithoutOrganizationInput", {
        isAbstract: true
    })
], UserUpdateWithWhereUniqueWithoutOrganizationInput);
exports.UserUpdateWithWhereUniqueWithoutOrganizationInput = UserUpdateWithWhereUniqueWithoutOrganizationInput;
