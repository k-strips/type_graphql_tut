"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyUpsertWithWhereUniqueWithoutOrganizationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PropertyCreateWithoutOrganizationInput_1 = require("../inputs/PropertyCreateWithoutOrganizationInput");
const PropertyUpdateWithoutOrganizationInput_1 = require("../inputs/PropertyUpdateWithoutOrganizationInput");
const PropertyWhereUniqueInput_1 = require("../inputs/PropertyWhereUniqueInput");
let PropertyUpsertWithWhereUniqueWithoutOrganizationInput = class PropertyUpsertWithWhereUniqueWithoutOrganizationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyWhereUniqueInput_1.PropertyWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PropertyWhereUniqueInput_1.PropertyWhereUniqueInput)
], PropertyUpsertWithWhereUniqueWithoutOrganizationInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyUpdateWithoutOrganizationInput_1.PropertyUpdateWithoutOrganizationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PropertyUpdateWithoutOrganizationInput_1.PropertyUpdateWithoutOrganizationInput)
], PropertyUpsertWithWhereUniqueWithoutOrganizationInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyCreateWithoutOrganizationInput_1.PropertyCreateWithoutOrganizationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PropertyCreateWithoutOrganizationInput_1.PropertyCreateWithoutOrganizationInput)
], PropertyUpsertWithWhereUniqueWithoutOrganizationInput.prototype, "create", void 0);
PropertyUpsertWithWhereUniqueWithoutOrganizationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PropertyUpsertWithWhereUniqueWithoutOrganizationInput", {
        isAbstract: true
    })
], PropertyUpsertWithWhereUniqueWithoutOrganizationInput);
exports.PropertyUpsertWithWhereUniqueWithoutOrganizationInput = PropertyUpsertWithWhereUniqueWithoutOrganizationInput;
