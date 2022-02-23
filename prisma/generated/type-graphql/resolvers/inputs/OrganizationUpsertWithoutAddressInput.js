"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationUpsertWithoutAddressInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const OrganizationCreateWithoutAddressInput_1 = require("../inputs/OrganizationCreateWithoutAddressInput");
const OrganizationUpdateWithoutAddressInput_1 = require("../inputs/OrganizationUpdateWithoutAddressInput");
let OrganizationUpsertWithoutAddressInput = class OrganizationUpsertWithoutAddressInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => OrganizationUpdateWithoutAddressInput_1.OrganizationUpdateWithoutAddressInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", OrganizationUpdateWithoutAddressInput_1.OrganizationUpdateWithoutAddressInput)
], OrganizationUpsertWithoutAddressInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => OrganizationCreateWithoutAddressInput_1.OrganizationCreateWithoutAddressInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", OrganizationCreateWithoutAddressInput_1.OrganizationCreateWithoutAddressInput)
], OrganizationUpsertWithoutAddressInput.prototype, "create", void 0);
OrganizationUpsertWithoutAddressInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("OrganizationUpsertWithoutAddressInput", {
        isAbstract: true
    })
], OrganizationUpsertWithoutAddressInput);
exports.OrganizationUpsertWithoutAddressInput = OrganizationUpsertWithoutAddressInput;
