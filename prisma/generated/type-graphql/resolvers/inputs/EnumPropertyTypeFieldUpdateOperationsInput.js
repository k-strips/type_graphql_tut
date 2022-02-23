"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumPropertyTypeFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PropertyType_1 = require("../../enums/PropertyType");
let EnumPropertyTypeFieldUpdateOperationsInput = class EnumPropertyTypeFieldUpdateOperationsInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyType_1.PropertyType, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EnumPropertyTypeFieldUpdateOperationsInput.prototype, "set", void 0);
EnumPropertyTypeFieldUpdateOperationsInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("EnumPropertyTypeFieldUpdateOperationsInput", {
        isAbstract: true
    })
], EnumPropertyTypeFieldUpdateOperationsInput);
exports.EnumPropertyTypeFieldUpdateOperationsInput = EnumPropertyTypeFieldUpdateOperationsInput;
