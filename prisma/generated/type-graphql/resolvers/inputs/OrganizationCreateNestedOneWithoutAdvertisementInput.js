"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationCreateNestedOneWithoutAdvertisementInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const OrganizationCreateOrConnectWithoutAdvertisementInput_1 = require("../inputs/OrganizationCreateOrConnectWithoutAdvertisementInput");
const OrganizationCreateWithoutAdvertisementInput_1 = require("../inputs/OrganizationCreateWithoutAdvertisementInput");
const OrganizationWhereUniqueInput_1 = require("../inputs/OrganizationWhereUniqueInput");
let OrganizationCreateNestedOneWithoutAdvertisementInput = class OrganizationCreateNestedOneWithoutAdvertisementInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => OrganizationCreateWithoutAdvertisementInput_1.OrganizationCreateWithoutAdvertisementInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", OrganizationCreateWithoutAdvertisementInput_1.OrganizationCreateWithoutAdvertisementInput)
], OrganizationCreateNestedOneWithoutAdvertisementInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => OrganizationCreateOrConnectWithoutAdvertisementInput_1.OrganizationCreateOrConnectWithoutAdvertisementInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", OrganizationCreateOrConnectWithoutAdvertisementInput_1.OrganizationCreateOrConnectWithoutAdvertisementInput)
], OrganizationCreateNestedOneWithoutAdvertisementInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => OrganizationWhereUniqueInput_1.OrganizationWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", OrganizationWhereUniqueInput_1.OrganizationWhereUniqueInput)
], OrganizationCreateNestedOneWithoutAdvertisementInput.prototype, "connect", void 0);
OrganizationCreateNestedOneWithoutAdvertisementInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("OrganizationCreateNestedOneWithoutAdvertisementInput", {
        isAbstract: true
    })
], OrganizationCreateNestedOneWithoutAdvertisementInput);
exports.OrganizationCreateNestedOneWithoutAdvertisementInput = OrganizationCreateNestedOneWithoutAdvertisementInput;
