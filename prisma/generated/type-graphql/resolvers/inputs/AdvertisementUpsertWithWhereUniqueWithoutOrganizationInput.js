"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdvertisementUpsertWithWhereUniqueWithoutOrganizationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AdvertisementCreateWithoutOrganizationInput_1 = require("../inputs/AdvertisementCreateWithoutOrganizationInput");
const AdvertisementUpdateWithoutOrganizationInput_1 = require("../inputs/AdvertisementUpdateWithoutOrganizationInput");
const AdvertisementWhereUniqueInput_1 = require("../inputs/AdvertisementWhereUniqueInput");
let AdvertisementUpsertWithWhereUniqueWithoutOrganizationInput = class AdvertisementUpsertWithWhereUniqueWithoutOrganizationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementWhereUniqueInput_1.AdvertisementWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementWhereUniqueInput_1.AdvertisementWhereUniqueInput)
], AdvertisementUpsertWithWhereUniqueWithoutOrganizationInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementUpdateWithoutOrganizationInput_1.AdvertisementUpdateWithoutOrganizationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementUpdateWithoutOrganizationInput_1.AdvertisementUpdateWithoutOrganizationInput)
], AdvertisementUpsertWithWhereUniqueWithoutOrganizationInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementCreateWithoutOrganizationInput_1.AdvertisementCreateWithoutOrganizationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementCreateWithoutOrganizationInput_1.AdvertisementCreateWithoutOrganizationInput)
], AdvertisementUpsertWithWhereUniqueWithoutOrganizationInput.prototype, "create", void 0);
AdvertisementUpsertWithWhereUniqueWithoutOrganizationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AdvertisementUpsertWithWhereUniqueWithoutOrganizationInput", {
        isAbstract: true
    })
], AdvertisementUpsertWithWhereUniqueWithoutOrganizationInput);
exports.AdvertisementUpsertWithWhereUniqueWithoutOrganizationInput = AdvertisementUpsertWithWhereUniqueWithoutOrganizationInput;
