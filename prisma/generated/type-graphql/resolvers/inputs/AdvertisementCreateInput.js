"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdvertisementCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const OrganizationCreateNestedOneWithoutAdvertisementInput_1 = require("../inputs/OrganizationCreateNestedOneWithoutAdvertisementInput");
const PriceCreateNestedOneWithoutAdvertisementInput_1 = require("../inputs/PriceCreateNestedOneWithoutAdvertisementInput");
const PropertyCreateNestedOneWithoutAdvertisementInput_1 = require("../inputs/PropertyCreateNestedOneWithoutAdvertisementInput");
const UserCreateNestedOneWithoutAdvertisementInput_1 = require("../inputs/UserCreateNestedOneWithoutAdvertisementInput");
let AdvertisementCreateInput = class AdvertisementCreateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AdvertisementCreateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PriceCreateNestedOneWithoutAdvertisementInput_1.PriceCreateNestedOneWithoutAdvertisementInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PriceCreateNestedOneWithoutAdvertisementInput_1.PriceCreateNestedOneWithoutAdvertisementInput)
], AdvertisementCreateInput.prototype, "price", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], AdvertisementCreateInput.prototype, "isExpired", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], AdvertisementCreateInput.prototype, "isPaused", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], AdvertisementCreateInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], AdvertisementCreateInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutAdvertisementInput_1.UserCreateNestedOneWithoutAdvertisementInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateNestedOneWithoutAdvertisementInput_1.UserCreateNestedOneWithoutAdvertisementInput)
], AdvertisementCreateInput.prototype, "user", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => OrganizationCreateNestedOneWithoutAdvertisementInput_1.OrganizationCreateNestedOneWithoutAdvertisementInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", OrganizationCreateNestedOneWithoutAdvertisementInput_1.OrganizationCreateNestedOneWithoutAdvertisementInput)
], AdvertisementCreateInput.prototype, "organization", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyCreateNestedOneWithoutAdvertisementInput_1.PropertyCreateNestedOneWithoutAdvertisementInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyCreateNestedOneWithoutAdvertisementInput_1.PropertyCreateNestedOneWithoutAdvertisementInput)
], AdvertisementCreateInput.prototype, "property", void 0);
AdvertisementCreateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AdvertisementCreateInput", {
        isAbstract: true
    })
], AdvertisementCreateInput);
exports.AdvertisementCreateInput = AdvertisementCreateInput;
