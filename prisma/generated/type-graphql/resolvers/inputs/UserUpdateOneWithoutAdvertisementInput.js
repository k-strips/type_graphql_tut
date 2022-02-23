"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneWithoutAdvertisementInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UserCreateOrConnectWithoutAdvertisementInput_1 = require("../inputs/UserCreateOrConnectWithoutAdvertisementInput");
const UserCreateWithoutAdvertisementInput_1 = require("../inputs/UserCreateWithoutAdvertisementInput");
const UserUpdateWithoutAdvertisementInput_1 = require("../inputs/UserUpdateWithoutAdvertisementInput");
const UserUpsertWithoutAdvertisementInput_1 = require("../inputs/UserUpsertWithoutAdvertisementInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneWithoutAdvertisementInput = class UserUpdateOneWithoutAdvertisementInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateWithoutAdvertisementInput_1.UserCreateWithoutAdvertisementInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateWithoutAdvertisementInput_1.UserCreateWithoutAdvertisementInput)
], UserUpdateOneWithoutAdvertisementInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutAdvertisementInput_1.UserCreateOrConnectWithoutAdvertisementInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateOrConnectWithoutAdvertisementInput_1.UserCreateOrConnectWithoutAdvertisementInput)
], UserUpdateOneWithoutAdvertisementInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserUpsertWithoutAdvertisementInput_1.UserUpsertWithoutAdvertisementInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserUpsertWithoutAdvertisementInput_1.UserUpsertWithoutAdvertisementInput)
], UserUpdateOneWithoutAdvertisementInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], UserUpdateOneWithoutAdvertisementInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], UserUpdateOneWithoutAdvertisementInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneWithoutAdvertisementInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserUpdateWithoutAdvertisementInput_1.UserUpdateWithoutAdvertisementInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserUpdateWithoutAdvertisementInput_1.UserUpdateWithoutAdvertisementInput)
], UserUpdateOneWithoutAdvertisementInput.prototype, "update", void 0);
UserUpdateOneWithoutAdvertisementInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserUpdateOneWithoutAdvertisementInput", {
        isAbstract: true
    })
], UserUpdateOneWithoutAdvertisementInput);
exports.UserUpdateOneWithoutAdvertisementInput = UserUpdateOneWithoutAdvertisementInput;
