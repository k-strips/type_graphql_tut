"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceUpsertWithoutPropertyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PriceCreateWithoutPropertyInput_1 = require("../inputs/PriceCreateWithoutPropertyInput");
const PriceUpdateWithoutPropertyInput_1 = require("../inputs/PriceUpdateWithoutPropertyInput");
let PriceUpsertWithoutPropertyInput = class PriceUpsertWithoutPropertyInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PriceUpdateWithoutPropertyInput_1.PriceUpdateWithoutPropertyInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PriceUpdateWithoutPropertyInput_1.PriceUpdateWithoutPropertyInput)
], PriceUpsertWithoutPropertyInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PriceCreateWithoutPropertyInput_1.PriceCreateWithoutPropertyInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PriceCreateWithoutPropertyInput_1.PriceCreateWithoutPropertyInput)
], PriceUpsertWithoutPropertyInput.prototype, "create", void 0);
PriceUpsertWithoutPropertyInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PriceUpsertWithoutPropertyInput", {
        isAbstract: true
    })
], PriceUpsertWithoutPropertyInput);
exports.PriceUpsertWithoutPropertyInput = PriceUpsertWithoutPropertyInput;
