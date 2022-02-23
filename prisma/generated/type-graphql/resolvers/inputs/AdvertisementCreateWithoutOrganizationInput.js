"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdvertisementCreateWithoutOrganizationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PriceCreateNestedOneWithoutAdvertisementInput_1 = require("../inputs/PriceCreateNestedOneWithoutAdvertisementInput");
const PropertyCreateNestedOneWithoutAdvertisementInput_1 = require("../inputs/PropertyCreateNestedOneWithoutAdvertisementInput");
const UserCreateNestedOneWithoutAdvertisementInput_1 = require("../inputs/UserCreateNestedOneWithoutAdvertisementInput");
let AdvertisementCreateWithoutOrganizationInput = class AdvertisementCreateWithoutOrganizationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AdvertisementCreateWithoutOrganizationInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PriceCreateNestedOneWithoutAdvertisementInput_1.PriceCreateNestedOneWithoutAdvertisementInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PriceCreateNestedOneWithoutAdvertisementInput_1.PriceCreateNestedOneWithoutAdvertisementInput)
], AdvertisementCreateWithoutOrganizationInput.prototype, "price", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], AdvertisementCreateWithoutOrganizationInput.prototype, "isExpired", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], AdvertisementCreateWithoutOrganizationInput.prototype, "isPaused", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], AdvertisementCreateWithoutOrganizationInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], AdvertisementCreateWithoutOrganizationInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutAdvertisementInput_1.UserCreateNestedOneWithoutAdvertisementInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateNestedOneWithoutAdvertisementInput_1.UserCreateNestedOneWithoutAdvertisementInput)
], AdvertisementCreateWithoutOrganizationInput.prototype, "user", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyCreateNestedOneWithoutAdvertisementInput_1.PropertyCreateNestedOneWithoutAdvertisementInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyCreateNestedOneWithoutAdvertisementInput_1.PropertyCreateNestedOneWithoutAdvertisementInput)
], AdvertisementCreateWithoutOrganizationInput.prototype, "property", void 0);
AdvertisementCreateWithoutOrganizationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AdvertisementCreateWithoutOrganizationInput", {
        isAbstract: true
    })
], AdvertisementCreateWithoutOrganizationInput);
exports.AdvertisementCreateWithoutOrganizationInput = AdvertisementCreateWithoutOrganizationInput;
