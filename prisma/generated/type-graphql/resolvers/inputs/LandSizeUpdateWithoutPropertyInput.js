"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LandSizeUpdateWithoutPropertyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const EnumLandSizeUnitFieldUpdateOperationsInput_1 = require("../inputs/EnumLandSizeUnitFieldUpdateOperationsInput");
const FloatFieldUpdateOperationsInput_1 = require("../inputs/FloatFieldUpdateOperationsInput");
const Property_RequestUpdateOneWithoutSizeInput_1 = require("../inputs/Property_RequestUpdateOneWithoutSizeInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let LandSizeUpdateWithoutPropertyInput = class LandSizeUpdateWithoutPropertyInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], LandSizeUpdateWithoutPropertyInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput)
], LandSizeUpdateWithoutPropertyInput.prototype, "measurement", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumLandSizeUnitFieldUpdateOperationsInput_1.EnumLandSizeUnitFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumLandSizeUnitFieldUpdateOperationsInput_1.EnumLandSizeUnitFieldUpdateOperationsInput)
], LandSizeUpdateWithoutPropertyInput.prototype, "unit", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestUpdateOneWithoutSizeInput_1.Property_RequestUpdateOneWithoutSizeInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestUpdateOneWithoutSizeInput_1.Property_RequestUpdateOneWithoutSizeInput)
], LandSizeUpdateWithoutPropertyInput.prototype, "Property_Request", void 0);
LandSizeUpdateWithoutPropertyInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LandSizeUpdateWithoutPropertyInput", {
        isAbstract: true
    })
], LandSizeUpdateWithoutPropertyInput);
exports.LandSizeUpdateWithoutPropertyInput = LandSizeUpdateWithoutPropertyInput;
