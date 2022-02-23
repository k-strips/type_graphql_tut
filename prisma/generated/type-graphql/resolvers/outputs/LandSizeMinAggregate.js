"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LandSizeMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LandSizeUnit_1 = require("../../enums/LandSizeUnit");
let LandSizeMinAggregate = class LandSizeMinAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LandSizeMinAggregate.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], LandSizeMinAggregate.prototype, "measurement", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LandSizeUnit_1.LandSizeUnit, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LandSizeMinAggregate.prototype, "unit", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LandSizeMinAggregate.prototype, "propertyId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], LandSizeMinAggregate.prototype, "property_RequestId", void 0);
LandSizeMinAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("LandSizeMinAggregate", {
        isAbstract: true
    })
], LandSizeMinAggregate);
exports.LandSizeMinAggregate = LandSizeMinAggregate;
