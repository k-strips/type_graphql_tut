"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutAddressInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UserCreateWithoutAddressInput_1 = require("../inputs/UserCreateWithoutAddressInput");
const UserUpdateWithoutAddressInput_1 = require("../inputs/UserUpdateWithoutAddressInput");
let UserUpsertWithoutAddressInput = class UserUpsertWithoutAddressInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserUpdateWithoutAddressInput_1.UserUpdateWithoutAddressInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UserUpdateWithoutAddressInput_1.UserUpdateWithoutAddressInput)
], UserUpsertWithoutAddressInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateWithoutAddressInput_1.UserCreateWithoutAddressInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateWithoutAddressInput_1.UserCreateWithoutAddressInput)
], UserUpsertWithoutAddressInput.prototype, "create", void 0);
UserUpsertWithoutAddressInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserUpsertWithoutAddressInput", {
        isAbstract: true
    })
], UserUpsertWithoutAddressInput);
exports.UserUpsertWithoutAddressInput = UserUpsertWithoutAddressInput;
