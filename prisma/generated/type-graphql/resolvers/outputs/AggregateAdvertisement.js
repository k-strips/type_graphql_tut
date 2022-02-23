"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateAdvertisement = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AdvertisementCountAggregate_1 = require("../outputs/AdvertisementCountAggregate");
const AdvertisementMaxAggregate_1 = require("../outputs/AdvertisementMaxAggregate");
const AdvertisementMinAggregate_1 = require("../outputs/AdvertisementMinAggregate");
let AggregateAdvertisement = class AggregateAdvertisement {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementCountAggregate_1.AdvertisementCountAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementCountAggregate_1.AdvertisementCountAggregate)
], AggregateAdvertisement.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementMinAggregate_1.AdvertisementMinAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementMinAggregate_1.AdvertisementMinAggregate)
], AggregateAdvertisement.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementMaxAggregate_1.AdvertisementMaxAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementMaxAggregate_1.AdvertisementMaxAggregate)
], AggregateAdvertisement.prototype, "_max", void 0);
AggregateAdvertisement = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("AggregateAdvertisement", {
        isAbstract: true
    })
], AggregateAdvertisement);
exports.AggregateAdvertisement = AggregateAdvertisement;
