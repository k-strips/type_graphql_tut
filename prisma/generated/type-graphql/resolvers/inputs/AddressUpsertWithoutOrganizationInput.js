"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressUpsertWithoutOrganizationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AddressCreateWithoutOrganizationInput_1 = require("../inputs/AddressCreateWithoutOrganizationInput");
const AddressUpdateWithoutOrganizationInput_1 = require("../inputs/AddressUpdateWithoutOrganizationInput");
let AddressUpsertWithoutOrganizationInput = class AddressUpsertWithoutOrganizationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AddressUpdateWithoutOrganizationInput_1.AddressUpdateWithoutOrganizationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AddressUpdateWithoutOrganizationInput_1.AddressUpdateWithoutOrganizationInput)
], AddressUpsertWithoutOrganizationInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AddressCreateWithoutOrganizationInput_1.AddressCreateWithoutOrganizationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AddressCreateWithoutOrganizationInput_1.AddressCreateWithoutOrganizationInput)
], AddressUpsertWithoutOrganizationInput.prototype, "create", void 0);
AddressUpsertWithoutOrganizationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AddressUpsertWithoutOrganizationInput", {
        isAbstract: true
    })
], AddressUpsertWithoutOrganizationInput);
exports.AddressUpsertWithoutOrganizationInput = AddressUpsertWithoutOrganizationInput;
