"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PriceAvgAggregate_1 = require("../outputs/PriceAvgAggregate");
const PriceCountAggregate_1 = require("../outputs/PriceCountAggregate");
const PriceMaxAggregate_1 = require("../outputs/PriceMaxAggregate");
const PriceMinAggregate_1 = require("../outputs/PriceMinAggregate");
const PriceSumAggregate_1 = require("../outputs/PriceSumAggregate");
const Currency_1 = require("../../enums/Currency");
const Duration_1 = require("../../enums/Duration");
let PriceGroupBy = class PriceGroupBy {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PriceGroupBy.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PriceGroupBy.prototype, "figure", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Currency_1.Currency, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PriceGroupBy.prototype, "currency", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Duration_1.Duration, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PriceGroupBy.prototype, "duration", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PriceGroupBy.prototype, "propertyId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PriceGroupBy.prototype, "advertisementId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PriceGroupBy.prototype, "property_RequestId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PriceCountAggregate_1.PriceCountAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PriceCountAggregate_1.PriceCountAggregate)
], PriceGroupBy.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PriceAvgAggregate_1.PriceAvgAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PriceAvgAggregate_1.PriceAvgAggregate)
], PriceGroupBy.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PriceSumAggregate_1.PriceSumAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PriceSumAggregate_1.PriceSumAggregate)
], PriceGroupBy.prototype, "_sum", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PriceMinAggregate_1.PriceMinAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PriceMinAggregate_1.PriceMinAggregate)
], PriceGroupBy.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PriceMaxAggregate_1.PriceMaxAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PriceMaxAggregate_1.PriceMaxAggregate)
], PriceGroupBy.prototype, "_max", void 0);
PriceGroupBy = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("PriceGroupBy", {
        isAbstract: true
    })
], PriceGroupBy);
exports.PriceGroupBy = PriceGroupBy;
