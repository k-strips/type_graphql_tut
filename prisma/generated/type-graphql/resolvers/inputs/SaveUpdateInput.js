"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const PropertyUpdateOneWithoutLikesInput_1 = require("../inputs/PropertyUpdateOneWithoutLikesInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateOneWithoutSavesInput_1 = require("../inputs/UserUpdateOneWithoutSavesInput");
let SaveUpdateInput = class SaveUpdateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], SaveUpdateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], SaveUpdateInput.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserUpdateOneWithoutSavesInput_1.UserUpdateOneWithoutSavesInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserUpdateOneWithoutSavesInput_1.UserUpdateOneWithoutSavesInput)
], SaveUpdateInput.prototype, "User", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyUpdateOneWithoutLikesInput_1.PropertyUpdateOneWithoutLikesInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyUpdateOneWithoutLikesInput_1.PropertyUpdateOneWithoutLikesInput)
], SaveUpdateInput.prototype, "Property", void 0);
SaveUpdateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("SaveUpdateInput", {
        isAbstract: true
    })
], SaveUpdateInput);
exports.SaveUpdateInput = SaveUpdateInput;
