"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Property_RequestSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let Property_RequestSumAggregate = class Property_RequestSumAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Property_RequestSumAggregate.prototype, "parkingCapacity", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Property_RequestSumAggregate.prototype, "seating", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Property_RequestSumAggregate.prototype, "bedrooms", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Property_RequestSumAggregate.prototype, "bathrooms", void 0);
Property_RequestSumAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("Property_RequestSumAggregate", {
        isAbstract: true
    })
], Property_RequestSumAggregate);
exports.Property_RequestSumAggregate = Property_RequestSumAggregate;
