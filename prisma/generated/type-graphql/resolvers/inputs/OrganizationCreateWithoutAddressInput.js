"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationCreateWithoutAddressInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AdvertisementCreateNestedManyWithoutOrganizationInput_1 = require("../inputs/AdvertisementCreateNestedManyWithoutOrganizationInput");
const PropertyCreateNestedManyWithoutOrganizationInput_1 = require("../inputs/PropertyCreateNestedManyWithoutOrganizationInput");
const UserCreateNestedManyWithoutOrganizationInput_1 = require("../inputs/UserCreateNestedManyWithoutOrganizationInput");
let OrganizationCreateWithoutAddressInput = class OrganizationCreateWithoutAddressInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrganizationCreateWithoutAddressInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrganizationCreateWithoutAddressInput.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateNestedManyWithoutOrganizationInput_1.UserCreateNestedManyWithoutOrganizationInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateNestedManyWithoutOrganizationInput_1.UserCreateNestedManyWithoutOrganizationInput)
], OrganizationCreateWithoutAddressInput.prototype, "members", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyCreateNestedManyWithoutOrganizationInput_1.PropertyCreateNestedManyWithoutOrganizationInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyCreateNestedManyWithoutOrganizationInput_1.PropertyCreateNestedManyWithoutOrganizationInput)
], OrganizationCreateWithoutAddressInput.prototype, "properties", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementCreateNestedManyWithoutOrganizationInput_1.AdvertisementCreateNestedManyWithoutOrganizationInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementCreateNestedManyWithoutOrganizationInput_1.AdvertisementCreateNestedManyWithoutOrganizationInput)
], OrganizationCreateWithoutAddressInput.prototype, "advertisement", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], OrganizationCreateWithoutAddressInput.prototype, "isVerified", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], OrganizationCreateWithoutAddressInput.prototype, "isRegistrated", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], OrganizationCreateWithoutAddressInput.prototype, "isDeleted", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], OrganizationCreateWithoutAddressInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], OrganizationCreateWithoutAddressInput.prototype, "updatedAt", void 0);
OrganizationCreateWithoutAddressInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("OrganizationCreateWithoutAddressInput", {
        isAbstract: true
    })
], OrganizationCreateWithoutAddressInput);
exports.OrganizationCreateWithoutAddressInput = OrganizationCreateWithoutAddressInput;
