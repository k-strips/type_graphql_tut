"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceCreateNestedOneWithoutAdvertisementInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PriceCreateOrConnectWithoutAdvertisementInput_1 = require("../inputs/PriceCreateOrConnectWithoutAdvertisementInput");
const PriceCreateWithoutAdvertisementInput_1 = require("../inputs/PriceCreateWithoutAdvertisementInput");
const PriceWhereUniqueInput_1 = require("../inputs/PriceWhereUniqueInput");
let PriceCreateNestedOneWithoutAdvertisementInput = class PriceCreateNestedOneWithoutAdvertisementInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PriceCreateWithoutAdvertisementInput_1.PriceCreateWithoutAdvertisementInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PriceCreateWithoutAdvertisementInput_1.PriceCreateWithoutAdvertisementInput)
], PriceCreateNestedOneWithoutAdvertisementInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PriceCreateOrConnectWithoutAdvertisementInput_1.PriceCreateOrConnectWithoutAdvertisementInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PriceCreateOrConnectWithoutAdvertisementInput_1.PriceCreateOrConnectWithoutAdvertisementInput)
], PriceCreateNestedOneWithoutAdvertisementInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PriceWhereUniqueInput_1.PriceWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PriceWhereUniqueInput_1.PriceWhereUniqueInput)
], PriceCreateNestedOneWithoutAdvertisementInput.prototype, "connect", void 0);
PriceCreateNestedOneWithoutAdvertisementInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PriceCreateNestedOneWithoutAdvertisementInput", {
        isAbstract: true
    })
], PriceCreateNestedOneWithoutAdvertisementInput);
exports.PriceCreateNestedOneWithoutAdvertisementInput = PriceCreateNestedOneWithoutAdvertisementInput;
