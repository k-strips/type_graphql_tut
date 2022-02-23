"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateWithoutRequestInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AddressCreateNestedOneWithoutUserInput_1 = require("../inputs/AddressCreateNestedOneWithoutUserInput");
const AdvertisementCreateNestedManyWithoutUserInput_1 = require("../inputs/AdvertisementCreateNestedManyWithoutUserInput");
const OrganizationCreateNestedOneWithoutMembersInput_1 = require("../inputs/OrganizationCreateNestedOneWithoutMembersInput");
const PropertyCreateNestedManyWithoutOwnerInput_1 = require("../inputs/PropertyCreateNestedManyWithoutOwnerInput");
const SaveCreateNestedManyWithoutUserInput_1 = require("../inputs/SaveCreateNestedManyWithoutUserInput");
const UserStatus_1 = require("../../enums/UserStatus");
let UserCreateWithoutRequestInput = class UserCreateWithoutRequestInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutRequestInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutRequestInput.prototype, "firstName", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutRequestInput.prototype, "lastName", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutRequestInput.prototype, "middleName", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserStatus_1.UserStatus, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], UserCreateWithoutRequestInput.prototype, "status", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AddressCreateNestedOneWithoutUserInput_1.AddressCreateNestedOneWithoutUserInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AddressCreateNestedOneWithoutUserInput_1.AddressCreateNestedOneWithoutUserInput)
], UserCreateWithoutRequestInput.prototype, "address", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyCreateNestedManyWithoutOwnerInput_1.PropertyCreateNestedManyWithoutOwnerInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyCreateNestedManyWithoutOwnerInput_1.PropertyCreateNestedManyWithoutOwnerInput)
], UserCreateWithoutRequestInput.prototype, "property", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SaveCreateNestedManyWithoutUserInput_1.SaveCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SaveCreateNestedManyWithoutUserInput_1.SaveCreateNestedManyWithoutUserInput)
], UserCreateWithoutRequestInput.prototype, "saves", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementCreateNestedManyWithoutUserInput_1.AdvertisementCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementCreateNestedManyWithoutUserInput_1.AdvertisementCreateNestedManyWithoutUserInput)
], UserCreateWithoutRequestInput.prototype, "advertisement", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], UserCreateWithoutRequestInput.prototype, "isVerified", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], UserCreateWithoutRequestInput.prototype, "isRegistrated", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], UserCreateWithoutRequestInput.prototype, "isDeleted", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], UserCreateWithoutRequestInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], UserCreateWithoutRequestInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => OrganizationCreateNestedOneWithoutMembersInput_1.OrganizationCreateNestedOneWithoutMembersInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", OrganizationCreateNestedOneWithoutMembersInput_1.OrganizationCreateNestedOneWithoutMembersInput)
], UserCreateWithoutRequestInput.prototype, "organization", void 0);
UserCreateWithoutRequestInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("UserCreateWithoutRequestInput", {
        isAbstract: true
    })
], UserCreateWithoutRequestInput);
exports.UserCreateWithoutRequestInput = UserCreateWithoutRequestInput;
