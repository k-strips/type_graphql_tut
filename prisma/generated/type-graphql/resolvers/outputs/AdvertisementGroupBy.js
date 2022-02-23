"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdvertisementGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const AdvertisementCountAggregate_1 = require("../outputs/AdvertisementCountAggregate");
const AdvertisementMaxAggregate_1 = require("../outputs/AdvertisementMaxAggregate");
const AdvertisementMinAggregate_1 = require("../outputs/AdvertisementMinAggregate");
let AdvertisementGroupBy = class AdvertisementGroupBy {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AdvertisementGroupBy.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], AdvertisementGroupBy.prototype, "isExpired", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], AdvertisementGroupBy.prototype, "isPaused", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], AdvertisementGroupBy.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], AdvertisementGroupBy.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AdvertisementGroupBy.prototype, "userId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AdvertisementGroupBy.prototype, "organizationId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AdvertisementGroupBy.prototype, "propertyId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementCountAggregate_1.AdvertisementCountAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementCountAggregate_1.AdvertisementCountAggregate)
], AdvertisementGroupBy.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementMinAggregate_1.AdvertisementMinAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementMinAggregate_1.AdvertisementMinAggregate)
], AdvertisementGroupBy.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AdvertisementMaxAggregate_1.AdvertisementMaxAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", AdvertisementMaxAggregate_1.AdvertisementMaxAggregate)
], AdvertisementGroupBy.prototype, "_max", void 0);
AdvertisementGroupBy = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("AdvertisementGroupBy", {
        isAbstract: true
    })
], AdvertisementGroupBy);
exports.AdvertisementGroupBy = AdvertisementGroupBy;
