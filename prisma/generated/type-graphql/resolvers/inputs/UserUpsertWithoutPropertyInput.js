"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutPropertyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UserCreateWithoutPropertyInput_1 = require("../inputs/UserCreateWithoutPropertyInput");
const UserUpdateWithoutPropertyInput_1 = require("../inputs/UserUpdateWithoutPropertyInput");
let UserUpsertWithoutPropertyInput = class UserUpsertWithoutPropertyInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserUpdateWithoutPropertyInput_1.UserUpdateWithoutPropertyInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UserUpdateWithoutPropertyInput_1.UserUpdateWithoutPropertyInput)
], UserUpsertWithoutPropertyInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateWithoutPropertyInput_1.UserCreateWithoutPropertyInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateWithoutPropertyInput_1.UserCreateWithoutPropertyInput)
], UserUpsertWithoutPropertyInput.prototype, "create", void 0);
UserUpsertWithoutPropertyInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserUpsertWithoutPropertyInput", {
        isAbstract: true
    })
], UserUpsertWithoutPropertyInput);
exports.UserUpsertWithoutPropertyInput = UserUpsertWithoutPropertyInput;
