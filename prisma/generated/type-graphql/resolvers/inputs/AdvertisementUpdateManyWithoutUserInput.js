"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdvertisementUpdateManyWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AdvertisementCreateManyUserInputEnvelope_1 = require("../inputs/AdvertisementCreateManyUserInputEnvelope");
const AdvertisementCreateOrConnectWithoutUserInput_1 = require("../inputs/AdvertisementCreateOrConnectWithoutUserInput");
const AdvertisementCreateWithoutUserInput_1 = require("../inputs/AdvertisementCreateWithoutUserInput");
const AdvertisementScalarWhereInput_1 = require("../inputs/AdvertisementScalarWhereInput");
const AdvertisementUpdateManyWithWhereWithoutUserInput_1 = require("../inputs/AdvertisementUpdateManyWithWhereWithoutUserInput");
const AdvertisementUpdateWithWhereUniqueWithoutUserInput_1 = require("../inputs/AdvertisementUpdateWithWhereUniqueWithoutUserInput");
const AdvertisementUpsertWithWhereUniqueWithoutUserInput_1 = require("../inputs/AdvertisementUpsertWithWhereUniqueWithoutUserInput");
const AdvertisementWhereUniqueInput_1 = require("../inputs/AdvertisementWhereUniqueInput");
let AdvertisementUpdateManyWithoutUserInput = class AdvertisementUpdateManyWithoutUserInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AdvertisementCreateWithoutUserInput_1.AdvertisementCreateWithoutUserInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AdvertisementUpdateManyWithoutUserInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AdvertisementCreateOrConnectWithoutUserInput_1.AdvertisementCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AdvertisementUpdateManyWithoutUserInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AdvertisementUpsertWithWhereUniqueWithoutUserInput_1.AdvertisementUpsertWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AdvertisementUpdateManyWithoutUserInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementCreateManyUserInputEnvelope_1.AdvertisementCreateManyUserInputEnvelope, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementCreateManyUserInputEnvelope_1.AdvertisementCreateManyUserInputEnvelope)
], AdvertisementUpdateManyWithoutUserInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AdvertisementWhereUniqueInput_1.AdvertisementWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AdvertisementUpdateManyWithoutUserInput.prototype, "set", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AdvertisementWhereUniqueInput_1.AdvertisementWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AdvertisementUpdateManyWithoutUserInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AdvertisementWhereUniqueInput_1.AdvertisementWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AdvertisementUpdateManyWithoutUserInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AdvertisementWhereUniqueInput_1.AdvertisementWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AdvertisementUpdateManyWithoutUserInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AdvertisementUpdateWithWhereUniqueWithoutUserInput_1.AdvertisementUpdateWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AdvertisementUpdateManyWithoutUserInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AdvertisementUpdateManyWithWhereWithoutUserInput_1.AdvertisementUpdateManyWithWhereWithoutUserInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AdvertisementUpdateManyWithoutUserInput.prototype, "updateMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [AdvertisementScalarWhereInput_1.AdvertisementScalarWhereInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], AdvertisementUpdateManyWithoutUserInput.prototype, "deleteMany", void 0);
AdvertisementUpdateManyWithoutUserInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("AdvertisementUpdateManyWithoutUserInput", {
        isAbstract: true
    })
], AdvertisementUpdateManyWithoutUserInput);
exports.AdvertisementUpdateManyWithoutUserInput = AdvertisementUpdateManyWithoutUserInput;
