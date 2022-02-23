"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationUpsertWithoutAdvertisementInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const OrganizationCreateWithoutAdvertisementInput_1 = require("../inputs/OrganizationCreateWithoutAdvertisementInput");
const OrganizationUpdateWithoutAdvertisementInput_1 = require("../inputs/OrganizationUpdateWithoutAdvertisementInput");
let OrganizationUpsertWithoutAdvertisementInput = class OrganizationUpsertWithoutAdvertisementInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => OrganizationUpdateWithoutAdvertisementInput_1.OrganizationUpdateWithoutAdvertisementInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", OrganizationUpdateWithoutAdvertisementInput_1.OrganizationUpdateWithoutAdvertisementInput)
], OrganizationUpsertWithoutAdvertisementInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => OrganizationCreateWithoutAdvertisementInput_1.OrganizationCreateWithoutAdvertisementInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", OrganizationCreateWithoutAdvertisementInput_1.OrganizationCreateWithoutAdvertisementInput)
], OrganizationUpsertWithoutAdvertisementInput.prototype, "create", void 0);
OrganizationUpsertWithoutAdvertisementInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("OrganizationUpsertWithoutAdvertisementInput", {
        isAbstract: true
    })
], OrganizationUpsertWithoutAdvertisementInput);
exports.OrganizationUpsertWithoutAdvertisementInput = OrganizationUpsertWithoutAdvertisementInput;
