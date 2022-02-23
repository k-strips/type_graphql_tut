"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdvertisementCreateWithoutPropertyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const OrganizationCreateNestedOneWithoutAdvertisementInput_1 = require("../inputs/OrganizationCreateNestedOneWithoutAdvertisementInput");
const PriceCreateNestedOneWithoutAdvertisementInput_1 = require("../inputs/PriceCreateNestedOneWithoutAdvertisementInput");
const UserCreateNestedOneWithoutAdvertisementInput_1 = require("../inputs/UserCreateNestedOneWithoutAdvertisementInput");
let AdvertisementCreateWithoutPropertyInput = class AdvertisementCreateWithoutPropertyInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AdvertisementCreateWithoutPropertyInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PriceCreateNestedOneWithoutAdvertisementInput_1.PriceCreateNestedOneWithoutAdvertisementInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PriceCreateNestedOneWithoutAdvertisementInput_1.PriceCreateNestedOneWithoutAdvertisementInput)
], AdvertisementCreateWithoutPropertyInput.prototype, "price", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], AdvertisementCreateWithoutPropertyInput.prototype, "isExpired", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], AdvertisementCreateWithoutPropertyInput.prototype, "isPaused", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], AdvertisementCreateWithoutPropertyInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], AdvertisementCreateWithoutPropertyInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutAdvertisementInput_1.UserCreateNestedOneWithoutAdvertisementInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateNestedOneWithoutAdvertisementInput_1.UserCreateNestedOneWithoutAdvertisementInput)
], AdvertisementCreateWithoutPropertyInput.prototype, "user", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => OrganizationCreateNestedOneWithoutAdvertisementInput_1.OrganizationCreateNestedOneWithoutAdvertisementInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", OrganizationCreateNestedOneWithoutAdvertisementInput_1.OrganizationCreateNestedOneWithoutAdvertisementInput)
], AdvertisementCreateWithoutPropertyInput.prototype, "organization", void 0);
AdvertisementCreateWithoutPropertyInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AdvertisementCreateWithoutPropertyInput", {
        isAbstract: true
    })
], AdvertisementCreateWithoutPropertyInput);
exports.AdvertisementCreateWithoutPropertyInput = AdvertisementCreateWithoutPropertyInput;
