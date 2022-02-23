"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutAddressInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UserCreateWithoutAddressInput_1 = require("../inputs/UserCreateWithoutAddressInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutAddressInput = class UserCreateOrConnectWithoutAddressInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutAddressInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateWithoutAddressInput_1.UserCreateWithoutAddressInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateWithoutAddressInput_1.UserCreateWithoutAddressInput)
], UserCreateOrConnectWithoutAddressInput.prototype, "create", void 0);
UserCreateOrConnectWithoutAddressInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutAddressInput", {
        isAbstract: true
    })
], UserCreateOrConnectWithoutAddressInput);
exports.UserCreateOrConnectWithoutAddressInput = UserCreateOrConnectWithoutAddressInput;
