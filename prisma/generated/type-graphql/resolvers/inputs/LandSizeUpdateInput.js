"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LandSizeUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const EnumLandSizeUnitFieldUpdateOperationsInput_1 = require("../inputs/EnumLandSizeUnitFieldUpdateOperationsInput");
const FloatFieldUpdateOperationsInput_1 = require("../inputs/FloatFieldUpdateOperationsInput");
const PropertyUpdateOneWithoutSizeInput_1 = require("../inputs/PropertyUpdateOneWithoutSizeInput");
const Property_RequestUpdateOneWithoutSizeInput_1 = require("../inputs/Property_RequestUpdateOneWithoutSizeInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let LandSizeUpdateInput = class LandSizeUpdateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], LandSizeUpdateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput)
], LandSizeUpdateInput.prototype, "measurement", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumLandSizeUnitFieldUpdateOperationsInput_1.EnumLandSizeUnitFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumLandSizeUnitFieldUpdateOperationsInput_1.EnumLandSizeUnitFieldUpdateOperationsInput)
], LandSizeUpdateInput.prototype, "unit", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyUpdateOneWithoutSizeInput_1.PropertyUpdateOneWithoutSizeInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyUpdateOneWithoutSizeInput_1.PropertyUpdateOneWithoutSizeInput)
], LandSizeUpdateInput.prototype, "Property", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestUpdateOneWithoutSizeInput_1.Property_RequestUpdateOneWithoutSizeInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestUpdateOneWithoutSizeInput_1.Property_RequestUpdateOneWithoutSizeInput)
], LandSizeUpdateInput.prototype, "Property_Request", void 0);
LandSizeUpdateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LandSizeUpdateInput", {
        isAbstract: true
    })
], LandSizeUpdateInput);
exports.LandSizeUpdateInput = LandSizeUpdateInput;
