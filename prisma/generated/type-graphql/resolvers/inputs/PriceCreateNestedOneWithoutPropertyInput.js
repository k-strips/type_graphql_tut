"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceCreateNestedOneWithoutPropertyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PriceCreateOrConnectWithoutPropertyInput_1 = require("../inputs/PriceCreateOrConnectWithoutPropertyInput");
const PriceCreateWithoutPropertyInput_1 = require("../inputs/PriceCreateWithoutPropertyInput");
const PriceWhereUniqueInput_1 = require("../inputs/PriceWhereUniqueInput");
let PriceCreateNestedOneWithoutPropertyInput = class PriceCreateNestedOneWithoutPropertyInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PriceCreateWithoutPropertyInput_1.PriceCreateWithoutPropertyInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PriceCreateWithoutPropertyInput_1.PriceCreateWithoutPropertyInput)
], PriceCreateNestedOneWithoutPropertyInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PriceCreateOrConnectWithoutPropertyInput_1.PriceCreateOrConnectWithoutPropertyInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PriceCreateOrConnectWithoutPropertyInput_1.PriceCreateOrConnectWithoutPropertyInput)
], PriceCreateNestedOneWithoutPropertyInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PriceWhereUniqueInput_1.PriceWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PriceWhereUniqueInput_1.PriceWhereUniqueInput)
], PriceCreateNestedOneWithoutPropertyInput.prototype, "connect", void 0);
PriceCreateNestedOneWithoutPropertyInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PriceCreateNestedOneWithoutPropertyInput", {
        isAbstract: true
    })
], PriceCreateNestedOneWithoutPropertyInput);
exports.PriceCreateNestedOneWithoutPropertyInput = PriceCreateNestedOneWithoutPropertyInput;
