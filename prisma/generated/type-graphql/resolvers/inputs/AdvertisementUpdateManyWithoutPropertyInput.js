"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdvertisementUpdateManyWithoutPropertyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AdvertisementCreateManyPropertyInputEnvelope_1 = require("../inputs/AdvertisementCreateManyPropertyInputEnvelope");
const AdvertisementCreateOrConnectWithoutPropertyInput_1 = require("../inputs/AdvertisementCreateOrConnectWithoutPropertyInput");
const AdvertisementCreateWithoutPropertyInput_1 = require("../inputs/AdvertisementCreateWithoutPropertyInput");
const AdvertisementScalarWhereInput_1 = require("../inputs/AdvertisementScalarWhereInput");
const AdvertisementUpdateManyWithWhereWithoutPropertyInput_1 = require("../inputs/AdvertisementUpdateManyWithWhereWithoutPropertyInput");
const AdvertisementUpdateWithWhereUniqueWithoutPropertyInput_1 = require("../inputs/AdvertisementUpdateWithWhereUniqueWithoutPropertyInput");
const AdvertisementUpsertWithWhereUniqueWithoutPropertyInput_1 = require("../inputs/AdvertisementUpsertWithWhereUniqueWithoutPropertyInput");
const AdvertisementWhereUniqueInput_1 = require("../inputs/AdvertisementWhereUniqueInput");
let AdvertisementUpdateManyWithoutPropertyInput = class AdvertisementUpdateManyWithoutPropertyInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AdvertisementCreateWithoutPropertyInput_1.AdvertisementCreateWithoutPropertyInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AdvertisementUpdateManyWithoutPropertyInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AdvertisementCreateOrConnectWithoutPropertyInput_1.AdvertisementCreateOrConnectWithoutPropertyInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AdvertisementUpdateManyWithoutPropertyInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AdvertisementUpsertWithWhereUniqueWithoutPropertyInput_1.AdvertisementUpsertWithWhereUniqueWithoutPropertyInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AdvertisementUpdateManyWithoutPropertyInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementCreateManyPropertyInputEnvelope_1.AdvertisementCreateManyPropertyInputEnvelope, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementCreateManyPropertyInputEnvelope_1.AdvertisementCreateManyPropertyInputEnvelope)
], AdvertisementUpdateManyWithoutPropertyInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AdvertisementWhereUniqueInput_1.AdvertisementWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AdvertisementUpdateManyWithoutPropertyInput.prototype, "set", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AdvertisementWhereUniqueInput_1.AdvertisementWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AdvertisementUpdateManyWithoutPropertyInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AdvertisementWhereUniqueInput_1.AdvertisementWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AdvertisementUpdateManyWithoutPropertyInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AdvertisementWhereUniqueInput_1.AdvertisementWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AdvertisementUpdateManyWithoutPropertyInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AdvertisementUpdateWithWhereUniqueWithoutPropertyInput_1.AdvertisementUpdateWithWhereUniqueWithoutPropertyInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AdvertisementUpdateManyWithoutPropertyInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AdvertisementUpdateManyWithWhereWithoutPropertyInput_1.AdvertisementUpdateManyWithWhereWithoutPropertyInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AdvertisementUpdateManyWithoutPropertyInput.prototype, "updateMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AdvertisementScalarWhereInput_1.AdvertisementScalarWhereInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AdvertisementUpdateManyWithoutPropertyInput.prototype, "deleteMany", void 0);
AdvertisementUpdateManyWithoutPropertyInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AdvertisementUpdateManyWithoutPropertyInput", {
        isAbstract: true
    })
], AdvertisementUpdateManyWithoutPropertyInput);
exports.AdvertisementUpdateManyWithoutPropertyInput = AdvertisementUpdateManyWithoutPropertyInput;
