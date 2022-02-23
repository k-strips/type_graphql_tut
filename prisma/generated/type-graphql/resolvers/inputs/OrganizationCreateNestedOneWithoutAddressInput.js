"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationCreateNestedOneWithoutAddressInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const OrganizationCreateOrConnectWithoutAddressInput_1 = require("../inputs/OrganizationCreateOrConnectWithoutAddressInput");
const OrganizationCreateWithoutAddressInput_1 = require("../inputs/OrganizationCreateWithoutAddressInput");
const OrganizationWhereUniqueInput_1 = require("../inputs/OrganizationWhereUniqueInput");
let OrganizationCreateNestedOneWithoutAddressInput = class OrganizationCreateNestedOneWithoutAddressInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => OrganizationCreateWithoutAddressInput_1.OrganizationCreateWithoutAddressInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", OrganizationCreateWithoutAddressInput_1.OrganizationCreateWithoutAddressInput)
], OrganizationCreateNestedOneWithoutAddressInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => OrganizationCreateOrConnectWithoutAddressInput_1.OrganizationCreateOrConnectWithoutAddressInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", OrganizationCreateOrConnectWithoutAddressInput_1.OrganizationCreateOrConnectWithoutAddressInput)
], OrganizationCreateNestedOneWithoutAddressInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => OrganizationWhereUniqueInput_1.OrganizationWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", OrganizationWhereUniqueInput_1.OrganizationWhereUniqueInput)
], OrganizationCreateNestedOneWithoutAddressInput.prototype, "connect", void 0);
OrganizationCreateNestedOneWithoutAddressInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("OrganizationCreateNestedOneWithoutAddressInput", {
        isAbstract: true
    })
], OrganizationCreateNestedOneWithoutAddressInput);
exports.OrganizationCreateNestedOneWithoutAddressInput = OrganizationCreateNestedOneWithoutAddressInput;
