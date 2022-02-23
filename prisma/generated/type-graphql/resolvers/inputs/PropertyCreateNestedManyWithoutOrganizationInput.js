"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyCreateNestedManyWithoutOrganizationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PropertyCreateManyOrganizationInputEnvelope_1 = require("../inputs/PropertyCreateManyOrganizationInputEnvelope");
const PropertyCreateOrConnectWithoutOrganizationInput_1 = require("../inputs/PropertyCreateOrConnectWithoutOrganizationInput");
const PropertyCreateWithoutOrganizationInput_1 = require("../inputs/PropertyCreateWithoutOrganizationInput");
const PropertyWhereUniqueInput_1 = require("../inputs/PropertyWhereUniqueInput");
let PropertyCreateNestedManyWithoutOrganizationInput = class PropertyCreateNestedManyWithoutOrganizationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PropertyCreateWithoutOrganizationInput_1.PropertyCreateWithoutOrganizationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PropertyCreateNestedManyWithoutOrganizationInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PropertyCreateOrConnectWithoutOrganizationInput_1.PropertyCreateOrConnectWithoutOrganizationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PropertyCreateNestedManyWithoutOrganizationInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyCreateManyOrganizationInputEnvelope_1.PropertyCreateManyOrganizationInputEnvelope, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyCreateManyOrganizationInputEnvelope_1.PropertyCreateManyOrganizationInputEnvelope)
], PropertyCreateNestedManyWithoutOrganizationInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PropertyWhereUniqueInput_1.PropertyWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PropertyCreateNestedManyWithoutOrganizationInput.prototype, "connect", void 0);
PropertyCreateNestedManyWithoutOrganizationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PropertyCreateNestedManyWithoutOrganizationInput", {
        isAbstract: true
    })
], PropertyCreateNestedManyWithoutOrganizationInput);
exports.PropertyCreateNestedManyWithoutOrganizationInput = PropertyCreateNestedManyWithoutOrganizationInput;
