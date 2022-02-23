"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutRequestInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UserCreateWithoutRequestInput_1 = require("../inputs/UserCreateWithoutRequestInput");
const UserUpdateWithoutRequestInput_1 = require("../inputs/UserUpdateWithoutRequestInput");
let UserUpsertWithoutRequestInput = class UserUpsertWithoutRequestInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserUpdateWithoutRequestInput_1.UserUpdateWithoutRequestInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UserUpdateWithoutRequestInput_1.UserUpdateWithoutRequestInput)
], UserUpsertWithoutRequestInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateWithoutRequestInput_1.UserCreateWithoutRequestInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateWithoutRequestInput_1.UserCreateWithoutRequestInput)
], UserUpsertWithoutRequestInput.prototype, "create", void 0);
UserUpsertWithoutRequestInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserUpsertWithoutRequestInput", {
        isAbstract: true
    })
], UserUpsertWithoutRequestInput);
exports.UserUpsertWithoutRequestInput = UserUpsertWithoutRequestInput;
