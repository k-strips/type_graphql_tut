"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LandSizeCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LandSizeUnit_1 = require("../../enums/LandSizeUnit");
let LandSizeCreateManyInput = class LandSizeCreateManyInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LandSizeCreateManyInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], LandSizeCreateManyInput.prototype, "measurement", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LandSizeUnit_1.LandSizeUnit, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LandSizeCreateManyInput.prototype, "unit", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LandSizeCreateManyInput.prototype, "propertyId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LandSizeCreateManyInput.prototype, "property_RequestId", void 0);
LandSizeCreateManyInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LandSizeCreateManyInput", {
        isAbstract: true
    })
], LandSizeCreateManyInput);
exports.LandSizeCreateManyInput = LandSizeCreateManyInput;
