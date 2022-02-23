"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneWithoutPropertyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UserCreateOrConnectWithoutPropertyInput_1 = require("../inputs/UserCreateOrConnectWithoutPropertyInput");
const UserCreateWithoutPropertyInput_1 = require("../inputs/UserCreateWithoutPropertyInput");
const UserUpdateWithoutPropertyInput_1 = require("../inputs/UserUpdateWithoutPropertyInput");
const UserUpsertWithoutPropertyInput_1 = require("../inputs/UserUpsertWithoutPropertyInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneWithoutPropertyInput = class UserUpdateOneWithoutPropertyInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateWithoutPropertyInput_1.UserCreateWithoutPropertyInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateWithoutPropertyInput_1.UserCreateWithoutPropertyInput)
], UserUpdateOneWithoutPropertyInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutPropertyInput_1.UserCreateOrConnectWithoutPropertyInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateOrConnectWithoutPropertyInput_1.UserCreateOrConnectWithoutPropertyInput)
], UserUpdateOneWithoutPropertyInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserUpsertWithoutPropertyInput_1.UserUpsertWithoutPropertyInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserUpsertWithoutPropertyInput_1.UserUpsertWithoutPropertyInput)
], UserUpdateOneWithoutPropertyInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], UserUpdateOneWithoutPropertyInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], UserUpdateOneWithoutPropertyInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneWithoutPropertyInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserUpdateWithoutPropertyInput_1.UserUpdateWithoutPropertyInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserUpdateWithoutPropertyInput_1.UserUpdateWithoutPropertyInput)
], UserUpdateOneWithoutPropertyInput.prototype, "update", void 0);
UserUpdateOneWithoutPropertyInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserUpdateOneWithoutPropertyInput", {
        isAbstract: true
    })
], UserUpdateOneWithoutPropertyInput);
exports.UserUpdateOneWithoutPropertyInput = UserUpdateOneWithoutPropertyInput;
