"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumLandSizeUnitFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LandSizeUnit_1 = require("../../enums/LandSizeUnit");
let EnumLandSizeUnitFieldUpdateOperationsInput = class EnumLandSizeUnitFieldUpdateOperationsInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LandSizeUnit_1.LandSizeUnit, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EnumLandSizeUnitFieldUpdateOperationsInput.prototype, "set", void 0);
EnumLandSizeUnitFieldUpdateOperationsInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("EnumLandSizeUnitFieldUpdateOperationsInput", {
        isAbstract: true
    })
], EnumLandSizeUnitFieldUpdateOperationsInput);
exports.EnumLandSizeUnitFieldUpdateOperationsInput = EnumLandSizeUnitFieldUpdateOperationsInput;
