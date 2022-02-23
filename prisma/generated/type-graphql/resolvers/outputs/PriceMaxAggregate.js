"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Currency_1 = require("../../enums/Currency");
const Duration_1 = require("../../enums/Duration");
let PriceMaxAggregate = class PriceMaxAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PriceMaxAggregate.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PriceMaxAggregate.prototype, "figure", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Currency_1.Currency, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PriceMaxAggregate.prototype, "currency", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Duration_1.Duration, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PriceMaxAggregate.prototype, "duration", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PriceMaxAggregate.prototype, "propertyId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PriceMaxAggregate.prototype, "advertisementId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PriceMaxAggregate.prototype, "property_RequestId", void 0);
PriceMaxAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("PriceMaxAggregate", {
        isAbstract: true
    })
], PriceMaxAggregate);
exports.PriceMaxAggregate = PriceMaxAggregate;
