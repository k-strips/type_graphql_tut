"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LandSizeUpdateWithoutProperty_RequestInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const EnumLandSizeUnitFieldUpdateOperationsInput_1 = require("../inputs/EnumLandSizeUnitFieldUpdateOperationsInput");
const FloatFieldUpdateOperationsInput_1 = require("../inputs/FloatFieldUpdateOperationsInput");
const PropertyUpdateOneWithoutSizeInput_1 = require("../inputs/PropertyUpdateOneWithoutSizeInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let LandSizeUpdateWithoutProperty_RequestInput = class LandSizeUpdateWithoutProperty_RequestInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], LandSizeUpdateWithoutProperty_RequestInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput)
], LandSizeUpdateWithoutProperty_RequestInput.prototype, "measurement", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumLandSizeUnitFieldUpdateOperationsInput_1.EnumLandSizeUnitFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumLandSizeUnitFieldUpdateOperationsInput_1.EnumLandSizeUnitFieldUpdateOperationsInput)
], LandSizeUpdateWithoutProperty_RequestInput.prototype, "unit", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyUpdateOneWithoutSizeInput_1.PropertyUpdateOneWithoutSizeInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyUpdateOneWithoutSizeInput_1.PropertyUpdateOneWithoutSizeInput)
], LandSizeUpdateWithoutProperty_RequestInput.prototype, "Property", void 0);
LandSizeUpdateWithoutProperty_RequestInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LandSizeUpdateWithoutProperty_RequestInput", {
        isAbstract: true
    })
], LandSizeUpdateWithoutProperty_RequestInput);
exports.LandSizeUpdateWithoutProperty_RequestInput = LandSizeUpdateWithoutProperty_RequestInput;
