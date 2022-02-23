"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumUserStatusFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UserStatus_1 = require("../../enums/UserStatus");
let EnumUserStatusFieldUpdateOperationsInput = class EnumUserStatusFieldUpdateOperationsInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserStatus_1.UserStatus, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EnumUserStatusFieldUpdateOperationsInput.prototype, "set", void 0);
EnumUserStatusFieldUpdateOperationsInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("EnumUserStatusFieldUpdateOperationsInput", {
        isAbstract: true
    })
], EnumUserStatusFieldUpdateOperationsInput);
exports.EnumUserStatusFieldUpdateOperationsInput = EnumUserStatusFieldUpdateOperationsInput;
