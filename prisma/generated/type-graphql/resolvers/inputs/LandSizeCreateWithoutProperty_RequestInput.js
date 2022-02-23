"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LandSizeCreateWithoutProperty_RequestInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PropertyCreateNestedOneWithoutSizeInput_1 = require("../inputs/PropertyCreateNestedOneWithoutSizeInput");
const LandSizeUnit_1 = require("../../enums/LandSizeUnit");
let LandSizeCreateWithoutProperty_RequestInput = class LandSizeCreateWithoutProperty_RequestInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LandSizeCreateWithoutProperty_RequestInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], LandSizeCreateWithoutProperty_RequestInput.prototype, "measurement", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LandSizeUnit_1.LandSizeUnit, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LandSizeCreateWithoutProperty_RequestInput.prototype, "unit", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyCreateNestedOneWithoutSizeInput_1.PropertyCreateNestedOneWithoutSizeInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyCreateNestedOneWithoutSizeInput_1.PropertyCreateNestedOneWithoutSizeInput)
], LandSizeCreateWithoutProperty_RequestInput.prototype, "Property", void 0);
LandSizeCreateWithoutProperty_RequestInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LandSizeCreateWithoutProperty_RequestInput", {
        isAbstract: true
    })
], LandSizeCreateWithoutProperty_RequestInput);
exports.LandSizeCreateWithoutProperty_RequestInput = LandSizeCreateWithoutProperty_RequestInput;
