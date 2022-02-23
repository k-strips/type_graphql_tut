"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumAcquisitionTypeFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AcquisitionType_1 = require("../../enums/AcquisitionType");
let EnumAcquisitionTypeFieldUpdateOperationsInput = class EnumAcquisitionTypeFieldUpdateOperationsInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AcquisitionType_1.AcquisitionType, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EnumAcquisitionTypeFieldUpdateOperationsInput.prototype, "set", void 0);
EnumAcquisitionTypeFieldUpdateOperationsInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("EnumAcquisitionTypeFieldUpdateOperationsInput", {
        isAbstract: true
    })
], EnumAcquisitionTypeFieldUpdateOperationsInput);
exports.EnumAcquisitionTypeFieldUpdateOperationsInput = EnumAcquisitionTypeFieldUpdateOperationsInput;
