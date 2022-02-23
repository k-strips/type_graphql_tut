"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutAddressInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UserCreateOrConnectWithoutAddressInput_1 = require("../inputs/UserCreateOrConnectWithoutAddressInput");
const UserCreateWithoutAddressInput_1 = require("../inputs/UserCreateWithoutAddressInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutAddressInput = class UserCreateNestedOneWithoutAddressInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateWithoutAddressInput_1.UserCreateWithoutAddressInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateWithoutAddressInput_1.UserCreateWithoutAddressInput)
], UserCreateNestedOneWithoutAddressInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutAddressInput_1.UserCreateOrConnectWithoutAddressInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateOrConnectWithoutAddressInput_1.UserCreateOrConnectWithoutAddressInput)
], UserCreateNestedOneWithoutAddressInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutAddressInput.prototype, "connect", void 0);
UserCreateNestedOneWithoutAddressInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserCreateNestedOneWithoutAddressInput", {
        isAbstract: true
    })
], UserCreateNestedOneWithoutAddressInput);
exports.UserCreateNestedOneWithoutAddressInput = UserCreateNestedOneWithoutAddressInput;
