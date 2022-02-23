"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationUpdateOneWithoutPropertiesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const OrganizationCreateOrConnectWithoutPropertiesInput_1 = require("../inputs/OrganizationCreateOrConnectWithoutPropertiesInput");
const OrganizationCreateWithoutPropertiesInput_1 = require("../inputs/OrganizationCreateWithoutPropertiesInput");
const OrganizationUpdateWithoutPropertiesInput_1 = require("../inputs/OrganizationUpdateWithoutPropertiesInput");
const OrganizationUpsertWithoutPropertiesInput_1 = require("../inputs/OrganizationUpsertWithoutPropertiesInput");
const OrganizationWhereUniqueInput_1 = require("../inputs/OrganizationWhereUniqueInput");
let OrganizationUpdateOneWithoutPropertiesInput = class OrganizationUpdateOneWithoutPropertiesInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => OrganizationCreateWithoutPropertiesInput_1.OrganizationCreateWithoutPropertiesInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", OrganizationCreateWithoutPropertiesInput_1.OrganizationCreateWithoutPropertiesInput)
], OrganizationUpdateOneWithoutPropertiesInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => OrganizationCreateOrConnectWithoutPropertiesInput_1.OrganizationCreateOrConnectWithoutPropertiesInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", OrganizationCreateOrConnectWithoutPropertiesInput_1.OrganizationCreateOrConnectWithoutPropertiesInput)
], OrganizationUpdateOneWithoutPropertiesInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => OrganizationUpsertWithoutPropertiesInput_1.OrganizationUpsertWithoutPropertiesInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", OrganizationUpsertWithoutPropertiesInput_1.OrganizationUpsertWithoutPropertiesInput)
], OrganizationUpdateOneWithoutPropertiesInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], OrganizationUpdateOneWithoutPropertiesInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], OrganizationUpdateOneWithoutPropertiesInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => OrganizationWhereUniqueInput_1.OrganizationWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", OrganizationWhereUniqueInput_1.OrganizationWhereUniqueInput)
], OrganizationUpdateOneWithoutPropertiesInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => OrganizationUpdateWithoutPropertiesInput_1.OrganizationUpdateWithoutPropertiesInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", OrganizationUpdateWithoutPropertiesInput_1.OrganizationUpdateWithoutPropertiesInput)
], OrganizationUpdateOneWithoutPropertiesInput.prototype, "update", void 0);
OrganizationUpdateOneWithoutPropertiesInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("OrganizationUpdateOneWithoutPropertiesInput", {
        isAbstract: true
    })
], OrganizationUpdateOneWithoutPropertiesInput);
exports.OrganizationUpdateOneWithoutPropertiesInput = OrganizationUpdateOneWithoutPropertiesInput;
