"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveUpdateWithoutPropertyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateOneWithoutSavesInput_1 = require("../inputs/UserUpdateOneWithoutSavesInput");
let SaveUpdateWithoutPropertyInput = class SaveUpdateWithoutPropertyInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], SaveUpdateWithoutPropertyInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], SaveUpdateWithoutPropertyInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserUpdateOneWithoutSavesInput_1.UserUpdateOneWithoutSavesInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserUpdateOneWithoutSavesInput_1.UserUpdateOneWithoutSavesInput)
], SaveUpdateWithoutPropertyInput.prototype, "User", void 0);
SaveUpdateWithoutPropertyInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("SaveUpdateWithoutPropertyInput", {
        isAbstract: true
    })
], SaveUpdateWithoutPropertyInput);
exports.SaveUpdateWithoutPropertyInput = SaveUpdateWithoutPropertyInput;
