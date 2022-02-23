"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdvertisementCreateManyUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let AdvertisementCreateManyUserInput = class AdvertisementCreateManyUserInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AdvertisementCreateManyUserInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], AdvertisementCreateManyUserInput.prototype, "isExpired", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], AdvertisementCreateManyUserInput.prototype, "isPaused", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], AdvertisementCreateManyUserInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], AdvertisementCreateManyUserInput.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AdvertisementCreateManyUserInput.prototype, "organizationId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AdvertisementCreateManyUserInput.prototype, "propertyId", void 0);
AdvertisementCreateManyUserInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AdvertisementCreateManyUserInput", {
        isAbstract: true
    })
], AdvertisementCreateManyUserInput);
exports.AdvertisementCreateManyUserInput = AdvertisementCreateManyUserInput;
