"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneWithoutSavesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UserCreateOrConnectWithoutSavesInput_1 = require("../inputs/UserCreateOrConnectWithoutSavesInput");
const UserCreateWithoutSavesInput_1 = require("../inputs/UserCreateWithoutSavesInput");
const UserUpdateWithoutSavesInput_1 = require("../inputs/UserUpdateWithoutSavesInput");
const UserUpsertWithoutSavesInput_1 = require("../inputs/UserUpsertWithoutSavesInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneWithoutSavesInput = class UserUpdateOneWithoutSavesInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateWithoutSavesInput_1.UserCreateWithoutSavesInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateWithoutSavesInput_1.UserCreateWithoutSavesInput)
], UserUpdateOneWithoutSavesInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutSavesInput_1.UserCreateOrConnectWithoutSavesInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateOrConnectWithoutSavesInput_1.UserCreateOrConnectWithoutSavesInput)
], UserUpdateOneWithoutSavesInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserUpsertWithoutSavesInput_1.UserUpsertWithoutSavesInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserUpsertWithoutSavesInput_1.UserUpsertWithoutSavesInput)
], UserUpdateOneWithoutSavesInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], UserUpdateOneWithoutSavesInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], UserUpdateOneWithoutSavesInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneWithoutSavesInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserUpdateWithoutSavesInput_1.UserUpdateWithoutSavesInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserUpdateWithoutSavesInput_1.UserUpdateWithoutSavesInput)
], UserUpdateOneWithoutSavesInput.prototype, "update", void 0);
UserUpdateOneWithoutSavesInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserUpdateOneWithoutSavesInput", {
        isAbstract: true
    })
], UserUpdateOneWithoutSavesInput);
exports.UserUpdateOneWithoutSavesInput = UserUpdateOneWithoutSavesInput;
