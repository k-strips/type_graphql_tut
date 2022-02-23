"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateProperty_Request = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Property_RequestAvgAggregate_1 = require("../outputs/Property_RequestAvgAggregate");
const Property_RequestCountAggregate_1 = require("../outputs/Property_RequestCountAggregate");
const Property_RequestMaxAggregate_1 = require("../outputs/Property_RequestMaxAggregate");
const Property_RequestMinAggregate_1 = require("../outputs/Property_RequestMinAggregate");
const Property_RequestSumAggregate_1 = require("../outputs/Property_RequestSumAggregate");
let AggregateProperty_Request = class AggregateProperty_Request {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestCountAggregate_1.Property_RequestCountAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestCountAggregate_1.Property_RequestCountAggregate)
], AggregateProperty_Request.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestAvgAggregate_1.Property_RequestAvgAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestAvgAggregate_1.Property_RequestAvgAggregate)
], AggregateProperty_Request.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestSumAggregate_1.Property_RequestSumAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestSumAggregate_1.Property_RequestSumAggregate)
], AggregateProperty_Request.prototype, "_sum", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestMinAggregate_1.Property_RequestMinAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestMinAggregate_1.Property_RequestMinAggregate)
], AggregateProperty_Request.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestMaxAggregate_1.Property_RequestMaxAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestMaxAggregate_1.Property_RequestMaxAggregate)
], AggregateProperty_Request.prototype, "_max", void 0);
AggregateProperty_Request = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("AggregateProperty_Request", {
        isAbstract: true
    })
], AggregateProperty_Request);
exports.AggregateProperty_Request = AggregateProperty_Request;
