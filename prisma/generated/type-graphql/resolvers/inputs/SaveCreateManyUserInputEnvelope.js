"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveCreateManyUserInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SaveCreateManyUserInput_1 = require("../inputs/SaveCreateManyUserInput");
let SaveCreateManyUserInputEnvelope = class SaveCreateManyUserInputEnvelope {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [SaveCreateManyUserInput_1.SaveCreateManyUserInput], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], SaveCreateManyUserInputEnvelope.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], SaveCreateManyUserInputEnvelope.prototype, "skipDuplicates", void 0);
SaveCreateManyUserInputEnvelope = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("SaveCreateManyUserInputEnvelope", {
        isAbstract: true
    })
], SaveCreateManyUserInputEnvelope);
exports.SaveCreateManyUserInputEnvelope = SaveCreateManyUserInputEnvelope;
