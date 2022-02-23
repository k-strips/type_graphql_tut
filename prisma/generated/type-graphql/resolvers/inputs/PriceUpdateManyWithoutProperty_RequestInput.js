"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceUpdateManyWithoutProperty_RequestInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PriceCreateManyProperty_RequestInputEnvelope_1 = require("../inputs/PriceCreateManyProperty_RequestInputEnvelope");
const PriceCreateOrConnectWithoutProperty_RequestInput_1 = require("../inputs/PriceCreateOrConnectWithoutProperty_RequestInput");
const PriceCreateWithoutProperty_RequestInput_1 = require("../inputs/PriceCreateWithoutProperty_RequestInput");
const PriceScalarWhereInput_1 = require("../inputs/PriceScalarWhereInput");
const PriceUpdateManyWithWhereWithoutProperty_RequestInput_1 = require("../inputs/PriceUpdateManyWithWhereWithoutProperty_RequestInput");
const PriceUpdateWithWhereUniqueWithoutProperty_RequestInput_1 = require("../inputs/PriceUpdateWithWhereUniqueWithoutProperty_RequestInput");
const PriceUpsertWithWhereUniqueWithoutProperty_RequestInput_1 = require("../inputs/PriceUpsertWithWhereUniqueWithoutProperty_RequestInput");
const PriceWhereUniqueInput_1 = require("../inputs/PriceWhereUniqueInput");
let PriceUpdateManyWithoutProperty_RequestInput = class PriceUpdateManyWithoutProperty_RequestInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PriceCreateWithoutProperty_RequestInput_1.PriceCreateWithoutProperty_RequestInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PriceUpdateManyWithoutProperty_RequestInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PriceCreateOrConnectWithoutProperty_RequestInput_1.PriceCreateOrConnectWithoutProperty_RequestInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PriceUpdateManyWithoutProperty_RequestInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PriceUpsertWithWhereUniqueWithoutProperty_RequestInput_1.PriceUpsertWithWhereUniqueWithoutProperty_RequestInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PriceUpdateManyWithoutProperty_RequestInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PriceCreateManyProperty_RequestInputEnvelope_1.PriceCreateManyProperty_RequestInputEnvelope, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PriceCreateManyProperty_RequestInputEnvelope_1.PriceCreateManyProperty_RequestInputEnvelope)
], PriceUpdateManyWithoutProperty_RequestInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PriceWhereUniqueInput_1.PriceWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PriceUpdateManyWithoutProperty_RequestInput.prototype, "set", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PriceWhereUniqueInput_1.PriceWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PriceUpdateManyWithoutProperty_RequestInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PriceWhereUniqueInput_1.PriceWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PriceUpdateManyWithoutProperty_RequestInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PriceWhereUniqueInput_1.PriceWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PriceUpdateManyWithoutProperty_RequestInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PriceUpdateWithWhereUniqueWithoutProperty_RequestInput_1.PriceUpdateWithWhereUniqueWithoutProperty_RequestInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PriceUpdateManyWithoutProperty_RequestInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PriceUpdateManyWithWhereWithoutProperty_RequestInput_1.PriceUpdateManyWithWhereWithoutProperty_RequestInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PriceUpdateManyWithoutProperty_RequestInput.prototype, "updateMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PriceScalarWhereInput_1.PriceScalarWhereInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PriceUpdateManyWithoutProperty_RequestInput.prototype, "deleteMany", void 0);
PriceUpdateManyWithoutProperty_RequestInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PriceUpdateManyWithoutProperty_RequestInput", {
        isAbstract: true
    })
], PriceUpdateManyWithoutProperty_RequestInput);
exports.PriceUpdateManyWithoutProperty_RequestInput = PriceUpdateManyWithoutProperty_RequestInput;
