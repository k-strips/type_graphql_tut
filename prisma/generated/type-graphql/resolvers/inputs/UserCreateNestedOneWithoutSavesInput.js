"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutSavesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UserCreateOrConnectWithoutSavesInput_1 = require("../inputs/UserCreateOrConnectWithoutSavesInput");
const UserCreateWithoutSavesInput_1 = require("../inputs/UserCreateWithoutSavesInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutSavesInput = class UserCreateNestedOneWithoutSavesInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateWithoutSavesInput_1.UserCreateWithoutSavesInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateWithoutSavesInput_1.UserCreateWithoutSavesInput)
], UserCreateNestedOneWithoutSavesInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutSavesInput_1.UserCreateOrConnectWithoutSavesInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateOrConnectWithoutSavesInput_1.UserCreateOrConnectWithoutSavesInput)
], UserCreateNestedOneWithoutSavesInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutSavesInput.prototype, "connect", void 0);
UserCreateNestedOneWithoutSavesInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserCreateNestedOneWithoutSavesInput", {
        isAbstract: true
    })
], UserCreateNestedOneWithoutSavesInput);
exports.UserCreateNestedOneWithoutSavesInput = UserCreateNestedOneWithoutSavesInput;
