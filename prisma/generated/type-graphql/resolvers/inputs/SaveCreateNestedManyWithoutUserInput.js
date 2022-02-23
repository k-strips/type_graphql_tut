"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveCreateNestedManyWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SaveCreateManyUserInputEnvelope_1 = require("../inputs/SaveCreateManyUserInputEnvelope");
const SaveCreateOrConnectWithoutUserInput_1 = require("../inputs/SaveCreateOrConnectWithoutUserInput");
const SaveCreateWithoutUserInput_1 = require("../inputs/SaveCreateWithoutUserInput");
const SaveWhereUniqueInput_1 = require("../inputs/SaveWhereUniqueInput");
let SaveCreateNestedManyWithoutUserInput = class SaveCreateNestedManyWithoutUserInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [SaveCreateWithoutUserInput_1.SaveCreateWithoutUserInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], SaveCreateNestedManyWithoutUserInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [SaveCreateOrConnectWithoutUserInput_1.SaveCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], SaveCreateNestedManyWithoutUserInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SaveCreateManyUserInputEnvelope_1.SaveCreateManyUserInputEnvelope, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SaveCreateManyUserInputEnvelope_1.SaveCreateManyUserInputEnvelope)
], SaveCreateNestedManyWithoutUserInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [SaveWhereUniqueInput_1.SaveWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], SaveCreateNestedManyWithoutUserInput.prototype, "connect", void 0);
SaveCreateNestedManyWithoutUserInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("SaveCreateNestedManyWithoutUserInput", {
        isAbstract: true
    })
], SaveCreateNestedManyWithoutUserInput);
exports.SaveCreateNestedManyWithoutUserInput = SaveCreateNestedManyWithoutUserInput;
