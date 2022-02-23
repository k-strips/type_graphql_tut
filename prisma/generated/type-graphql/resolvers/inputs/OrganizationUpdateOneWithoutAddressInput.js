"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationUpdateOneWithoutAddressInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const OrganizationCreateOrConnectWithoutAddressInput_1 = require("../inputs/OrganizationCreateOrConnectWithoutAddressInput");
const OrganizationCreateWithoutAddressInput_1 = require("../inputs/OrganizationCreateWithoutAddressInput");
const OrganizationUpdateWithoutAddressInput_1 = require("../inputs/OrganizationUpdateWithoutAddressInput");
const OrganizationUpsertWithoutAddressInput_1 = require("../inputs/OrganizationUpsertWithoutAddressInput");
const OrganizationWhereUniqueInput_1 = require("../inputs/OrganizationWhereUniqueInput");
let OrganizationUpdateOneWithoutAddressInput = class OrganizationUpdateOneWithoutAddressInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => OrganizationCreateWithoutAddressInput_1.OrganizationCreateWithoutAddressInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", OrganizationCreateWithoutAddressInput_1.OrganizationCreateWithoutAddressInput)
], OrganizationUpdateOneWithoutAddressInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => OrganizationCreateOrConnectWithoutAddressInput_1.OrganizationCreateOrConnectWithoutAddressInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", OrganizationCreateOrConnectWithoutAddressInput_1.OrganizationCreateOrConnectWithoutAddressInput)
], OrganizationUpdateOneWithoutAddressInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => OrganizationUpsertWithoutAddressInput_1.OrganizationUpsertWithoutAddressInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", OrganizationUpsertWithoutAddressInput_1.OrganizationUpsertWithoutAddressInput)
], OrganizationUpdateOneWithoutAddressInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], OrganizationUpdateOneWithoutAddressInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], OrganizationUpdateOneWithoutAddressInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => OrganizationWhereUniqueInput_1.OrganizationWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", OrganizationWhereUniqueInput_1.OrganizationWhereUniqueInput)
], OrganizationUpdateOneWithoutAddressInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => OrganizationUpdateWithoutAddressInput_1.OrganizationUpdateWithoutAddressInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", OrganizationUpdateWithoutAddressInput_1.OrganizationUpdateWithoutAddressInput)
], OrganizationUpdateOneWithoutAddressInput.prototype, "update", void 0);
OrganizationUpdateOneWithoutAddressInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("OrganizationUpdateOneWithoutAddressInput", {
        isAbstract: true
    })
], OrganizationUpdateOneWithoutAddressInput);
exports.OrganizationUpdateOneWithoutAddressInput = OrganizationUpdateOneWithoutAddressInput;
