"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdvertisementUpdateManyWithoutOrganizationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AdvertisementCreateManyOrganizationInputEnvelope_1 = require("../inputs/AdvertisementCreateManyOrganizationInputEnvelope");
const AdvertisementCreateOrConnectWithoutOrganizationInput_1 = require("../inputs/AdvertisementCreateOrConnectWithoutOrganizationInput");
const AdvertisementCreateWithoutOrganizationInput_1 = require("../inputs/AdvertisementCreateWithoutOrganizationInput");
const AdvertisementScalarWhereInput_1 = require("../inputs/AdvertisementScalarWhereInput");
const AdvertisementUpdateManyWithWhereWithoutOrganizationInput_1 = require("../inputs/AdvertisementUpdateManyWithWhereWithoutOrganizationInput");
const AdvertisementUpdateWithWhereUniqueWithoutOrganizationInput_1 = require("../inputs/AdvertisementUpdateWithWhereUniqueWithoutOrganizationInput");
const AdvertisementUpsertWithWhereUniqueWithoutOrganizationInput_1 = require("../inputs/AdvertisementUpsertWithWhereUniqueWithoutOrganizationInput");
const AdvertisementWhereUniqueInput_1 = require("../inputs/AdvertisementWhereUniqueInput");
let AdvertisementUpdateManyWithoutOrganizationInput = class AdvertisementUpdateManyWithoutOrganizationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AdvertisementCreateWithoutOrganizationInput_1.AdvertisementCreateWithoutOrganizationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AdvertisementUpdateManyWithoutOrganizationInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AdvertisementCreateOrConnectWithoutOrganizationInput_1.AdvertisementCreateOrConnectWithoutOrganizationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AdvertisementUpdateManyWithoutOrganizationInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AdvertisementUpsertWithWhereUniqueWithoutOrganizationInput_1.AdvertisementUpsertWithWhereUniqueWithoutOrganizationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AdvertisementUpdateManyWithoutOrganizationInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementCreateManyOrganizationInputEnvelope_1.AdvertisementCreateManyOrganizationInputEnvelope, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementCreateManyOrganizationInputEnvelope_1.AdvertisementCreateManyOrganizationInputEnvelope)
], AdvertisementUpdateManyWithoutOrganizationInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AdvertisementWhereUniqueInput_1.AdvertisementWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AdvertisementUpdateManyWithoutOrganizationInput.prototype, "set", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AdvertisementWhereUniqueInput_1.AdvertisementWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AdvertisementUpdateManyWithoutOrganizationInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AdvertisementWhereUniqueInput_1.AdvertisementWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AdvertisementUpdateManyWithoutOrganizationInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AdvertisementWhereUniqueInput_1.AdvertisementWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AdvertisementUpdateManyWithoutOrganizationInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AdvertisementUpdateWithWhereUniqueWithoutOrganizationInput_1.AdvertisementUpdateWithWhereUniqueWithoutOrganizationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AdvertisementUpdateManyWithoutOrganizationInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AdvertisementUpdateManyWithWhereWithoutOrganizationInput_1.AdvertisementUpdateManyWithWhereWithoutOrganizationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AdvertisementUpdateManyWithoutOrganizationInput.prototype, "updateMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AdvertisementScalarWhereInput_1.AdvertisementScalarWhereInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AdvertisementUpdateManyWithoutOrganizationInput.prototype, "deleteMany", void 0);
AdvertisementUpdateManyWithoutOrganizationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AdvertisementUpdateManyWithoutOrganizationInput", {
        isAbstract: true
    })
], AdvertisementUpdateManyWithoutOrganizationInput);
exports.AdvertisementUpdateManyWithoutOrganizationInput = AdvertisementUpdateManyWithoutOrganizationInput;
