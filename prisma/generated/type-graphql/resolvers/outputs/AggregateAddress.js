"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateAddress = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AddressCountAggregate_1 = require("../outputs/AddressCountAggregate");
const AddressMaxAggregate_1 = require("../outputs/AddressMaxAggregate");
const AddressMinAggregate_1 = require("../outputs/AddressMinAggregate");
let AggregateAddress = class AggregateAddress {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AddressCountAggregate_1.AddressCountAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AddressCountAggregate_1.AddressCountAggregate)
], AggregateAddress.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AddressMinAggregate_1.AddressMinAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AddressMinAggregate_1.AddressMinAggregate)
], AggregateAddress.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AddressMaxAggregate_1.AddressMaxAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AddressMaxAggregate_1.AddressMaxAggregate)
], AggregateAddress.prototype, "_max", void 0);
AggregateAddress = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("AggregateAddress", {
        isAbstract: true
    })
], AggregateAddress);
exports.AggregateAddress = AggregateAddress;
