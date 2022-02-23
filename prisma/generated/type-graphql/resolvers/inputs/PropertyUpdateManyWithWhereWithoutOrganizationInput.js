"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyUpdateManyWithWhereWithoutOrganizationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PropertyScalarWhereInput_1 = require("../inputs/PropertyScalarWhereInput");
const PropertyUpdateManyMutationInput_1 = require("../inputs/PropertyUpdateManyMutationInput");
let PropertyUpdateManyWithWhereWithoutOrganizationInput = class PropertyUpdateManyWithWhereWithoutOrganizationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyScalarWhereInput_1.PropertyScalarWhereInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PropertyScalarWhereInput_1.PropertyScalarWhereInput)
], PropertyUpdateManyWithWhereWithoutOrganizationInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyUpdateManyMutationInput_1.PropertyUpdateManyMutationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PropertyUpdateManyMutationInput_1.PropertyUpdateManyMutationInput)
], PropertyUpdateManyWithWhereWithoutOrganizationInput.prototype, "data", void 0);
PropertyUpdateManyWithWhereWithoutOrganizationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PropertyUpdateManyWithWhereWithoutOrganizationInput", {
        isAbstract: true
    })
], PropertyUpdateManyWithWhereWithoutOrganizationInput);
exports.PropertyUpdateManyWithWhereWithoutOrganizationInput = PropertyUpdateManyWithWhereWithoutOrganizationInput;
