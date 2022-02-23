"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationCreateWithoutMembersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AddressCreateNestedOneWithoutOrganizationInput_1 = require("../inputs/AddressCreateNestedOneWithoutOrganizationInput");
const AdvertisementCreateNestedManyWithoutOrganizationInput_1 = require("../inputs/AdvertisementCreateNestedManyWithoutOrganizationInput");
const PropertyCreateNestedManyWithoutOrganizationInput_1 = require("../inputs/PropertyCreateNestedManyWithoutOrganizationInput");
let OrganizationCreateWithoutMembersInput = class OrganizationCreateWithoutMembersInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrganizationCreateWithoutMembersInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], OrganizationCreateWithoutMembersInput.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AddressCreateNestedOneWithoutOrganizationInput_1.AddressCreateNestedOneWithoutOrganizationInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AddressCreateNestedOneWithoutOrganizationInput_1.AddressCreateNestedOneWithoutOrganizationInput)
], OrganizationCreateWithoutMembersInput.prototype, "address", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyCreateNestedManyWithoutOrganizationInput_1.PropertyCreateNestedManyWithoutOrganizationInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyCreateNestedManyWithoutOrganizationInput_1.PropertyCreateNestedManyWithoutOrganizationInput)
], OrganizationCreateWithoutMembersInput.prototype, "properties", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementCreateNestedManyWithoutOrganizationInput_1.AdvertisementCreateNestedManyWithoutOrganizationInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementCreateNestedManyWithoutOrganizationInput_1.AdvertisementCreateNestedManyWithoutOrganizationInput)
], OrganizationCreateWithoutMembersInput.prototype, "advertisement", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], OrganizationCreateWithoutMembersInput.prototype, "isVerified", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], OrganizationCreateWithoutMembersInput.prototype, "isRegistrated", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], OrganizationCreateWithoutMembersInput.prototype, "isDeleted", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], OrganizationCreateWithoutMembersInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], OrganizationCreateWithoutMembersInput.prototype, "updatedAt", void 0);
OrganizationCreateWithoutMembersInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("OrganizationCreateWithoutMembersInput", {
        isAbstract: true
    })
], OrganizationCreateWithoutMembersInput);
exports.OrganizationCreateWithoutMembersInput = OrganizationCreateWithoutMembersInput;
