"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumPropertyCategoryFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PropertyCategory_1 = require("../../enums/PropertyCategory");
let EnumPropertyCategoryFieldUpdateOperationsInput = class EnumPropertyCategoryFieldUpdateOperationsInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyCategory_1.PropertyCategory, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EnumPropertyCategoryFieldUpdateOperationsInput.prototype, "set", void 0);
EnumPropertyCategoryFieldUpdateOperationsInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("EnumPropertyCategoryFieldUpdateOperationsInput", {
        isAbstract: true
    })
], EnumPropertyCategoryFieldUpdateOperationsInput);
exports.EnumPropertyCategoryFieldUpdateOperationsInput = EnumPropertyCategoryFieldUpdateOperationsInput;
