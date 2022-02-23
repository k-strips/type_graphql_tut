"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateManyWithWhereWithoutOrganizationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UserScalarWhereInput_1 = require("../inputs/UserScalarWhereInput");
const UserUpdateManyMutationInput_1 = require("../inputs/UserUpdateManyMutationInput");
let UserUpdateManyWithWhereWithoutOrganizationInput = class UserUpdateManyWithWhereWithoutOrganizationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserScalarWhereInput_1.UserScalarWhereInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UserScalarWhereInput_1.UserScalarWhereInput)
], UserUpdateManyWithWhereWithoutOrganizationInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserUpdateManyMutationInput_1.UserUpdateManyMutationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UserUpdateManyMutationInput_1.UserUpdateManyMutationInput)
], UserUpdateManyWithWhereWithoutOrganizationInput.prototype, "data", void 0);
UserUpdateManyWithWhereWithoutOrganizationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserUpdateManyWithWhereWithoutOrganizationInput", {
        isAbstract: true
    })
], UserUpdateManyWithWhereWithoutOrganizationInput);
exports.UserUpdateManyWithWhereWithoutOrganizationInput = UserUpdateManyWithWhereWithoutOrganizationInput;
