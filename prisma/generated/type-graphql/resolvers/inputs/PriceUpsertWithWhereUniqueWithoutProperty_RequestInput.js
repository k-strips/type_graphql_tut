"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceUpsertWithWhereUniqueWithoutProperty_RequestInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PriceCreateWithoutProperty_RequestInput_1 = require("../inputs/PriceCreateWithoutProperty_RequestInput");
const PriceUpdateWithoutProperty_RequestInput_1 = require("../inputs/PriceUpdateWithoutProperty_RequestInput");
const PriceWhereUniqueInput_1 = require("../inputs/PriceWhereUniqueInput");
let PriceUpsertWithWhereUniqueWithoutProperty_RequestInput = class PriceUpsertWithWhereUniqueWithoutProperty_RequestInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PriceWhereUniqueInput_1.PriceWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PriceWhereUniqueInput_1.PriceWhereUniqueInput)
], PriceUpsertWithWhereUniqueWithoutProperty_RequestInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PriceUpdateWithoutProperty_RequestInput_1.PriceUpdateWithoutProperty_RequestInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PriceUpdateWithoutProperty_RequestInput_1.PriceUpdateWithoutProperty_RequestInput)
], PriceUpsertWithWhereUniqueWithoutProperty_RequestInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PriceCreateWithoutProperty_RequestInput_1.PriceCreateWithoutProperty_RequestInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PriceCreateWithoutProperty_RequestInput_1.PriceCreateWithoutProperty_RequestInput)
], PriceUpsertWithWhereUniqueWithoutProperty_RequestInput.prototype, "create", void 0);
PriceUpsertWithWhereUniqueWithoutProperty_RequestInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PriceUpsertWithWhereUniqueWithoutProperty_RequestInput", {
        isAbstract: true
    })
], PriceUpsertWithWhereUniqueWithoutProperty_RequestInput);
exports.PriceUpsertWithWhereUniqueWithoutProperty_RequestInput = PriceUpsertWithWhereUniqueWithoutProperty_RequestInput;
