"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceUpdateWithWhereUniqueWithoutProperty_RequestInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PriceUpdateWithoutProperty_RequestInput_1 = require("../inputs/PriceUpdateWithoutProperty_RequestInput");
const PriceWhereUniqueInput_1 = require("../inputs/PriceWhereUniqueInput");
let PriceUpdateWithWhereUniqueWithoutProperty_RequestInput = class PriceUpdateWithWhereUniqueWithoutProperty_RequestInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PriceWhereUniqueInput_1.PriceWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PriceWhereUniqueInput_1.PriceWhereUniqueInput)
], PriceUpdateWithWhereUniqueWithoutProperty_RequestInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PriceUpdateWithoutProperty_RequestInput_1.PriceUpdateWithoutProperty_RequestInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PriceUpdateWithoutProperty_RequestInput_1.PriceUpdateWithoutProperty_RequestInput)
], PriceUpdateWithWhereUniqueWithoutProperty_RequestInput.prototype, "data", void 0);
PriceUpdateWithWhereUniqueWithoutProperty_RequestInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PriceUpdateWithWhereUniqueWithoutProperty_RequestInput", {
        isAbstract: true
    })
], PriceUpdateWithWhereUniqueWithoutProperty_RequestInput);
exports.PriceUpdateWithWhereUniqueWithoutProperty_RequestInput = PriceUpdateWithWhereUniqueWithoutProperty_RequestInput;
