"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneWithoutAddressInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UserCreateOrConnectWithoutAddressInput_1 = require("../inputs/UserCreateOrConnectWithoutAddressInput");
const UserCreateWithoutAddressInput_1 = require("../inputs/UserCreateWithoutAddressInput");
const UserUpdateWithoutAddressInput_1 = require("../inputs/UserUpdateWithoutAddressInput");
const UserUpsertWithoutAddressInput_1 = require("../inputs/UserUpsertWithoutAddressInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneWithoutAddressInput = class UserUpdateOneWithoutAddressInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateWithoutAddressInput_1.UserCreateWithoutAddressInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateWithoutAddressInput_1.UserCreateWithoutAddressInput)
], UserUpdateOneWithoutAddressInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutAddressInput_1.UserCreateOrConnectWithoutAddressInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateOrConnectWithoutAddressInput_1.UserCreateOrConnectWithoutAddressInput)
], UserUpdateOneWithoutAddressInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserUpsertWithoutAddressInput_1.UserUpsertWithoutAddressInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserUpsertWithoutAddressInput_1.UserUpsertWithoutAddressInput)
], UserUpdateOneWithoutAddressInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], UserUpdateOneWithoutAddressInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], UserUpdateOneWithoutAddressInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneWithoutAddressInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserUpdateWithoutAddressInput_1.UserUpdateWithoutAddressInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserUpdateWithoutAddressInput_1.UserUpdateWithoutAddressInput)
], UserUpdateOneWithoutAddressInput.prototype, "update", void 0);
UserUpdateOneWithoutAddressInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserUpdateOneWithoutAddressInput", {
        isAbstract: true
    })
], UserUpdateOneWithoutAddressInput);
exports.UserUpdateOneWithoutAddressInput = UserUpdateOneWithoutAddressInput;
