"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationCreateWithoutPropertiesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AddressCreateNestedOneWithoutOrganizationInput_1 = require("../inputs/AddressCreateNestedOneWithoutOrganizationInput");
const AdvertisementCreateNestedManyWithoutOrganizationInput_1 = require("../inputs/AdvertisementCreateNestedManyWithoutOrganizationInput");
const UserCreateNestedManyWithoutOrganizationInput_1 = require("../inputs/UserCreateNestedManyWithoutOrganizationInput");
let OrganizationCreateWithoutPropertiesInput = class OrganizationCreateWithoutPropertiesInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrganizationCreateWithoutPropertiesInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrganizationCreateWithoutPropertiesInput.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AddressCreateNestedOneWithoutOrganizationInput_1.AddressCreateNestedOneWithoutOrganizationInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AddressCreateNestedOneWithoutOrganizationInput_1.AddressCreateNestedOneWithoutOrganizationInput)
], OrganizationCreateWithoutPropertiesInput.prototype, "address", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateNestedManyWithoutOrganizationInput_1.UserCreateNestedManyWithoutOrganizationInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateNestedManyWithoutOrganizationInput_1.UserCreateNestedManyWithoutOrganizationInput)
], OrganizationCreateWithoutPropertiesInput.prototype, "members", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementCreateNestedManyWithoutOrganizationInput_1.AdvertisementCreateNestedManyWithoutOrganizationInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementCreateNestedManyWithoutOrganizationInput_1.AdvertisementCreateNestedManyWithoutOrganizationInput)
], OrganizationCreateWithoutPropertiesInput.prototype, "advertisement", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], OrganizationCreateWithoutPropertiesInput.prototype, "isVerified", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], OrganizationCreateWithoutPropertiesInput.prototype, "isRegistrated", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], OrganizationCreateWithoutPropertiesInput.prototype, "isDeleted", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], OrganizationCreateWithoutPropertiesInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], OrganizationCreateWithoutPropertiesInput.prototype, "updatedAt", void 0);
OrganizationCreateWithoutPropertiesInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("OrganizationCreateWithoutPropertiesInput", {
        isAbstract: true
    })
], OrganizationCreateWithoutPropertiesInput);
exports.OrganizationCreateWithoutPropertiesInput = OrganizationCreateWithoutPropertiesInput;
