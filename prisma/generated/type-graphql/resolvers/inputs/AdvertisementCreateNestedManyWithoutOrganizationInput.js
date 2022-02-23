"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdvertisementCreateNestedManyWithoutOrganizationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AdvertisementCreateManyOrganizationInputEnvelope_1 = require("../inputs/AdvertisementCreateManyOrganizationInputEnvelope");
const AdvertisementCreateOrConnectWithoutOrganizationInput_1 = require("../inputs/AdvertisementCreateOrConnectWithoutOrganizationInput");
const AdvertisementCreateWithoutOrganizationInput_1 = require("../inputs/AdvertisementCreateWithoutOrganizationInput");
const AdvertisementWhereUniqueInput_1 = require("../inputs/AdvertisementWhereUniqueInput");
let AdvertisementCreateNestedManyWithoutOrganizationInput = class AdvertisementCreateNestedManyWithoutOrganizationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AdvertisementCreateWithoutOrganizationInput_1.AdvertisementCreateWithoutOrganizationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AdvertisementCreateNestedManyWithoutOrganizationInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AdvertisementCreateOrConnectWithoutOrganizationInput_1.AdvertisementCreateOrConnectWithoutOrganizationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AdvertisementCreateNestedManyWithoutOrganizationInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementCreateManyOrganizationInputEnvelope_1.AdvertisementCreateManyOrganizationInputEnvelope, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementCreateManyOrganizationInputEnvelope_1.AdvertisementCreateManyOrganizationInputEnvelope)
], AdvertisementCreateNestedManyWithoutOrganizationInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AdvertisementWhereUniqueInput_1.AdvertisementWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AdvertisementCreateNestedManyWithoutOrganizationInput.prototype, "connect", void 0);
AdvertisementCreateNestedManyWithoutOrganizationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AdvertisementCreateNestedManyWithoutOrganizationInput", {
        isAbstract: true
    })
], AdvertisementCreateNestedManyWithoutOrganizationInput);
exports.AdvertisementCreateNestedManyWithoutOrganizationInput = AdvertisementCreateNestedManyWithoutOrganizationInput;
