"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullableEnumPropertyStateFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PropertyState_1 = require("../../enums/PropertyState");
let NullableEnumPropertyStateFieldUpdateOperationsInput = class NullableEnumPropertyStateFieldUpdateOperationsInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyState_1.PropertyState, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], NullableEnumPropertyStateFieldUpdateOperationsInput.prototype, "set", void 0);
NullableEnumPropertyStateFieldUpdateOperationsInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("NullableEnumPropertyStateFieldUpdateOperationsInput", {
        isAbstract: true
    })
], NullableEnumPropertyStateFieldUpdateOperationsInput);
exports.NullableEnumPropertyStateFieldUpdateOperationsInput = NullableEnumPropertyStateFieldUpdateOperationsInput;
