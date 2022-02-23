"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationCreateWithoutAdvertisementInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AddressCreateNestedOneWithoutOrganizationInput_1 = require("../inputs/AddressCreateNestedOneWithoutOrganizationInput");
const PropertyCreateNestedManyWithoutOrganizationInput_1 = require("../inputs/PropertyCreateNestedManyWithoutOrganizationInput");
const UserCreateNestedManyWithoutOrganizationInput_1 = require("../inputs/UserCreateNestedManyWithoutOrganizationInput");
let OrganizationCreateWithoutAdvertisementInput = class OrganizationCreateWithoutAdvertisementInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrganizationCreateWithoutAdvertisementInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrganizationCreateWithoutAdvertisementInput.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AddressCreateNestedOneWithoutOrganizationInput_1.AddressCreateNestedOneWithoutOrganizationInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AddressCreateNestedOneWithoutOrganizationInput_1.AddressCreateNestedOneWithoutOrganizationInput)
], OrganizationCreateWithoutAdvertisementInput.prototype, "address", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateNestedManyWithoutOrganizationInput_1.UserCreateNestedManyWithoutOrganizationInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateNestedManyWithoutOrganizationInput_1.UserCreateNestedManyWithoutOrganizationInput)
], OrganizationCreateWithoutAdvertisementInput.prototype, "members", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyCreateNestedManyWithoutOrganizationInput_1.PropertyCreateNestedManyWithoutOrganizationInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyCreateNestedManyWithoutOrganizationInput_1.PropertyCreateNestedManyWithoutOrganizationInput)
], OrganizationCreateWithoutAdvertisementInput.prototype, "properties", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], OrganizationCreateWithoutAdvertisementInput.prototype, "isVerified", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], OrganizationCreateWithoutAdvertisementInput.prototype, "isRegistrated", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], OrganizationCreateWithoutAdvertisementInput.prototype, "isDeleted", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], OrganizationCreateWithoutAdvertisementInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], OrganizationCreateWithoutAdvertisementInput.prototype, "updatedAt", void 0);
OrganizationCreateWithoutAdvertisementInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("OrganizationCreateWithoutAdvertisementInput", {
        isAbstract: true
    })
], OrganizationCreateWithoutAdvertisementInput);
exports.OrganizationCreateWithoutAdvertisementInput = OrganizationCreateWithoutAdvertisementInput;
