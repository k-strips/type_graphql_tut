"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Property_RequestUpdateManyWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Property_RequestCreateManyUserInputEnvelope_1 = require("../inputs/Property_RequestCreateManyUserInputEnvelope");
const Property_RequestCreateOrConnectWithoutUserInput_1 = require("../inputs/Property_RequestCreateOrConnectWithoutUserInput");
const Property_RequestCreateWithoutUserInput_1 = require("../inputs/Property_RequestCreateWithoutUserInput");
const Property_RequestScalarWhereInput_1 = require("../inputs/Property_RequestScalarWhereInput");
const Property_RequestUpdateManyWithWhereWithoutUserInput_1 = require("../inputs/Property_RequestUpdateManyWithWhereWithoutUserInput");
const Property_RequestUpdateWithWhereUniqueWithoutUserInput_1 = require("../inputs/Property_RequestUpdateWithWhereUniqueWithoutUserInput");
const Property_RequestUpsertWithWhereUniqueWithoutUserInput_1 = require("../inputs/Property_RequestUpsertWithWhereUniqueWithoutUserInput");
const Property_RequestWhereUniqueInput_1 = require("../inputs/Property_RequestWhereUniqueInput");
let Property_RequestUpdateManyWithoutUserInput = class Property_RequestUpdateManyWithoutUserInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Property_RequestCreateWithoutUserInput_1.Property_RequestCreateWithoutUserInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], Property_RequestUpdateManyWithoutUserInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Property_RequestCreateOrConnectWithoutUserInput_1.Property_RequestCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], Property_RequestUpdateManyWithoutUserInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Property_RequestUpsertWithWhereUniqueWithoutUserInput_1.Property_RequestUpsertWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], Property_RequestUpdateManyWithoutUserInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestCreateManyUserInputEnvelope_1.Property_RequestCreateManyUserInputEnvelope, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestCreateManyUserInputEnvelope_1.Property_RequestCreateManyUserInputEnvelope)
], Property_RequestUpdateManyWithoutUserInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Property_RequestWhereUniqueInput_1.Property_RequestWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], Property_RequestUpdateManyWithoutUserInput.prototype, "set", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Property_RequestWhereUniqueInput_1.Property_RequestWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], Property_RequestUpdateManyWithoutUserInput.prototype, "disconnect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Property_RequestWhereUniqueInput_1.Property_RequestWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], Property_RequestUpdateManyWithoutUserInput.prototype, "delete", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Property_RequestWhereUniqueInput_1.Property_RequestWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], Property_RequestUpdateManyWithoutUserInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Property_RequestUpdateWithWhereUniqueWithoutUserInput_1.Property_RequestUpdateWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], Property_RequestUpdateManyWithoutUserInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Property_RequestUpdateManyWithWhereWithoutUserInput_1.Property_RequestUpdateManyWithWhereWithoutUserInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], Property_RequestUpdateManyWithoutUserInput.prototype, "updateMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Property_RequestScalarWhereInput_1.Property_RequestScalarWhereInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], Property_RequestUpdateManyWithoutUserInput.prototype, "deleteMany", void 0);
Property_RequestUpdateManyWithoutUserInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("Property_RequestUpdateManyWithoutUserInput", {
        isAbstract: true
    })
], Property_RequestUpdateManyWithoutUserInput);
exports.Property_RequestUpdateManyWithoutUserInput = Property_RequestUpdateManyWithoutUserInput;
