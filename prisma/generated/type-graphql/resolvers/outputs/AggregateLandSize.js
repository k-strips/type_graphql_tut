"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateLandSize = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LandSizeAvgAggregate_1 = require("../outputs/LandSizeAvgAggregate");
const LandSizeCountAggregate_1 = require("../outputs/LandSizeCountAggregate");
const LandSizeMaxAggregate_1 = require("../outputs/LandSizeMaxAggregate");
const LandSizeMinAggregate_1 = require("../outputs/LandSizeMinAggregate");
const LandSizeSumAggregate_1 = require("../outputs/LandSizeSumAggregate");
let AggregateLandSize = class AggregateLandSize {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LandSizeCountAggregate_1.LandSizeCountAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LandSizeCountAggregate_1.LandSizeCountAggregate)
], AggregateLandSize.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LandSizeAvgAggregate_1.LandSizeAvgAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LandSizeAvgAggregate_1.LandSizeAvgAggregate)
], AggregateLandSize.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LandSizeSumAggregate_1.LandSizeSumAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LandSizeSumAggregate_1.LandSizeSumAggregate)
], AggregateLandSize.prototype, "_sum", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LandSizeMinAggregate_1.LandSizeMinAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LandSizeMinAggregate_1.LandSizeMinAggregate)
], AggregateLandSize.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LandSizeMaxAggregate_1.LandSizeMaxAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LandSizeMaxAggregate_1.LandSizeMaxAggregate)
], AggregateLandSize.prototype, "_max", void 0);
AggregateLandSize = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("AggregateLandSize", {
        isAbstract: true
    })
], AggregateLandSize);
exports.AggregateLandSize = AggregateLandSize;
