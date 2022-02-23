"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutAdvertisementInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UserCreateWithoutAdvertisementInput_1 = require("../inputs/UserCreateWithoutAdvertisementInput");
const UserUpdateWithoutAdvertisementInput_1 = require("../inputs/UserUpdateWithoutAdvertisementInput");
let UserUpsertWithoutAdvertisementInput = class UserUpsertWithoutAdvertisementInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserUpdateWithoutAdvertisementInput_1.UserUpdateWithoutAdvertisementInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UserUpdateWithoutAdvertisementInput_1.UserUpdateWithoutAdvertisementInput)
], UserUpsertWithoutAdvertisementInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateWithoutAdvertisementInput_1.UserCreateWithoutAdvertisementInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateWithoutAdvertisementInput_1.UserCreateWithoutAdvertisementInput)
], UserUpsertWithoutAdvertisementInput.prototype, "create", void 0);
UserUpsertWithoutAdvertisementInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserUpsertWithoutAdvertisementInput", {
        isAbstract: true
    })
], UserUpsertWithoutAdvertisementInput);
exports.UserUpsertWithoutAdvertisementInput = UserUpsertWithoutAdvertisementInput;
