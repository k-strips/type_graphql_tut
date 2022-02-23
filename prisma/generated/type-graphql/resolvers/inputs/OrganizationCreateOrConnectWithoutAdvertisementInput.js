"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationCreateOrConnectWithoutAdvertisementInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const OrganizationCreateWithoutAdvertisementInput_1 = require("../inputs/OrganizationCreateWithoutAdvertisementInput");
const OrganizationWhereUniqueInput_1 = require("../inputs/OrganizationWhereUniqueInput");
let OrganizationCreateOrConnectWithoutAdvertisementInput = class OrganizationCreateOrConnectWithoutAdvertisementInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => OrganizationWhereUniqueInput_1.OrganizationWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", OrganizationWhereUniqueInput_1.OrganizationWhereUniqueInput)
], OrganizationCreateOrConnectWithoutAdvertisementInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => OrganizationCreateWithoutAdvertisementInput_1.OrganizationCreateWithoutAdvertisementInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", OrganizationCreateWithoutAdvertisementInput_1.OrganizationCreateWithoutAdvertisementInput)
], OrganizationCreateOrConnectWithoutAdvertisementInput.prototype, "create", void 0);
OrganizationCreateOrConnectWithoutAdvertisementInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("OrganizationCreateOrConnectWithoutAdvertisementInput", {
        isAbstract: true
    })
], OrganizationCreateOrConnectWithoutAdvertisementInput);
exports.OrganizationCreateOrConnectWithoutAdvertisementInput = OrganizationCreateOrConnectWithoutAdvertisementInput;
