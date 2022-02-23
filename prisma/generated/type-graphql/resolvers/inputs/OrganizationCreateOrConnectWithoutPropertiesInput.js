"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationCreateOrConnectWithoutPropertiesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const OrganizationCreateWithoutPropertiesInput_1 = require("../inputs/OrganizationCreateWithoutPropertiesInput");
const OrganizationWhereUniqueInput_1 = require("../inputs/OrganizationWhereUniqueInput");
let OrganizationCreateOrConnectWithoutPropertiesInput = class OrganizationCreateOrConnectWithoutPropertiesInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => OrganizationWhereUniqueInput_1.OrganizationWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", OrganizationWhereUniqueInput_1.OrganizationWhereUniqueInput)
], OrganizationCreateOrConnectWithoutPropertiesInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => OrganizationCreateWithoutPropertiesInput_1.OrganizationCreateWithoutPropertiesInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", OrganizationCreateWithoutPropertiesInput_1.OrganizationCreateWithoutPropertiesInput)
], OrganizationCreateOrConnectWithoutPropertiesInput.prototype, "create", void 0);
OrganizationCreateOrConnectWithoutPropertiesInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("OrganizationCreateOrConnectWithoutPropertiesInput", {
        isAbstract: true
    })
], OrganizationCreateOrConnectWithoutPropertiesInput);
exports.OrganizationCreateOrConnectWithoutPropertiesInput = OrganizationCreateOrConnectWithoutPropertiesInput;
