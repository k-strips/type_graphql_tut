"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LandSizeCreateWithoutPropertyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Property_RequestCreateNestedOneWithoutSizeInput_1 = require("../inputs/Property_RequestCreateNestedOneWithoutSizeInput");
const LandSizeUnit_1 = require("../../enums/LandSizeUnit");
let LandSizeCreateWithoutPropertyInput = class LandSizeCreateWithoutPropertyInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LandSizeCreateWithoutPropertyInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], LandSizeCreateWithoutPropertyInput.prototype, "measurement", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LandSizeUnit_1.LandSizeUnit, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LandSizeCreateWithoutPropertyInput.prototype, "unit", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestCreateNestedOneWithoutSizeInput_1.Property_RequestCreateNestedOneWithoutSizeInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestCreateNestedOneWithoutSizeInput_1.Property_RequestCreateNestedOneWithoutSizeInput)
], LandSizeCreateWithoutPropertyInput.prototype, "Property_Request", void 0);
LandSizeCreateWithoutPropertyInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LandSizeCreateWithoutPropertyInput", {
        isAbstract: true
    })
], LandSizeCreateWithoutPropertyInput);
exports.LandSizeCreateWithoutPropertyInput = LandSizeCreateWithoutPropertyInput;
