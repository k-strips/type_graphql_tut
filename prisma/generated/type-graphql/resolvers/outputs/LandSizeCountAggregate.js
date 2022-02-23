"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LandSizeCountAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let LandSizeCountAggregate = class LandSizeCountAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], LandSizeCountAggregate.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], LandSizeCountAggregate.prototype, "measurement", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], LandSizeCountAggregate.prototype, "unit", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], LandSizeCountAggregate.prototype, "propertyId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], LandSizeCountAggregate.prototype, "property_RequestId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], LandSizeCountAggregate.prototype, "_all", void 0);
LandSizeCountAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("LandSizeCountAggregate", {
        isAbstract: true
    })
], LandSizeCountAggregate);
exports.LandSizeCountAggregate = LandSizeCountAggregate;
