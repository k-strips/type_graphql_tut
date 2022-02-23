"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceCreateOrConnectWithoutPropertyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PriceCreateWithoutPropertyInput_1 = require("../inputs/PriceCreateWithoutPropertyInput");
const PriceWhereUniqueInput_1 = require("../inputs/PriceWhereUniqueInput");
let PriceCreateOrConnectWithoutPropertyInput = class PriceCreateOrConnectWithoutPropertyInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PriceWhereUniqueInput_1.PriceWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PriceWhereUniqueInput_1.PriceWhereUniqueInput)
], PriceCreateOrConnectWithoutPropertyInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PriceCreateWithoutPropertyInput_1.PriceCreateWithoutPropertyInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PriceCreateWithoutPropertyInput_1.PriceCreateWithoutPropertyInput)
], PriceCreateOrConnectWithoutPropertyInput.prototype, "create", void 0);
PriceCreateOrConnectWithoutPropertyInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PriceCreateOrConnectWithoutPropertyInput", {
        isAbstract: true
    })
], PriceCreateOrConnectWithoutPropertyInput);
exports.PriceCreateOrConnectWithoutPropertyInput = PriceCreateOrConnectWithoutPropertyInput;
