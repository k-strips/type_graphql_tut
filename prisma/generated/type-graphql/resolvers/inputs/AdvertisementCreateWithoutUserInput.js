"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdvertisementCreateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const OrganizationCreateNestedOneWithoutAdvertisementInput_1 = require("../inputs/OrganizationCreateNestedOneWithoutAdvertisementInput");
const PriceCreateNestedOneWithoutAdvertisementInput_1 = require("../inputs/PriceCreateNestedOneWithoutAdvertisementInput");
const PropertyCreateNestedOneWithoutAdvertisementInput_1 = require("../inputs/PropertyCreateNestedOneWithoutAdvertisementInput");
let AdvertisementCreateWithoutUserInput = class AdvertisementCreateWithoutUserInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AdvertisementCreateWithoutUserInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PriceCreateNestedOneWithoutAdvertisementInput_1.PriceCreateNestedOneWithoutAdvertisementInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PriceCreateNestedOneWithoutAdvertisementInput_1.PriceCreateNestedOneWithoutAdvertisementInput)
], AdvertisementCreateWithoutUserInput.prototype, "price", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], AdvertisementCreateWithoutUserInput.prototype, "isExpired", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], AdvertisementCreateWithoutUserInput.prototype, "isPaused", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], AdvertisementCreateWithoutUserInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], AdvertisementCreateWithoutUserInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => OrganizationCreateNestedOneWithoutAdvertisementInput_1.OrganizationCreateNestedOneWithoutAdvertisementInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", OrganizationCreateNestedOneWithoutAdvertisementInput_1.OrganizationCreateNestedOneWithoutAdvertisementInput)
], AdvertisementCreateWithoutUserInput.prototype, "organization", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyCreateNestedOneWithoutAdvertisementInput_1.PropertyCreateNestedOneWithoutAdvertisementInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyCreateNestedOneWithoutAdvertisementInput_1.PropertyCreateNestedOneWithoutAdvertisementInput)
], AdvertisementCreateWithoutUserInput.prototype, "property", void 0);
AdvertisementCreateWithoutUserInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AdvertisementCreateWithoutUserInput", {
        isAbstract: true
    })
], AdvertisementCreateWithoutUserInput);
exports.AdvertisementCreateWithoutUserInput = AdvertisementCreateWithoutUserInput;
