"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneWithoutRequestInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UserCreateOrConnectWithoutRequestInput_1 = require("../inputs/UserCreateOrConnectWithoutRequestInput");
const UserCreateWithoutRequestInput_1 = require("../inputs/UserCreateWithoutRequestInput");
const UserUpdateWithoutRequestInput_1 = require("../inputs/UserUpdateWithoutRequestInput");
const UserUpsertWithoutRequestInput_1 = require("../inputs/UserUpsertWithoutRequestInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneWithoutRequestInput = class UserUpdateOneWithoutRequestInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateWithoutRequestInput_1.UserCreateWithoutRequestInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateWithoutRequestInput_1.UserCreateWithoutRequestInput)
], UserUpdateOneWithoutRequestInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutRequestInput_1.UserCreateOrConnectWithoutRequestInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateOrConnectWithoutRequestInput_1.UserCreateOrConnectWithoutRequestInput)
], UserUpdateOneWithoutRequestInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserUpsertWithoutRequestInput_1.UserUpsertWithoutRequestInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserUpsertWithoutRequestInput_1.UserUpsertWithoutRequestInput)
], UserUpdateOneWithoutRequestInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], UserUpdateOneWithoutRequestInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], UserUpdateOneWithoutRequestInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneWithoutRequestInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserUpdateWithoutRequestInput_1.UserUpdateWithoutRequestInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserUpdateWithoutRequestInput_1.UserUpdateWithoutRequestInput)
], UserUpdateOneWithoutRequestInput.prototype, "update", void 0);
UserUpdateOneWithoutRequestInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserUpdateOneWithoutRequestInput", {
        isAbstract: true
    })
], UserUpdateOneWithoutRequestInput);
exports.UserUpdateOneWithoutRequestInput = UserUpdateOneWithoutRequestInput;
