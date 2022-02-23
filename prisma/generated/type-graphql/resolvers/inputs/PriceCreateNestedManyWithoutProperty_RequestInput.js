"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceCreateNestedManyWithoutProperty_RequestInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PriceCreateManyProperty_RequestInputEnvelope_1 = require("../inputs/PriceCreateManyProperty_RequestInputEnvelope");
const PriceCreateOrConnectWithoutProperty_RequestInput_1 = require("../inputs/PriceCreateOrConnectWithoutProperty_RequestInput");
const PriceCreateWithoutProperty_RequestInput_1 = require("../inputs/PriceCreateWithoutProperty_RequestInput");
const PriceWhereUniqueInput_1 = require("../inputs/PriceWhereUniqueInput");
let PriceCreateNestedManyWithoutProperty_RequestInput = class PriceCreateNestedManyWithoutProperty_RequestInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PriceCreateWithoutProperty_RequestInput_1.PriceCreateWithoutProperty_RequestInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PriceCreateNestedManyWithoutProperty_RequestInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PriceCreateOrConnectWithoutProperty_RequestInput_1.PriceCreateOrConnectWithoutProperty_RequestInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PriceCreateNestedManyWithoutProperty_RequestInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PriceCreateManyProperty_RequestInputEnvelope_1.PriceCreateManyProperty_RequestInputEnvelope, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PriceCreateManyProperty_RequestInputEnvelope_1.PriceCreateManyProperty_RequestInputEnvelope)
], PriceCreateNestedManyWithoutProperty_RequestInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PriceWhereUniqueInput_1.PriceWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PriceCreateNestedManyWithoutProperty_RequestInput.prototype, "connect", void 0);
PriceCreateNestedManyWithoutProperty_RequestInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PriceCreateNestedManyWithoutProperty_RequestInput", {
        isAbstract: true
    })
], PriceCreateNestedManyWithoutProperty_RequestInput);
exports.PriceCreateNestedManyWithoutProperty_RequestInput = PriceCreateNestedManyWithoutProperty_RequestInput;
