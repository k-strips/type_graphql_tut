"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutAdvertisementInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UserCreateWithoutAdvertisementInput_1 = require("../inputs/UserCreateWithoutAdvertisementInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutAdvertisementInput = class UserCreateOrConnectWithoutAdvertisementInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutAdvertisementInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateWithoutAdvertisementInput_1.UserCreateWithoutAdvertisementInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateWithoutAdvertisementInput_1.UserCreateWithoutAdvertisementInput)
], UserCreateOrConnectWithoutAdvertisementInput.prototype, "create", void 0);
UserCreateOrConnectWithoutAdvertisementInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutAdvertisementInput", {
        isAbstract: true
    })
], UserCreateOrConnectWithoutAdvertisementInput);
exports.UserCreateOrConnectWithoutAdvertisementInput = UserCreateOrConnectWithoutAdvertisementInput;
