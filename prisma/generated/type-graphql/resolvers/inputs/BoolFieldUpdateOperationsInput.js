"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoolFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let BoolFieldUpdateOperationsInput = class BoolFieldUpdateOperationsInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], BoolFieldUpdateOperationsInput.prototype, "set", void 0);
BoolFieldUpdateOperationsInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("BoolFieldUpdateOperationsInput", {
        isAbstract: true
    })
], BoolFieldUpdateOperationsInput);
exports.BoolFieldUpdateOperationsInput = BoolFieldUpdateOperationsInput;
