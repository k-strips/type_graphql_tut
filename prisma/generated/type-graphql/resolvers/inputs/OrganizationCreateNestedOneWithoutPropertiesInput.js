"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationCreateNestedOneWithoutPropertiesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const OrganizationCreateOrConnectWithoutPropertiesInput_1 = require("../inputs/OrganizationCreateOrConnectWithoutPropertiesInput");
const OrganizationCreateWithoutPropertiesInput_1 = require("../inputs/OrganizationCreateWithoutPropertiesInput");
const OrganizationWhereUniqueInput_1 = require("../inputs/OrganizationWhereUniqueInput");
let OrganizationCreateNestedOneWithoutPropertiesInput = class OrganizationCreateNestedOneWithoutPropertiesInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => OrganizationCreateWithoutPropertiesInput_1.OrganizationCreateWithoutPropertiesInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", OrganizationCreateWithoutPropertiesInput_1.OrganizationCreateWithoutPropertiesInput)
], OrganizationCreateNestedOneWithoutPropertiesInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => OrganizationCreateOrConnectWithoutPropertiesInput_1.OrganizationCreateOrConnectWithoutPropertiesInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", OrganizationCreateOrConnectWithoutPropertiesInput_1.OrganizationCreateOrConnectWithoutPropertiesInput)
], OrganizationCreateNestedOneWithoutPropertiesInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => OrganizationWhereUniqueInput_1.OrganizationWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", OrganizationWhereUniqueInput_1.OrganizationWhereUniqueInput)
], OrganizationCreateNestedOneWithoutPropertiesInput.prototype, "connect", void 0);
OrganizationCreateNestedOneWithoutPropertiesInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("OrganizationCreateNestedOneWithoutPropertiesInput", {
        isAbstract: true
    })
], OrganizationCreateNestedOneWithoutPropertiesInput);
exports.OrganizationCreateNestedOneWithoutPropertiesInput = OrganizationCreateNestedOneWithoutPropertiesInput;
