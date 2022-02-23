"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationCreateOrConnectWithoutAddressInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const OrganizationCreateWithoutAddressInput_1 = require("../inputs/OrganizationCreateWithoutAddressInput");
const OrganizationWhereUniqueInput_1 = require("../inputs/OrganizationWhereUniqueInput");
let OrganizationCreateOrConnectWithoutAddressInput = class OrganizationCreateOrConnectWithoutAddressInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => OrganizationWhereUniqueInput_1.OrganizationWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", OrganizationWhereUniqueInput_1.OrganizationWhereUniqueInput)
], OrganizationCreateOrConnectWithoutAddressInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => OrganizationCreateWithoutAddressInput_1.OrganizationCreateWithoutAddressInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", OrganizationCreateWithoutAddressInput_1.OrganizationCreateWithoutAddressInput)
], OrganizationCreateOrConnectWithoutAddressInput.prototype, "create", void 0);
OrganizationCreateOrConnectWithoutAddressInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("OrganizationCreateOrConnectWithoutAddressInput", {
        isAbstract: true
    })
], OrganizationCreateOrConnectWithoutAddressInput);
exports.OrganizationCreateOrConnectWithoutAddressInput = OrganizationCreateOrConnectWithoutAddressInput;
