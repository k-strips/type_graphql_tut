"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveUpdateManyMutationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let SaveUpdateManyMutationInput = class SaveUpdateManyMutationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], SaveUpdateManyMutationInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], SaveUpdateManyMutationInput.prototype, "createdAt", void 0);
SaveUpdateManyMutationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("SaveUpdateManyMutationInput", {
        isAbstract: true
    })
], SaveUpdateManyMutationInput);
exports.SaveUpdateManyMutationInput = SaveUpdateManyMutationInput;
