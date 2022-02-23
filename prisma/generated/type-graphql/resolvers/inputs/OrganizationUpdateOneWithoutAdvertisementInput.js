"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationUpdateOneWithoutAdvertisementInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const OrganizationCreateOrConnectWithoutAdvertisementInput_1 = require("../inputs/OrganizationCreateOrConnectWithoutAdvertisementInput");
const OrganizationCreateWithoutAdvertisementInput_1 = require("../inputs/OrganizationCreateWithoutAdvertisementInput");
const OrganizationUpdateWithoutAdvertisementInput_1 = require("../inputs/OrganizationUpdateWithoutAdvertisementInput");
const OrganizationUpsertWithoutAdvertisementInput_1 = require("../inputs/OrganizationUpsertWithoutAdvertisementInput");
const OrganizationWhereUniqueInput_1 = require("../inputs/OrganizationWhereUniqueInput");
let OrganizationUpdateOneWithoutAdvertisementInput = class OrganizationUpdateOneWithoutAdvertisementInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => OrganizationCreateWithoutAdvertisementInput_1.OrganizationCreateWithoutAdvertisementInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", OrganizationCreateWithoutAdvertisementInput_1.OrganizationCreateWithoutAdvertisementInput)
], OrganizationUpdateOneWithoutAdvertisementInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => OrganizationCreateOrConnectWithoutAdvertisementInput_1.OrganizationCreateOrConnectWithoutAdvertisementInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", OrganizationCreateOrConnectWithoutAdvertisementInput_1.OrganizationCreateOrConnectWithoutAdvertisementInput)
], OrganizationUpdateOneWithoutAdvertisementInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => OrganizationUpsertWithoutAdvertisementInput_1.OrganizationUpsertWithoutAdvertisementInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", OrganizationUpsertWithoutAdvertisementInput_1.OrganizationUpsertWithoutAdvertisementInput)
], OrganizationUpdateOneWithoutAdvertisementInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], OrganizationUpdateOneWithoutAdvertisementInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], OrganizationUpdateOneWithoutAdvertisementInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => OrganizationWhereUniqueInput_1.OrganizationWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", OrganizationWhereUniqueInput_1.OrganizationWhereUniqueInput)
], OrganizationUpdateOneWithoutAdvertisementInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => OrganizationUpdateWithoutAdvertisementInput_1.OrganizationUpdateWithoutAdvertisementInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", OrganizationUpdateWithoutAdvertisementInput_1.OrganizationUpdateWithoutAdvertisementInput)
], OrganizationUpdateOneWithoutAdvertisementInput.prototype, "update", void 0);
OrganizationUpdateOneWithoutAdvertisementInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("OrganizationUpdateOneWithoutAdvertisementInput", {
        isAbstract: true
    })
], OrganizationUpdateOneWithoutAdvertisementInput);
exports.OrganizationUpdateOneWithoutAdvertisementInput = OrganizationUpdateOneWithoutAdvertisementInput;
