"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullableEnumAcquisitionTypeFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AcquisitionType_1 = require("../../enums/AcquisitionType");
let NullableEnumAcquisitionTypeFieldUpdateOperationsInput = class NullableEnumAcquisitionTypeFieldUpdateOperationsInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AcquisitionType_1.AcquisitionType, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], NullableEnumAcquisitionTypeFieldUpdateOperationsInput.prototype, "set", void 0);
NullableEnumAcquisitionTypeFieldUpdateOperationsInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("NullableEnumAcquisitionTypeFieldUpdateOperationsInput", {
        isAbstract: true
    })
], NullableEnumAcquisitionTypeFieldUpdateOperationsInput);
exports.NullableEnumAcquisitionTypeFieldUpdateOperationsInput = NullableEnumAcquisitionTypeFieldUpdateOperationsInput;
