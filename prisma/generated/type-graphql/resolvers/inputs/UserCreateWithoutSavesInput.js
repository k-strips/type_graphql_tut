"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateWithoutSavesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AddressCreateNestedOneWithoutUserInput_1 = require("../inputs/AddressCreateNestedOneWithoutUserInput");
const AdvertisementCreateNestedManyWithoutUserInput_1 = require("../inputs/AdvertisementCreateNestedManyWithoutUserInput");
const OrganizationCreateNestedOneWithoutMembersInput_1 = require("../inputs/OrganizationCreateNestedOneWithoutMembersInput");
const PropertyCreateNestedManyWithoutOwnerInput_1 = require("../inputs/PropertyCreateNestedManyWithoutOwnerInput");
const Property_RequestCreateNestedManyWithoutUserInput_1 = require("../inputs/Property_RequestCreateNestedManyWithoutUserInput");
const UserStatus_1 = require("../../enums/UserStatus");
let UserCreateWithoutSavesInput = class UserCreateWithoutSavesInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutSavesInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutSavesInput.prototype, "firstName", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutSavesInput.prototype, "lastName", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutSavesInput.prototype, "middleName", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserStatus_1.UserStatus, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutSavesInput.prototype, "status", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AddressCreateNestedOneWithoutUserInput_1.AddressCreateNestedOneWithoutUserInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AddressCreateNestedOneWithoutUserInput_1.AddressCreateNestedOneWithoutUserInput)
], UserCreateWithoutSavesInput.prototype, "address", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyCreateNestedManyWithoutOwnerInput_1.PropertyCreateNestedManyWithoutOwnerInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyCreateNestedManyWithoutOwnerInput_1.PropertyCreateNestedManyWithoutOwnerInput)
], UserCreateWithoutSavesInput.prototype, "property", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementCreateNestedManyWithoutUserInput_1.AdvertisementCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementCreateNestedManyWithoutUserInput_1.AdvertisementCreateNestedManyWithoutUserInput)
], UserCreateWithoutSavesInput.prototype, "advertisement", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestCreateNestedManyWithoutUserInput_1.Property_RequestCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestCreateNestedManyWithoutUserInput_1.Property_RequestCreateNestedManyWithoutUserInput)
], UserCreateWithoutSavesInput.prototype, "request", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], UserCreateWithoutSavesInput.prototype, "isVerified", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], UserCreateWithoutSavesInput.prototype, "isRegistrated", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], UserCreateWithoutSavesInput.prototype, "isDeleted", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], UserCreateWithoutSavesInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], UserCreateWithoutSavesInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => OrganizationCreateNestedOneWithoutMembersInput_1.OrganizationCreateNestedOneWithoutMembersInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", OrganizationCreateNestedOneWithoutMembersInput_1.OrganizationCreateNestedOneWithoutMembersInput)
], UserCreateWithoutSavesInput.prototype, "organization", void 0);
UserCreateWithoutSavesInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserCreateWithoutSavesInput", {
        isAbstract: true
    })
], UserCreateWithoutSavesInput);
exports.UserCreateWithoutSavesInput = UserCreateWithoutSavesInput;
