"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullableEnumPropertyTypeFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PropertyType_1 = require("../../enums/PropertyType");
let NullableEnumPropertyTypeFieldUpdateOperationsInput = class NullableEnumPropertyTypeFieldUpdateOperationsInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyType_1.PropertyType, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], NullableEnumPropertyTypeFieldUpdateOperationsInput.prototype, "set", void 0);
NullableEnumPropertyTypeFieldUpdateOperationsInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("NullableEnumPropertyTypeFieldUpdateOperationsInput", {
        isAbstract: true
    })
], NullableEnumPropertyTypeFieldUpdateOperationsInput);
exports.NullableEnumPropertyTypeFieldUpdateOperationsInput = NullableEnumPropertyTypeFieldUpdateOperationsInput;
