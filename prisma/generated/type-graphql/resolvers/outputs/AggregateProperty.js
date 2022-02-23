"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateProperty = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PropertyAvgAggregate_1 = require("../outputs/PropertyAvgAggregate");
const PropertyCountAggregate_1 = require("../outputs/PropertyCountAggregate");
const PropertyMaxAggregate_1 = require("../outputs/PropertyMaxAggregate");
const PropertyMinAggregate_1 = require("../outputs/PropertyMinAggregate");
const PropertySumAggregate_1 = require("../outputs/PropertySumAggregate");
let AggregateProperty = class AggregateProperty {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyCountAggregate_1.PropertyCountAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyCountAggregate_1.PropertyCountAggregate)
], AggregateProperty.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyAvgAggregate_1.PropertyAvgAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyAvgAggregate_1.PropertyAvgAggregate)
], AggregateProperty.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertySumAggregate_1.PropertySumAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertySumAggregate_1.PropertySumAggregate)
], AggregateProperty.prototype, "_sum", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyMinAggregate_1.PropertyMinAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyMinAggregate_1.PropertyMinAggregate)
], AggregateProperty.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyMaxAggregate_1.PropertyMaxAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PropertyMaxAggregate_1.PropertyMaxAggregate)
], AggregateProperty.prototype, "_max", void 0);
AggregateProperty = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("AggregateProperty", {
        isAbstract: true
    })
], AggregateProperty);
exports.AggregateProperty = AggregateProperty;
