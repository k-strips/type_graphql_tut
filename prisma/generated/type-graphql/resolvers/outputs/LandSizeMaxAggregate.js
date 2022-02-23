"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LandSizeMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LandSizeUnit_1 = require("../../enums/LandSizeUnit");
let LandSizeMaxAggregate = class LandSizeMaxAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LandSizeMaxAggregate.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], LandSizeMaxAggregate.prototype, "measurement", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LandSizeUnit_1.LandSizeUnit, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LandSizeMaxAggregate.prototype, "unit", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LandSizeMaxAggregate.prototype, "propertyId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LandSizeMaxAggregate.prototype, "property_RequestId", void 0);
LandSizeMaxAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("LandSizeMaxAggregate", {
        isAbstract: true
    })
], LandSizeMaxAggregate);
exports.LandSizeMaxAggregate = LandSizeMaxAggregate;
