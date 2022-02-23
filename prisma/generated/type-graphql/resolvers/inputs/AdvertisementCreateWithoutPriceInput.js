"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdvertisementCreateWithoutPriceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const OrganizationCreateNestedOneWithoutAdvertisementInput_1 = require("../inputs/OrganizationCreateNestedOneWithoutAdvertisementInput");
const PropertyCreateNestedOneWithoutAdvertisementInput_1 = require("../inputs/PropertyCreateNestedOneWithoutAdvertisementInput");
const UserCreateNestedOneWithoutAdvertisementInput_1 = require("../inputs/UserCreateNestedOneWithoutAdvertisementInput");
let AdvertisementCreateWithoutPriceInput = class AdvertisementCreateWithoutPriceInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AdvertisementCreateWithoutPriceInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], AdvertisementCreateWithoutPriceInput.prototype, "isExpired", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], AdvertisementCreateWithoutPriceInput.prototype, "isPaused", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], AdvertisementCreateWithoutPriceInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], AdvertisementCreateWithoutPriceInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutAdvertisementInput_1.UserCreateNestedOneWithoutAdvertisementInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateNestedOneWithoutAdvertisementInput_1.UserCreateNestedOneWithoutAdvertisementInput)
], AdvertisementCreateWithoutPriceInput.prototype, "user", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => OrganizationCreateNestedOneWithoutAdvertisementInput_1.OrganizationCreateNestedOneWithoutAdvertisementInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", OrganizationCreateNestedOneWithoutAdvertisementInput_1.OrganizationCreateNestedOneWithoutAdvertisementInput)
], AdvertisementCreateWithoutPriceInput.prototype, "organization", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyCreateNestedOneWithoutAdvertisementInput_1.PropertyCreateNestedOneWithoutAdvertisementInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyCreateNestedOneWithoutAdvertisementInput_1.PropertyCreateNestedOneWithoutAdvertisementInput)
], AdvertisementCreateWithoutPriceInput.prototype, "property", void 0);
AdvertisementCreateWithoutPriceInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AdvertisementCreateWithoutPriceInput", {
        isAbstract: true
    })
], AdvertisementCreateWithoutPriceInput);
exports.AdvertisementCreateWithoutPriceInput = AdvertisementCreateWithoutPriceInput;
