"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutRequestInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UserCreateWithoutRequestInput_1 = require("../inputs/UserCreateWithoutRequestInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutRequestInput = class UserCreateOrConnectWithoutRequestInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutRequestInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateWithoutRequestInput_1.UserCreateWithoutRequestInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateWithoutRequestInput_1.UserCreateWithoutRequestInput)
], UserCreateOrConnectWithoutRequestInput.prototype, "create", void 0);
UserCreateOrConnectWithoutRequestInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutRequestInput", {
        isAbstract: true
    })
], UserCreateOrConnectWithoutRequestInput);
exports.UserCreateOrConnectWithoutRequestInput = UserCreateOrConnectWithoutRequestInput;
