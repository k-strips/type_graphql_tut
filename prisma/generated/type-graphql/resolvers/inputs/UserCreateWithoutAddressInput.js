"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateWithoutAddressInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AdvertisementCreateNestedManyWithoutUserInput_1 = require("../inputs/AdvertisementCreateNestedManyWithoutUserInput");
const OrganizationCreateNestedOneWithoutMembersInput_1 = require("../inputs/OrganizationCreateNestedOneWithoutMembersInput");
const PropertyCreateNestedManyWithoutOwnerInput_1 = require("../inputs/PropertyCreateNestedManyWithoutOwnerInput");
const Property_RequestCreateNestedManyWithoutUserInput_1 = require("../inputs/Property_RequestCreateNestedManyWithoutUserInput");
const SaveCreateNestedManyWithoutUserInput_1 = require("../inputs/SaveCreateNestedManyWithoutUserInput");
const UserStatus_1 = require("../../enums/UserStatus");
let UserCreateWithoutAddressInput = class UserCreateWithoutAddressInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutAddressInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutAddressInput.prototype, "firstName", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutAddressInput.prototype, "lastName", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutAddressInput.prototype, "middleName", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserStatus_1.UserStatus, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutAddressInput.prototype, "status", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyCreateNestedManyWithoutOwnerInput_1.PropertyCreateNestedManyWithoutOwnerInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyCreateNestedManyWithoutOwnerInput_1.PropertyCreateNestedManyWithoutOwnerInput)
], UserCreateWithoutAddressInput.prototype, "property", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SaveCreateNestedManyWithoutUserInput_1.SaveCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SaveCreateNestedManyWithoutUserInput_1.SaveCreateNestedManyWithoutUserInput)
], UserCreateWithoutAddressInput.prototype, "saves", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementCreateNestedManyWithoutUserInput_1.AdvertisementCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementCreateNestedManyWithoutUserInput_1.AdvertisementCreateNestedManyWithoutUserInput)
], UserCreateWithoutAddressInput.prototype, "advertisement", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestCreateNestedManyWithoutUserInput_1.Property_RequestCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestCreateNestedManyWithoutUserInput_1.Property_RequestCreateNestedManyWithoutUserInput)
], UserCreateWithoutAddressInput.prototype, "request", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], UserCreateWithoutAddressInput.prototype, "isVerified", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], UserCreateWithoutAddressInput.prototype, "isRegistrated", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], UserCreateWithoutAddressInput.prototype, "isDeleted", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], UserCreateWithoutAddressInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], UserCreateWithoutAddressInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => OrganizationCreateNestedOneWithoutMembersInput_1.OrganizationCreateNestedOneWithoutMembersInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", OrganizationCreateNestedOneWithoutMembersInput_1.OrganizationCreateNestedOneWithoutMembersInput)
], UserCreateWithoutAddressInput.prototype, "organization", void 0);
UserCreateWithoutAddressInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserCreateWithoutAddressInput", {
        isAbstract: true
    })
], UserCreateWithoutAddressInput);
exports.UserCreateWithoutAddressInput = UserCreateWithoutAddressInput;
