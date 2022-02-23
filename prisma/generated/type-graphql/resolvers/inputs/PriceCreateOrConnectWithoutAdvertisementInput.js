"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceCreateOrConnectWithoutAdvertisementInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PriceCreateWithoutAdvertisementInput_1 = require("../inputs/PriceCreateWithoutAdvertisementInput");
const PriceWhereUniqueInput_1 = require("../inputs/PriceWhereUniqueInput");
let PriceCreateOrConnectWithoutAdvertisementInput = class PriceCreateOrConnectWithoutAdvertisementInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PriceWhereUniqueInput_1.PriceWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PriceWhereUniqueInput_1.PriceWhereUniqueInput)
], PriceCreateOrConnectWithoutAdvertisementInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PriceCreateWithoutAdvertisementInput_1.PriceCreateWithoutAdvertisementInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PriceCreateWithoutAdvertisementInput_1.PriceCreateWithoutAdvertisementInput)
], PriceCreateOrConnectWithoutAdvertisementInput.prototype, "create", void 0);
PriceCreateOrConnectWithoutAdvertisementInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PriceCreateOrConnectWithoutAdvertisementInput", {
        isAbstract: true
    })
], PriceCreateOrConnectWithoutAdvertisementInput);
exports.PriceCreateOrConnectWithoutAdvertisementInput = PriceCreateOrConnectWithoutAdvertisementInput;
