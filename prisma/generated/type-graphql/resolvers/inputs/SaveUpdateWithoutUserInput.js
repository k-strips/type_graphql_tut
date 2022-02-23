"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveUpdateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const PropertyUpdateOneWithoutLikesInput_1 = require("../inputs/PropertyUpdateOneWithoutLikesInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let SaveUpdateWithoutUserInput = class SaveUpdateWithoutUserInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], SaveUpdateWithoutUserInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], SaveUpdateWithoutUserInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyUpdateOneWithoutLikesInput_1.PropertyUpdateOneWithoutLikesInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyUpdateOneWithoutLikesInput_1.PropertyUpdateOneWithoutLikesInput)
], SaveUpdateWithoutUserInput.prototype, "Property", void 0);
SaveUpdateWithoutUserInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("SaveUpdateWithoutUserInput", {
        isAbstract: true
    })
], SaveUpdateWithoutUserInput);
exports.SaveUpdateWithoutUserInput = SaveUpdateWithoutUserInput;
