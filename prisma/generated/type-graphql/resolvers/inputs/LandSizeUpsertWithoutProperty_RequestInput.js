"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LandSizeUpsertWithoutProperty_RequestInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LandSizeCreateWithoutProperty_RequestInput_1 = require("../inputs/LandSizeCreateWithoutProperty_RequestInput");
const LandSizeUpdateWithoutProperty_RequestInput_1 = require("../inputs/LandSizeUpdateWithoutProperty_RequestInput");
let LandSizeUpsertWithoutProperty_RequestInput = class LandSizeUpsertWithoutProperty_RequestInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LandSizeUpdateWithoutProperty_RequestInput_1.LandSizeUpdateWithoutProperty_RequestInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", LandSizeUpdateWithoutProperty_RequestInput_1.LandSizeUpdateWithoutProperty_RequestInput)
], LandSizeUpsertWithoutProperty_RequestInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LandSizeCreateWithoutProperty_RequestInput_1.LandSizeCreateWithoutProperty_RequestInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", LandSizeCreateWithoutProperty_RequestInput_1.LandSizeCreateWithoutProperty_RequestInput)
], LandSizeUpsertWithoutProperty_RequestInput.prototype, "create", void 0);
LandSizeUpsertWithoutProperty_RequestInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LandSizeUpsertWithoutProperty_RequestInput", {
        isAbstract: true
    })
], LandSizeUpsertWithoutProperty_RequestInput);
exports.LandSizeUpsertWithoutProperty_RequestInput = LandSizeUpsertWithoutProperty_RequestInput;
