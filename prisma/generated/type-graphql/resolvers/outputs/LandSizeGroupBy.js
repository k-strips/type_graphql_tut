"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LandSizeGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LandSizeAvgAggregate_1 = require("../outputs/LandSizeAvgAggregate");
const LandSizeCountAggregate_1 = require("../outputs/LandSizeCountAggregate");
const LandSizeMaxAggregate_1 = require("../outputs/LandSizeMaxAggregate");
const LandSizeMinAggregate_1 = require("../outputs/LandSizeMinAggregate");
const LandSizeSumAggregate_1 = require("../outputs/LandSizeSumAggregate");
const LandSizeUnit_1 = require("../../enums/LandSizeUnit");
let LandSizeGroupBy = class LandSizeGroupBy {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LandSizeGroupBy.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], LandSizeGroupBy.prototype, "measurement", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LandSizeUnit_1.LandSizeUnit, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LandSizeGroupBy.prototype, "unit", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LandSizeGroupBy.prototype, "propertyId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LandSizeGroupBy.prototype, "property_RequestId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LandSizeCountAggregate_1.LandSizeCountAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LandSizeCountAggregate_1.LandSizeCountAggregate)
], LandSizeGroupBy.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LandSizeAvgAggregate_1.LandSizeAvgAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LandSizeAvgAggregate_1.LandSizeAvgAggregate)
], LandSizeGroupBy.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LandSizeSumAggregate_1.LandSizeSumAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LandSizeSumAggregate_1.LandSizeSumAggregate)
], LandSizeGroupBy.prototype, "_sum", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LandSizeMinAggregate_1.LandSizeMinAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LandSizeMinAggregate_1.LandSizeMinAggregate)
], LandSizeGroupBy.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LandSizeMaxAggregate_1.LandSizeMaxAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LandSizeMaxAggregate_1.LandSizeMaxAggregate)
], LandSizeGroupBy.prototype, "_max", void 0);
LandSizeGroupBy = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("LandSizeGroupBy", {
        isAbstract: true
    })
], LandSizeGroupBy);
exports.LandSizeGroupBy = LandSizeGroupBy;
