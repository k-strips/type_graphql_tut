"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const OrganizationCreateNestedOneWithoutAddressInput_1 = require("../inputs/OrganizationCreateNestedOneWithoutAddressInput");
const UserCreateNestedOneWithoutAddressInput_1 = require("../inputs/UserCreateNestedOneWithoutAddressInput");
let AddressCreateInput = class AddressCreateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AddressCreateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AddressCreateInput.prototype, "email", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AddressCreateInput.prototype, "mobile", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AddressCreateInput.prototype, "work", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AddressCreateInput.prototype, "office", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], AddressCreateInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], AddressCreateInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => OrganizationCreateNestedOneWithoutAddressInput_1.OrganizationCreateNestedOneWithoutAddressInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", OrganizationCreateNestedOneWithoutAddressInput_1.OrganizationCreateNestedOneWithoutAddressInput)
], AddressCreateInput.prototype, "Organization", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutAddressInput_1.UserCreateNestedOneWithoutAddressInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateNestedOneWithoutAddressInput_1.UserCreateNestedOneWithoutAddressInput)
], AddressCreateInput.prototype, "User", void 0);
AddressCreateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AddressCreateInput", {
        isAbstract: true
    })
], AddressCreateInput);
exports.AddressCreateInput = AddressCreateInput;
