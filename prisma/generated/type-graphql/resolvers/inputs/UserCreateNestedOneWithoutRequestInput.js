"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutRequestInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UserCreateOrConnectWithoutRequestInput_1 = require("../inputs/UserCreateOrConnectWithoutRequestInput");
const UserCreateWithoutRequestInput_1 = require("../inputs/UserCreateWithoutRequestInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutRequestInput = class UserCreateNestedOneWithoutRequestInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateWithoutRequestInput_1.UserCreateWithoutRequestInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateWithoutRequestInput_1.UserCreateWithoutRequestInput)
], UserCreateNestedOneWithoutRequestInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutRequestInput_1.UserCreateOrConnectWithoutRequestInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateOrConnectWithoutRequestInput_1.UserCreateOrConnectWithoutRequestInput)
], UserCreateNestedOneWithoutRequestInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutRequestInput.prototype, "connect", void 0);
UserCreateNestedOneWithoutRequestInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserCreateNestedOneWithoutRequestInput", {
        isAbstract: true
    })
], UserCreateNestedOneWithoutRequestInput);
exports.UserCreateNestedOneWithoutRequestInput = UserCreateNestedOneWithoutRequestInput;
