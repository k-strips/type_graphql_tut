"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyUpdateWithWhereUniqueWithoutOrganizationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PropertyUpdateWithoutOrganizationInput_1 = require("../inputs/PropertyUpdateWithoutOrganizationInput");
const PropertyWhereUniqueInput_1 = require("../inputs/PropertyWhereUniqueInput");
let PropertyUpdateWithWhereUniqueWithoutOrganizationInput = class PropertyUpdateWithWhereUniqueWithoutOrganizationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyWhereUniqueInput_1.PropertyWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PropertyWhereUniqueInput_1.PropertyWhereUniqueInput)
], PropertyUpdateWithWhereUniqueWithoutOrganizationInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyUpdateWithoutOrganizationInput_1.PropertyUpdateWithoutOrganizationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PropertyUpdateWithoutOrganizationInput_1.PropertyUpdateWithoutOrganizationInput)
], PropertyUpdateWithWhereUniqueWithoutOrganizationInput.prototype, "data", void 0);
PropertyUpdateWithWhereUniqueWithoutOrganizationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PropertyUpdateWithWhereUniqueWithoutOrganizationInput", {
        isAbstract: true
    })
], PropertyUpdateWithWhereUniqueWithoutOrganizationInput);
exports.PropertyUpdateWithWhereUniqueWithoutOrganizationInput = PropertyUpdateWithWhereUniqueWithoutOrganizationInput;
