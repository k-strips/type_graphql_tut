"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressCreateNestedOneWithoutOrganizationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AddressCreateOrConnectWithoutOrganizationInput_1 = require("../inputs/AddressCreateOrConnectWithoutOrganizationInput");
const AddressCreateWithoutOrganizationInput_1 = require("../inputs/AddressCreateWithoutOrganizationInput");
const AddressWhereUniqueInput_1 = require("../inputs/AddressWhereUniqueInput");
let AddressCreateNestedOneWithoutOrganizationInput = class AddressCreateNestedOneWithoutOrganizationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AddressCreateWithoutOrganizationInput_1.AddressCreateWithoutOrganizationInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AddressCreateWithoutOrganizationInput_1.AddressCreateWithoutOrganizationInput)
], AddressCreateNestedOneWithoutOrganizationInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AddressCreateOrConnectWithoutOrganizationInput_1.AddressCreateOrConnectWithoutOrganizationInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AddressCreateOrConnectWithoutOrganizationInput_1.AddressCreateOrConnectWithoutOrganizationInput)
], AddressCreateNestedOneWithoutOrganizationInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AddressWhereUniqueInput_1.AddressWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AddressWhereUniqueInput_1.AddressWhereUniqueInput)
], AddressCreateNestedOneWithoutOrganizationInput.prototype, "connect", void 0);
AddressCreateNestedOneWithoutOrganizationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AddressCreateNestedOneWithoutOrganizationInput", {
        isAbstract: true
    })
], AddressCreateNestedOneWithoutOrganizationInput);
exports.AddressCreateNestedOneWithoutOrganizationInput = AddressCreateNestedOneWithoutOrganizationInput;
