"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutSavesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UserCreateWithoutSavesInput_1 = require("../inputs/UserCreateWithoutSavesInput");
const UserUpdateWithoutSavesInput_1 = require("../inputs/UserUpdateWithoutSavesInput");
let UserUpsertWithoutSavesInput = class UserUpsertWithoutSavesInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserUpdateWithoutSavesInput_1.UserUpdateWithoutSavesInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UserUpdateWithoutSavesInput_1.UserUpdateWithoutSavesInput)
], UserUpsertWithoutSavesInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateWithoutSavesInput_1.UserCreateWithoutSavesInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateWithoutSavesInput_1.UserCreateWithoutSavesInput)
], UserUpsertWithoutSavesInput.prototype, "create", void 0);
UserUpsertWithoutSavesInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserUpsertWithoutSavesInput", {
        isAbstract: true
    })
], UserUpsertWithoutSavesInput);
exports.UserUpsertWithoutSavesInput = UserUpsertWithoutSavesInput;
