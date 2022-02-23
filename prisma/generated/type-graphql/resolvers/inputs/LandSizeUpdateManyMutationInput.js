"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LandSizeUpdateManyMutationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const EnumLandSizeUnitFieldUpdateOperationsInput_1 = require("../inputs/EnumLandSizeUnitFieldUpdateOperationsInput");
const FloatFieldUpdateOperationsInput_1 = require("../inputs/FloatFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let LandSizeUpdateManyMutationInput = class LandSizeUpdateManyMutationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], LandSizeUpdateManyMutationInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput)
], LandSizeUpdateManyMutationInput.prototype, "measurement", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => EnumLandSizeUnitFieldUpdateOperationsInput_1.EnumLandSizeUnitFieldUpdateOperationsInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", EnumLandSizeUnitFieldUpdateOperationsInput_1.EnumLandSizeUnitFieldUpdateOperationsInput)
], LandSizeUpdateManyMutationInput.prototype, "unit", void 0);
LandSizeUpdateManyMutationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LandSizeUpdateManyMutationInput", {
        isAbstract: true
    })
], LandSizeUpdateManyMutationInput);
exports.LandSizeUpdateManyMutationInput = LandSizeUpdateManyMutationInput;
