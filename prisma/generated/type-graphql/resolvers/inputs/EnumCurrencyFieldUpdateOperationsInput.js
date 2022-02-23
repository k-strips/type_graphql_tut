"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumCurrencyFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Currency_1 = require("../../enums/Currency");
let EnumCurrencyFieldUpdateOperationsInput = class EnumCurrencyFieldUpdateOperationsInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Currency_1.Currency, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EnumCurrencyFieldUpdateOperationsInput.prototype, "set", void 0);
EnumCurrencyFieldUpdateOperationsInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("EnumCurrencyFieldUpdateOperationsInput", {
        isAbstract: true
    })
], EnumCurrencyFieldUpdateOperationsInput);
exports.EnumCurrencyFieldUpdateOperationsInput = EnumCurrencyFieldUpdateOperationsInput;
