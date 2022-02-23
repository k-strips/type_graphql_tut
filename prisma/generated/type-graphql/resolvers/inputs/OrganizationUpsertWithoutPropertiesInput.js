"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationUpsertWithoutPropertiesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const OrganizationCreateWithoutPropertiesInput_1 = require("../inputs/OrganizationCreateWithoutPropertiesInput");
const OrganizationUpdateWithoutPropertiesInput_1 = require("../inputs/OrganizationUpdateWithoutPropertiesInput");
let OrganizationUpsertWithoutPropertiesInput = class OrganizationUpsertWithoutPropertiesInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => OrganizationUpdateWithoutPropertiesInput_1.OrganizationUpdateWithoutPropertiesInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", OrganizationUpdateWithoutPropertiesInput_1.OrganizationUpdateWithoutPropertiesInput)
], OrganizationUpsertWithoutPropertiesInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => OrganizationCreateWithoutPropertiesInput_1.OrganizationCreateWithoutPropertiesInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", OrganizationCreateWithoutPropertiesInput_1.OrganizationCreateWithoutPropertiesInput)
], OrganizationUpsertWithoutPropertiesInput.prototype, "create", void 0);
OrganizationUpsertWithoutPropertiesInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("OrganizationUpsertWithoutPropertiesInput", {
        isAbstract: true
    })
], OrganizationUpsertWithoutPropertiesInput);
exports.OrganizationUpsertWithoutPropertiesInput = OrganizationUpsertWithoutPropertiesInput;
