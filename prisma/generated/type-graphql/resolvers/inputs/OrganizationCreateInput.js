"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AddressCreateNestedOneWithoutOrganizationInput_1 = require("../inputs/AddressCreateNestedOneWithoutOrganizationInput");
const AdvertisementCreateNestedManyWithoutOrganizationInput_1 = require("../inputs/AdvertisementCreateNestedManyWithoutOrganizationInput");
const PropertyCreateNestedManyWithoutOrganizationInput_1 = require("../inputs/PropertyCreateNestedManyWithoutOrganizationInput");
const UserCreateNestedManyWithoutOrganizationInput_1 = require("../inputs/UserCreateNestedManyWithoutOrganizationInput");
let OrganizationCreateInput = class OrganizationCreateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrganizationCreateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrganizationCreateInput.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AddressCreateNestedOneWithoutOrganizationInput_1.AddressCreateNestedOneWithoutOrganizationInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AddressCreateNestedOneWithoutOrganizationInput_1.AddressCreateNestedOneWithoutOrganizationInput)
], OrganizationCreateInput.prototype, "address", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateNestedManyWithoutOrganizationInput_1.UserCreateNestedManyWithoutOrganizationInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateNestedManyWithoutOrganizationInput_1.UserCreateNestedManyWithoutOrganizationInput)
], OrganizationCreateInput.prototype, "members", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyCreateNestedManyWithoutOrganizationInput_1.PropertyCreateNestedManyWithoutOrganizationInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyCreateNestedManyWithoutOrganizationInput_1.PropertyCreateNestedManyWithoutOrganizationInput)
], OrganizationCreateInput.prototype, "properties", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementCreateNestedManyWithoutOrganizationInput_1.AdvertisementCreateNestedManyWithoutOrganizationInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementCreateNestedManyWithoutOrganizationInput_1.AdvertisementCreateNestedManyWithoutOrganizationInput)
], OrganizationCreateInput.prototype, "advertisement", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], OrganizationCreateInput.prototype, "isVerified", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], OrganizationCreateInput.prototype, "isRegistrated", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], OrganizationCreateInput.prototype, "isDeleted", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], OrganizationCreateInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], OrganizationCreateInput.prototype, "updatedAt", void 0);
OrganizationCreateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("OrganizationCreateInput", {
        isAbstract: true
    })
], OrganizationCreateInput);
exports.OrganizationCreateInput = OrganizationCreateInput;
