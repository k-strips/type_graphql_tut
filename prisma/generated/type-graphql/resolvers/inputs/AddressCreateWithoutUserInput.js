"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressCreateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const OrganizationCreateNestedOneWithoutAddressInput_1 = require("../inputs/OrganizationCreateNestedOneWithoutAddressInput");
let AddressCreateWithoutUserInput = class AddressCreateWithoutUserInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AddressCreateWithoutUserInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AddressCreateWithoutUserInput.prototype, "email", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AddressCreateWithoutUserInput.prototype, "mobile", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AddressCreateWithoutUserInput.prototype, "work", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AddressCreateWithoutUserInput.prototype, "office", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], AddressCreateWithoutUserInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], AddressCreateWithoutUserInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => OrganizationCreateNestedOneWithoutAddressInput_1.OrganizationCreateNestedOneWithoutAddressInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", OrganizationCreateNestedOneWithoutAddressInput_1.OrganizationCreateNestedOneWithoutAddressInput)
], AddressCreateWithoutUserInput.prototype, "Organization", void 0);
AddressCreateWithoutUserInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AddressCreateWithoutUserInput", {
        isAbstract: true
    })
], AddressCreateWithoutUserInput);
exports.AddressCreateWithoutUserInput = AddressCreateWithoutUserInput;
