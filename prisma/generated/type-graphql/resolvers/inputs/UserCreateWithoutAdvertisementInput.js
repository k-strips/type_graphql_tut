"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateWithoutAdvertisementInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AddressCreateNestedOneWithoutUserInput_1 = require("../inputs/AddressCreateNestedOneWithoutUserInput");
const OrganizationCreateNestedOneWithoutMembersInput_1 = require("../inputs/OrganizationCreateNestedOneWithoutMembersInput");
const PropertyCreateNestedManyWithoutOwnerInput_1 = require("../inputs/PropertyCreateNestedManyWithoutOwnerInput");
const Property_RequestCreateNestedManyWithoutUserInput_1 = require("../inputs/Property_RequestCreateNestedManyWithoutUserInput");
const SaveCreateNestedManyWithoutUserInput_1 = require("../inputs/SaveCreateNestedManyWithoutUserInput");
const UserStatus_1 = require("../../enums/UserStatus");
let UserCreateWithoutAdvertisementInput = class UserCreateWithoutAdvertisementInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutAdvertisementInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutAdvertisementInput.prototype, "firstName", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutAdvertisementInput.prototype, "lastName", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutAdvertisementInput.prototype, "middleName", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserStatus_1.UserStatus, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutAdvertisementInput.prototype, "status", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AddressCreateNestedOneWithoutUserInput_1.AddressCreateNestedOneWithoutUserInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AddressCreateNestedOneWithoutUserInput_1.AddressCreateNestedOneWithoutUserInput)
], UserCreateWithoutAdvertisementInput.prototype, "address", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyCreateNestedManyWithoutOwnerInput_1.PropertyCreateNestedManyWithoutOwnerInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyCreateNestedManyWithoutOwnerInput_1.PropertyCreateNestedManyWithoutOwnerInput)
], UserCreateWithoutAdvertisementInput.prototype, "property", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SaveCreateNestedManyWithoutUserInput_1.SaveCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SaveCreateNestedManyWithoutUserInput_1.SaveCreateNestedManyWithoutUserInput)
], UserCreateWithoutAdvertisementInput.prototype, "saves", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestCreateNestedManyWithoutUserInput_1.Property_RequestCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestCreateNestedManyWithoutUserInput_1.Property_RequestCreateNestedManyWithoutUserInput)
], UserCreateWithoutAdvertisementInput.prototype, "request", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], UserCreateWithoutAdvertisementInput.prototype, "isVerified", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], UserCreateWithoutAdvertisementInput.prototype, "isRegistrated", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], UserCreateWithoutAdvertisementInput.prototype, "isDeleted", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], UserCreateWithoutAdvertisementInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], UserCreateWithoutAdvertisementInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => OrganizationCreateNestedOneWithoutMembersInput_1.OrganizationCreateNestedOneWithoutMembersInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", OrganizationCreateNestedOneWithoutMembersInput_1.OrganizationCreateNestedOneWithoutMembersInput)
], UserCreateWithoutAdvertisementInput.prototype, "organization", void 0);
UserCreateWithoutAdvertisementInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserCreateWithoutAdvertisementInput", {
        isAbstract: true
    })
], UserCreateWithoutAdvertisementInput);
exports.UserCreateWithoutAdvertisementInput = UserCreateWithoutAdvertisementInput;
