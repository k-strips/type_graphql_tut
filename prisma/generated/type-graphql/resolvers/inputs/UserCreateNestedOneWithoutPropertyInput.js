"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutPropertyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UserCreateOrConnectWithoutPropertyInput_1 = require("../inputs/UserCreateOrConnectWithoutPropertyInput");
const UserCreateWithoutPropertyInput_1 = require("../inputs/UserCreateWithoutPropertyInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutPropertyInput = class UserCreateNestedOneWithoutPropertyInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateWithoutPropertyInput_1.UserCreateWithoutPropertyInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateWithoutPropertyInput_1.UserCreateWithoutPropertyInput)
], UserCreateNestedOneWithoutPropertyInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutPropertyInput_1.UserCreateOrConnectWithoutPropertyInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateOrConnectWithoutPropertyInput_1.UserCreateOrConnectWithoutPropertyInput)
], UserCreateNestedOneWithoutPropertyInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutPropertyInput.prototype, "connect", void 0);
UserCreateNestedOneWithoutPropertyInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserCreateNestedOneWithoutPropertyInput", {
        isAbstract: true
    })
], UserCreateNestedOneWithoutPropertyInput);
exports.UserCreateNestedOneWithoutPropertyInput = UserCreateNestedOneWithoutPropertyInput;
