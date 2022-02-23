"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregatePrice = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PriceAvgAggregate_1 = require("../outputs/PriceAvgAggregate");
const PriceCountAggregate_1 = require("../outputs/PriceCountAggregate");
const PriceMaxAggregate_1 = require("../outputs/PriceMaxAggregate");
const PriceMinAggregate_1 = require("../outputs/PriceMinAggregate");
const PriceSumAggregate_1 = require("../outputs/PriceSumAggregate");
let AggregatePrice = class AggregatePrice {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PriceCountAggregate_1.PriceCountAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PriceCountAggregate_1.PriceCountAggregate)
], AggregatePrice.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PriceAvgAggregate_1.PriceAvgAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PriceAvgAggregate_1.PriceAvgAggregate)
], AggregatePrice.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PriceSumAggregate_1.PriceSumAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PriceSumAggregate_1.PriceSumAggregate)
], AggregatePrice.prototype, "_sum", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PriceMinAggregate_1.PriceMinAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PriceMinAggregate_1.PriceMinAggregate)
], AggregatePrice.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PriceMaxAggregate_1.PriceMaxAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PriceMaxAggregate_1.PriceMaxAggregate)
], AggregatePrice.prototype, "_max", void 0);
AggregatePrice = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("AggregatePrice", {
        isAbstract: true
    })
], AggregatePrice);
exports.AggregatePrice = AggregatePrice;
