"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyCreateOrConnectWithoutOrganizationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PropertyCreateWithoutOrganizationInput_1 = require("../inputs/PropertyCreateWithoutOrganizationInput");
const PropertyWhereUniqueInput_1 = require("../inputs/PropertyWhereUniqueInput");
let PropertyCreateOrConnectWithoutOrganizationInput = class PropertyCreateOrConnectWithoutOrganizationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyWhereUniqueInput_1.PropertyWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PropertyWhereUniqueInput_1.PropertyWhereUniqueInput)
], PropertyCreateOrConnectWithoutOrganizationInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyCreateWithoutOrganizationInput_1.PropertyCreateWithoutOrganizationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PropertyCreateWithoutOrganizationInput_1.PropertyCreateWithoutOrganizationInput)
], PropertyCreateOrConnectWithoutOrganizationInput.prototype, "create", void 0);
PropertyCreateOrConnectWithoutOrganizationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PropertyCreateOrConnectWithoutOrganizationInput", {
        isAbstract: true
    })
], PropertyCreateOrConnectWithoutOrganizationInput);
exports.PropertyCreateOrConnectWithoutOrganizationInput = PropertyCreateOrConnectWithoutOrganizationInput;
