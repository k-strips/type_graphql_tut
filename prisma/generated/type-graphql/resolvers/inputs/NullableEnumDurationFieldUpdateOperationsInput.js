"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullableEnumDurationFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Duration_1 = require("../../enums/Duration");
let NullableEnumDurationFieldUpdateOperationsInput = class NullableEnumDurationFieldUpdateOperationsInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Duration_1.Duration, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], NullableEnumDurationFieldUpdateOperationsInput.prototype, "set", void 0);
NullableEnumDurationFieldUpdateOperationsInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("NullableEnumDurationFieldUpdateOperationsInput", {
        isAbstract: true
    })
], NullableEnumDurationFieldUpdateOperationsInput);
exports.NullableEnumDurationFieldUpdateOperationsInput = NullableEnumDurationFieldUpdateOperationsInput;
