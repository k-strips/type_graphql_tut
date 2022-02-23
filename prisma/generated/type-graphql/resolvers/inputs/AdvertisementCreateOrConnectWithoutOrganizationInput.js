"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdvertisementCreateOrConnectWithoutOrganizationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AdvertisementCreateWithoutOrganizationInput_1 = require("../inputs/AdvertisementCreateWithoutOrganizationInput");
const AdvertisementWhereUniqueInput_1 = require("../inputs/AdvertisementWhereUniqueInput");
let AdvertisementCreateOrConnectWithoutOrganizationInput = class AdvertisementCreateOrConnectWithoutOrganizationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementWhereUniqueInput_1.AdvertisementWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementWhereUniqueInput_1.AdvertisementWhereUniqueInput)
], AdvertisementCreateOrConnectWithoutOrganizationInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementCreateWithoutOrganizationInput_1.AdvertisementCreateWithoutOrganizationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementCreateWithoutOrganizationInput_1.AdvertisementCreateWithoutOrganizationInput)
], AdvertisementCreateOrConnectWithoutOrganizationInput.prototype, "create", void 0);
AdvertisementCreateOrConnectWithoutOrganizationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AdvertisementCreateOrConnectWithoutOrganizationInput", {
        isAbstract: true
    })
], AdvertisementCreateOrConnectWithoutOrganizationInput);
exports.AdvertisementCreateOrConnectWithoutOrganizationInput = AdvertisementCreateOrConnectWithoutOrganizationInput;
