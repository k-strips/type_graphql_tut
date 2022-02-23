"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LandSizeUpsertWithoutPropertyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LandSizeCreateWithoutPropertyInput_1 = require("../inputs/LandSizeCreateWithoutPropertyInput");
const LandSizeUpdateWithoutPropertyInput_1 = require("../inputs/LandSizeUpdateWithoutPropertyInput");
let LandSizeUpsertWithoutPropertyInput = class LandSizeUpsertWithoutPropertyInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LandSizeUpdateWithoutPropertyInput_1.LandSizeUpdateWithoutPropertyInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", LandSizeUpdateWithoutPropertyInput_1.LandSizeUpdateWithoutPropertyInput)
], LandSizeUpsertWithoutPropertyInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LandSizeCreateWithoutPropertyInput_1.LandSizeCreateWithoutPropertyInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", LandSizeCreateWithoutPropertyInput_1.LandSizeCreateWithoutPropertyInput)
], LandSizeUpsertWithoutPropertyInput.prototype, "create", void 0);
LandSizeUpsertWithoutPropertyInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("LandSizeUpsertWithoutPropertyInput", {
        isAbstract: true
    })
], LandSizeUpsertWithoutPropertyInput);
exports.LandSizeUpsertWithoutPropertyInput = LandSizeUpsertWithoutPropertyInput;
