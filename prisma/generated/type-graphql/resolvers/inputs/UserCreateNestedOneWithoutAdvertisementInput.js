"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutAdvertisementInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UserCreateOrConnectWithoutAdvertisementInput_1 = require("../inputs/UserCreateOrConnectWithoutAdvertisementInput");
const UserCreateWithoutAdvertisementInput_1 = require("../inputs/UserCreateWithoutAdvertisementInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutAdvertisementInput = class UserCreateNestedOneWithoutAdvertisementInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateWithoutAdvertisementInput_1.UserCreateWithoutAdvertisementInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateWithoutAdvertisementInput_1.UserCreateWithoutAdvertisementInput)
], UserCreateNestedOneWithoutAdvertisementInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutAdvertisementInput_1.UserCreateOrConnectWithoutAdvertisementInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateOrConnectWithoutAdvertisementInput_1.UserCreateOrConnectWithoutAdvertisementInput)
], UserCreateNestedOneWithoutAdvertisementInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutAdvertisementInput.prototype, "connect", void 0);
UserCreateNestedOneWithoutAdvertisementInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserCreateNestedOneWithoutAdvertisementInput", {
        isAbstract: true
    })
], UserCreateNestedOneWithoutAdvertisementInput);
exports.UserCreateNestedOneWithoutAdvertisementInput = UserCreateNestedOneWithoutAdvertisementInput;
