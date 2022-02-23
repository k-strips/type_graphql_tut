"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutPropertyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UserCreateWithoutPropertyInput_1 = require("../inputs/UserCreateWithoutPropertyInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutPropertyInput = class UserCreateOrConnectWithoutPropertyInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutPropertyInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateWithoutPropertyInput_1.UserCreateWithoutPropertyInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateWithoutPropertyInput_1.UserCreateWithoutPropertyInput)
], UserCreateOrConnectWithoutPropertyInput.prototype, "create", void 0);
UserCreateOrConnectWithoutPropertyInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutPropertyInput", {
        isAbstract: true
    })
], UserCreateOrConnectWithoutPropertyInput);
exports.UserCreateOrConnectWithoutPropertyInput = UserCreateOrConnectWithoutPropertyInput;
