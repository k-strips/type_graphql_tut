"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateManyWithoutOrganizationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UserCreateManyOrganizationInputEnvelope_1 = require("../inputs/UserCreateManyOrganizationInputEnvelope");
const UserCreateOrConnectWithoutOrganizationInput_1 = require("../inputs/UserCreateOrConnectWithoutOrganizationInput");
const UserCreateWithoutOrganizationInput_1 = require("../inputs/UserCreateWithoutOrganizationInput");
const UserScalarWhereInput_1 = require("../inputs/UserScalarWhereInput");
const UserUpdateManyWithWhereWithoutOrganizationInput_1 = require("../inputs/UserUpdateManyWithWhereWithoutOrganizationInput");
const UserUpdateWithWhereUniqueWithoutOrganizationInput_1 = require("../inputs/UserUpdateWithWhereUniqueWithoutOrganizationInput");
const UserUpsertWithWhereUniqueWithoutOrganizationInput_1 = require("../inputs/UserUpsertWithWhereUniqueWithoutOrganizationInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateManyWithoutOrganizationInput = class UserUpdateManyWithoutOrganizationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [UserCreateWithoutOrganizationInput_1.UserCreateWithoutOrganizationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], UserUpdateManyWithoutOrganizationInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutOrganizationInput_1.UserCreateOrConnectWithoutOrganizationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], UserUpdateManyWithoutOrganizationInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [UserUpsertWithWhereUniqueWithoutOrganizationInput_1.UserUpsertWithWhereUniqueWithoutOrganizationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], UserUpdateManyWithoutOrganizationInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateManyOrganizationInputEnvelope_1.UserCreateManyOrganizationInputEnvelope, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateManyOrganizationInputEnvelope_1.UserCreateManyOrganizationInputEnvelope)
], UserUpdateManyWithoutOrganizationInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [UserWhereUniqueInput_1.UserWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], UserUpdateManyWithoutOrganizationInput.prototype, "set", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [UserWhereUniqueInput_1.UserWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], UserUpdateManyWithoutOrganizationInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [UserWhereUniqueInput_1.UserWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], UserUpdateManyWithoutOrganizationInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [UserWhereUniqueInput_1.UserWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], UserUpdateManyWithoutOrganizationInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [UserUpdateWithWhereUniqueWithoutOrganizationInput_1.UserUpdateWithWhereUniqueWithoutOrganizationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], UserUpdateManyWithoutOrganizationInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [UserUpdateManyWithWhereWithoutOrganizationInput_1.UserUpdateManyWithWhereWithoutOrganizationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], UserUpdateManyWithoutOrganizationInput.prototype, "updateMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [UserScalarWhereInput_1.UserScalarWhereInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], UserUpdateManyWithoutOrganizationInput.prototype, "deleteMany", void 0);
UserUpdateManyWithoutOrganizationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserUpdateManyWithoutOrganizationInput", {
        isAbstract: true
    })
], UserUpdateManyWithoutOrganizationInput);
exports.UserUpdateManyWithoutOrganizationInput = UserUpdateManyWithoutOrganizationInput;
