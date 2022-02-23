"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceUpsertWithoutAdvertisementInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PriceCreateWithoutAdvertisementInput_1 = require("../inputs/PriceCreateWithoutAdvertisementInput");
const PriceUpdateWithoutAdvertisementInput_1 = require("../inputs/PriceUpdateWithoutAdvertisementInput");
let PriceUpsertWithoutAdvertisementInput = class PriceUpsertWithoutAdvertisementInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PriceUpdateWithoutAdvertisementInput_1.PriceUpdateWithoutAdvertisementInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PriceUpdateWithoutAdvertisementInput_1.PriceUpdateWithoutAdvertisementInput)
], PriceUpsertWithoutAdvertisementInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PriceCreateWithoutAdvertisementInput_1.PriceCreateWithoutAdvertisementInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PriceCreateWithoutAdvertisementInput_1.PriceCreateWithoutAdvertisementInput)
], PriceUpsertWithoutAdvertisementInput.prototype, "create", void 0);
PriceUpsertWithoutAdvertisementInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PriceUpsertWithoutAdvertisementInput", {
        isAbstract: true
    })
], PriceUpsertWithoutAdvertisementInput);
exports.PriceUpsertWithoutAdvertisementInput = PriceUpsertWithoutAdvertisementInput;
