"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdvertisementUpdateWithWhereUniqueWithoutOrganizationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AdvertisementUpdateWithoutOrganizationInput_1 = require("../inputs/AdvertisementUpdateWithoutOrganizationInput");
const AdvertisementWhereUniqueInput_1 = require("../inputs/AdvertisementWhereUniqueInput");
let AdvertisementUpdateWithWhereUniqueWithoutOrganizationInput = class AdvertisementUpdateWithWhereUniqueWithoutOrganizationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementWhereUniqueInput_1.AdvertisementWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementWhereUniqueInput_1.AdvertisementWhereUniqueInput)
], AdvertisementUpdateWithWhereUniqueWithoutOrganizationInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementUpdateWithoutOrganizationInput_1.AdvertisementUpdateWithoutOrganizationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementUpdateWithoutOrganizationInput_1.AdvertisementUpdateWithoutOrganizationInput)
], AdvertisementUpdateWithWhereUniqueWithoutOrganizationInput.prototype, "data", void 0);
AdvertisementUpdateWithWhereUniqueWithoutOrganizationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AdvertisementUpdateWithWhereUniqueWithoutOrganizationInput", {
        isAbstract: true
    })
], AdvertisementUpdateWithWhereUniqueWithoutOrganizationInput);
exports.AdvertisementUpdateWithWhereUniqueWithoutOrganizationInput = AdvertisementUpdateWithWhereUniqueWithoutOrganizationInput;
