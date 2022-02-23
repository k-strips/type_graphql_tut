"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceCreateOrConnectWithoutProperty_RequestInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PriceCreateWithoutProperty_RequestInput_1 = require("../inputs/PriceCreateWithoutProperty_RequestInput");
const PriceWhereUniqueInput_1 = require("../inputs/PriceWhereUniqueInput");
let PriceCreateOrConnectWithoutProperty_RequestInput = class PriceCreateOrConnectWithoutProperty_RequestInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PriceWhereUniqueInput_1.PriceWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PriceWhereUniqueInput_1.PriceWhereUniqueInput)
], PriceCreateOrConnectWithoutProperty_RequestInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PriceCreateWithoutProperty_RequestInput_1.PriceCreateWithoutProperty_RequestInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PriceCreateWithoutProperty_RequestInput_1.PriceCreateWithoutProperty_RequestInput)
], PriceCreateOrConnectWithoutProperty_RequestInput.prototype, "create", void 0);
PriceCreateOrConnectWithoutProperty_RequestInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PriceCreateOrConnectWithoutProperty_RequestInput", {
        isAbstract: true
    })
], PriceCreateOrConnectWithoutProperty_RequestInput);
exports.PriceCreateOrConnectWithoutProperty_RequestInput = PriceCreateOrConnectWithoutProperty_RequestInput;
