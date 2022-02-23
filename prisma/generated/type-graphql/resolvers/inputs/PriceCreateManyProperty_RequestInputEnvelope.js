"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceCreateManyProperty_RequestInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PriceCreateManyProperty_RequestInput_1 = require("../inputs/PriceCreateManyProperty_RequestInput");
let PriceCreateManyProperty_RequestInputEnvelope = class PriceCreateManyProperty_RequestInputEnvelope {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PriceCreateManyProperty_RequestInput_1.PriceCreateManyProperty_RequestInput], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PriceCreateManyProperty_RequestInputEnvelope.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], PriceCreateManyProperty_RequestInputEnvelope.prototype, "skipDuplicates", void 0);
PriceCreateManyProperty_RequestInputEnvelope = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PriceCreateManyProperty_RequestInputEnvelope", {
        isAbstract: true
    })
], PriceCreateManyProperty_RequestInputEnvelope);
exports.PriceCreateManyProperty_RequestInputEnvelope = PriceCreateManyProperty_RequestInputEnvelope;
