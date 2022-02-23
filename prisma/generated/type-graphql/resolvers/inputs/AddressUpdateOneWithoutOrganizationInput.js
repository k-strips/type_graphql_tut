"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressUpdateOneWithoutOrganizationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AddressCreateOrConnectWithoutOrganizationInput_1 = require("../inputs/AddressCreateOrConnectWithoutOrganizationInput");
const AddressCreateWithoutOrganizationInput_1 = require("../inputs/AddressCreateWithoutOrganizationInput");
const AddressUpdateWithoutOrganizationInput_1 = require("../inputs/AddressUpdateWithoutOrganizationInput");
const AddressUpsertWithoutOrganizationInput_1 = require("../inputs/AddressUpsertWithoutOrganizationInput");
const AddressWhereUniqueInput_1 = require("../inputs/AddressWhereUniqueInput");
let AddressUpdateOneWithoutOrganizationInput = class AddressUpdateOneWithoutOrganizationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AddressCreateWithoutOrganizationInput_1.AddressCreateWithoutOrganizationInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AddressCreateWithoutOrganizationInput_1.AddressCreateWithoutOrganizationInput)
], AddressUpdateOneWithoutOrganizationInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AddressCreateOrConnectWithoutOrganizationInput_1.AddressCreateOrConnectWithoutOrganizationInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AddressCreateOrConnectWithoutOrganizationInput_1.AddressCreateOrConnectWithoutOrganizationInput)
], AddressUpdateOneWithoutOrganizationInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AddressUpsertWithoutOrganizationInput_1.AddressUpsertWithoutOrganizationInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AddressUpsertWithoutOrganizationInput_1.AddressUpsertWithoutOrganizationInput)
], AddressUpdateOneWithoutOrganizationInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], AddressUpdateOneWithoutOrganizationInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], AddressUpdateOneWithoutOrganizationInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AddressWhereUniqueInput_1.AddressWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AddressWhereUniqueInput_1.AddressWhereUniqueInput)
], AddressUpdateOneWithoutOrganizationInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AddressUpdateWithoutOrganizationInput_1.AddressUpdateWithoutOrganizationInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AddressUpdateWithoutOrganizationInput_1.AddressUpdateWithoutOrganizationInput)
], AddressUpdateOneWithoutOrganizationInput.prototype, "update", void 0);
AddressUpdateOneWithoutOrganizationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AddressUpdateOneWithoutOrganizationInput", {
        isAbstract: true
    })
], AddressUpdateOneWithoutOrganizationInput);
exports.AddressUpdateOneWithoutOrganizationInput = AddressUpdateOneWithoutOrganizationInput;
