"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutSavesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UserCreateWithoutSavesInput_1 = require("../inputs/UserCreateWithoutSavesInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutSavesInput = class UserCreateOrConnectWithoutSavesInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutSavesInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateWithoutSavesInput_1.UserCreateWithoutSavesInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateWithoutSavesInput_1.UserCreateWithoutSavesInput)
], UserCreateOrConnectWithoutSavesInput.prototype, "create", void 0);
UserCreateOrConnectWithoutSavesInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutSavesInput", {
        isAbstract: true
    })
], UserCreateOrConnectWithoutSavesInput);
exports.UserCreateOrConnectWithoutSavesInput = UserCreateOrConnectWithoutSavesInput;
