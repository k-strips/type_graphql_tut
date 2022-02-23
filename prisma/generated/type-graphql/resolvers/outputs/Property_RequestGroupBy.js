"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Property_RequestGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Property_RequestAvgAggregate_1 = require("../outputs/Property_RequestAvgAggregate");
const Property_RequestCountAggregate_1 = require("../outputs/Property_RequestCountAggregate");
const Property_RequestMaxAggregate_1 = require("../outputs/Property_RequestMaxAggregate");
const Property_RequestMinAggregate_1 = require("../outputs/Property_RequestMinAggregate");
const Property_RequestSumAggregate_1 = require("../outputs/Property_RequestSumAggregate");
const AcquisitionType_1 = require("../../enums/AcquisitionType");
const PropertyState_1 = require("../../enums/PropertyState");
const PropertyType_1 = require("../../enums/PropertyType");
let Property_RequestGroupBy = class Property_RequestGroupBy {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Property_RequestGroupBy.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyType_1.PropertyType, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Property_RequestGroupBy.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => AcquisitionType_1.AcquisitionType, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Property_RequestGroupBy.prototype, "acquisition", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PropertyState_1.PropertyState, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Property_RequestGroupBy.prototype, "state", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], Property_RequestGroupBy.prototype, "amenities", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Property_RequestGroupBy.prototype, "parkingCapacity", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Property_RequestGroupBy.prototype, "seating", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Property_RequestGroupBy.prototype, "bedrooms", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Property_RequestGroupBy.prototype, "bathrooms", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Property_RequestGroupBy.prototype, "additionalInfo", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Property_RequestGroupBy.prototype, "region", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Property_RequestGroupBy.prototype, "city", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Property_RequestGroupBy.prototype, "town", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], Property_RequestGroupBy.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], Property_RequestGroupBy.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Property_RequestGroupBy.prototype, "userId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestCountAggregate_1.Property_RequestCountAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestCountAggregate_1.Property_RequestCountAggregate)
], Property_RequestGroupBy.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestAvgAggregate_1.Property_RequestAvgAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestAvgAggregate_1.Property_RequestAvgAggregate)
], Property_RequestGroupBy.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestSumAggregate_1.Property_RequestSumAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestSumAggregate_1.Property_RequestSumAggregate)
], Property_RequestGroupBy.prototype, "_sum", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestMinAggregate_1.Property_RequestMinAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestMinAggregate_1.Property_RequestMinAggregate)
], Property_RequestGroupBy.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Property_RequestMaxAggregate_1.Property_RequestMaxAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Property_RequestMaxAggregate_1.Property_RequestMaxAggregate)
], Property_RequestGroupBy.prototype, "_max", void 0);
Property_RequestGroupBy = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("Property_RequestGroupBy", {
        isAbstract: true
    })
], Property_RequestGroupBy);
exports.Property_RequestGroupBy = Property_RequestGroupBy;
