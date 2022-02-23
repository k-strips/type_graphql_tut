"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveUpdateManyWithoutPropertyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SaveCreateManyPropertyInputEnvelope_1 = require("../inputs/SaveCreateManyPropertyInputEnvelope");
const SaveCreateOrConnectWithoutPropertyInput_1 = require("../inputs/SaveCreateOrConnectWithoutPropertyInput");
const SaveCreateWithoutPropertyInput_1 = require("../inputs/SaveCreateWithoutPropertyInput");
const SaveScalarWhereInput_1 = require("../inputs/SaveScalarWhereInput");
const SaveUpdateManyWithWhereWithoutPropertyInput_1 = require("../inputs/SaveUpdateManyWithWhereWithoutPropertyInput");
const SaveUpdateWithWhereUniqueWithoutPropertyInput_1 = require("../inputs/SaveUpdateWithWhereUniqueWithoutPropertyInput");
const SaveUpsertWithWhereUniqueWithoutPropertyInput_1 = require("../inputs/SaveUpsertWithWhereUniqueWithoutPropertyInput");
const SaveWhereUniqueInput_1 = require("../inputs/SaveWhereUniqueInput");
let SaveUpdateManyWithoutPropertyInput = class SaveUpdateManyWithoutPropertyInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [SaveCreateWithoutPropertyInput_1.SaveCreateWithoutPropertyInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], SaveUpdateManyWithoutPropertyInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [SaveCreateOrConnectWithoutPropertyInput_1.SaveCreateOrConnectWithoutPropertyInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], SaveUpdateManyWithoutPropertyInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [SaveUpsertWithWhereUniqueWithoutPropertyInput_1.SaveUpsertWithWhereUniqueWithoutPropertyInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], SaveUpdateManyWithoutPropertyInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SaveCreateManyPropertyInputEnvelope_1.SaveCreateManyPropertyInputEnvelope, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SaveCreateManyPropertyInputEnvelope_1.SaveCreateManyPropertyInputEnvelope)
], SaveUpdateManyWithoutPropertyInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [SaveWhereUniqueInput_1.SaveWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], SaveUpdateManyWithoutPropertyInput.prototype, "set", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [SaveWhereUniqueInput_1.SaveWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], SaveUpdateManyWithoutPropertyInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [SaveWhereUniqueInput_1.SaveWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], SaveUpdateManyWithoutPropertyInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [SaveWhereUniqueInput_1.SaveWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], SaveUpdateManyWithoutPropertyInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [SaveUpdateWithWhereUniqueWithoutPropertyInput_1.SaveUpdateWithWhereUniqueWithoutPropertyInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], SaveUpdateManyWithoutPropertyInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [SaveUpdateManyWithWhereWithoutPropertyInput_1.SaveUpdateManyWithWhereWithoutPropertyInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], SaveUpdateManyWithoutPropertyInput.prototype, "updateMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [SaveScalarWhereInput_1.SaveScalarWhereInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], SaveUpdateManyWithoutPropertyInput.prototype, "deleteMany", void 0);
SaveUpdateManyWithoutPropertyInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("SaveUpdateManyWithoutPropertyInput", {
        isAbstract: true
    })
], SaveUpdateManyWithoutPropertyInput);
exports.SaveUpdateManyWithoutPropertyInput = SaveUpdateManyWithoutPropertyInput;
