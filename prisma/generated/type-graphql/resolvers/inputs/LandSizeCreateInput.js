"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LandSizeCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PropertyCreateNestedOneWithoutSizeInput_1 = require("../inputs/PropertyCreateNestedOneWithoutSizeInput");
const Property_RequestCreateNestedOneWithoutSizeInput_1 = require("../inputs/Property_RequestCreateNestedOneWithoutSizeInput");
const LandSizeUnit_1 = require("../../enums/LandSizeUnit");
let LandSizeCreateInput = class LandSizeCreateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LandSizeCreateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], LandSizeCreateInput.prototype, "measurement", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LandSizeUnit_1.LandSizeUnit, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LandSizeCreateInput.prototype, "unit", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyCreateNestedOneWithoutSizeInput_1.PropertyCreateNestedOneWithoutSizeInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyCreateNestedOneWithoutSizeInput_1.PropertyCreateNestedOneWithoutSizeInput)
], LandSizeCreateInput.prototype, "Property", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestCreateNestedOneWithoutSizeInput_1.Property_RequestCreateNestedOneWithoutSizeInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestCreateNestedOneWithoutSizeInput_1.Property_RequestCreateNestedOneWithoutSizeInput)
], LandSizeCreateInput.prototype, "Property_Request", void 0);
LandSizeCreateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LandSizeCreateInput", {
        isAbstract: true
    })
], LandSizeCreateInput);
exports.LandSizeCreateInput = LandSizeCreateInput;
