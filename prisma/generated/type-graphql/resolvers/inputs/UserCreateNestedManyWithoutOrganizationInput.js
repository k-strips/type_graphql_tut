"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedManyWithoutOrganizationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UserCreateManyOrganizationInputEnvelope_1 = require("../inputs/UserCreateManyOrganizationInputEnvelope");
const UserCreateOrConnectWithoutOrganizationInput_1 = require("../inputs/UserCreateOrConnectWithoutOrganizationInput");
const UserCreateWithoutOrganizationInput_1 = require("../inputs/UserCreateWithoutOrganizationInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedManyWithoutOrganizationInput = class UserCreateNestedManyWithoutOrganizationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [UserCreateWithoutOrganizationInput_1.UserCreateWithoutOrganizationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], UserCreateNestedManyWithoutOrganizationInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutOrganizationInput_1.UserCreateOrConnectWithoutOrganizationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], UserCreateNestedManyWithoutOrganizationInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateManyOrganizationInputEnvelope_1.UserCreateManyOrganizationInputEnvelope, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateManyOrganizationInputEnvelope_1.UserCreateManyOrganizationInputEnvelope)
], UserCreateNestedManyWithoutOrganizationInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [UserWhereUniqueInput_1.UserWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], UserCreateNestedManyWithoutOrganizationInput.prototype, "connect", void 0);
UserCreateNestedManyWithoutOrganizationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserCreateNestedManyWithoutOrganizationInput", {
        isAbstract: true
    })
], UserCreateNestedManyWithoutOrganizationInput);
exports.UserCreateNestedManyWithoutOrganizationInput = UserCreateNestedManyWithoutOrganizationInput;
