"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressCreateOrConnectWithoutOrganizationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AddressCreateWithoutOrganizationInput_1 = require("../inputs/AddressCreateWithoutOrganizationInput");
const AddressWhereUniqueInput_1 = require("../inputs/AddressWhereUniqueInput");
let AddressCreateOrConnectWithoutOrganizationInput = class AddressCreateOrConnectWithoutOrganizationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AddressWhereUniqueInput_1.AddressWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AddressWhereUniqueInput_1.AddressWhereUniqueInput)
], AddressCreateOrConnectWithoutOrganizationInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AddressCreateWithoutOrganizationInput_1.AddressCreateWithoutOrganizationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AddressCreateWithoutOrganizationInput_1.AddressCreateWithoutOrganizationInput)
], AddressCreateOrConnectWithoutOrganizationInput.prototype, "create", void 0);
AddressCreateOrConnectWithoutOrganizationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AddressCreateOrConnectWithoutOrganizationInput", {
        isAbstract: true
    })
], AddressCreateOrConnectWithoutOrganizationInput);
exports.AddressCreateOrConnectWithoutOrganizationInput = AddressCreateOrConnectWithoutOrganizationInput;
