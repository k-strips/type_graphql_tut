"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Property_RequestAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let Property_RequestAvgAggregate = class Property_RequestAvgAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Property_RequestAvgAggregate.prototype, "parkingCapacity", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Property_RequestAvgAggregate.prototype, "seating", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Property_RequestAvgAggregate.prototype, "bedrooms", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Property_RequestAvgAggregate.prototype, "bathrooms", void 0);
Property_RequestAvgAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("Property_RequestAvgAggregate", {
        isAbstract: true
    })
], Property_RequestAvgAggregate);
exports.Property_RequestAvgAggregate = Property_RequestAvgAggregate;
