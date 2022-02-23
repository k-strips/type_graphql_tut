"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveUpdateManyWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SaveCreateManyUserInputEnvelope_1 = require("../inputs/SaveCreateManyUserInputEnvelope");
const SaveCreateOrConnectWithoutUserInput_1 = require("../inputs/SaveCreateOrConnectWithoutUserInput");
const SaveCreateWithoutUserInput_1 = require("../inputs/SaveCreateWithoutUserInput");
const SaveScalarWhereInput_1 = require("../inputs/SaveScalarWhereInput");
const SaveUpdateManyWithWhereWithoutUserInput_1 = require("../inputs/SaveUpdateManyWithWhereWithoutUserInput");
const SaveUpdateWithWhereUniqueWithoutUserInput_1 = require("../inputs/SaveUpdateWithWhereUniqueWithoutUserInput");
const SaveUpsertWithWhereUniqueWithoutUserInput_1 = require("../inputs/SaveUpsertWithWhereUniqueWithoutUserInput");
const SaveWhereUniqueInput_1 = require("../inputs/SaveWhereUniqueInput");
let SaveUpdateManyWithoutUserInput = class SaveUpdateManyWithoutUserInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [SaveCreateWithoutUserInput_1.SaveCreateWithoutUserInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], SaveUpdateManyWithoutUserInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [SaveCreateOrConnectWithoutUserInput_1.SaveCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], SaveUpdateManyWithoutUserInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [SaveUpsertWithWhereUniqueWithoutUserInput_1.SaveUpsertWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], SaveUpdateManyWithoutUserInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SaveCreateManyUserInputEnvelope_1.SaveCreateManyUserInputEnvelope, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SaveCreateManyUserInputEnvelope_1.SaveCreateManyUserInputEnvelope)
], SaveUpdateManyWithoutUserInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [SaveWhereUniqueInput_1.SaveWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], SaveUpdateManyWithoutUserInput.prototype, "set", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [SaveWhereUniqueInput_1.SaveWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], SaveUpdateManyWithoutUserInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [SaveWhereUniqueInput_1.SaveWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], SaveUpdateManyWithoutUserInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [SaveWhereUniqueInput_1.SaveWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], SaveUpdateManyWithoutUserInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [SaveUpdateWithWhereUniqueWithoutUserInput_1.SaveUpdateWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], SaveUpdateManyWithoutUserInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [SaveUpdateManyWithWhereWithoutUserInput_1.SaveUpdateManyWithWhereWithoutUserInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], SaveUpdateManyWithoutUserInput.prototype, "updateMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [SaveScalarWhereInput_1.SaveScalarWhereInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], SaveUpdateManyWithoutUserInput.prototype, "deleteMany", void 0);
SaveUpdateManyWithoutUserInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("SaveUpdateManyWithoutUserInput", {
        isAbstract: true
    })
], SaveUpdateManyWithoutUserInput);
exports.SaveUpdateManyWithoutUserInput = SaveUpdateManyWithoutUserInput;
